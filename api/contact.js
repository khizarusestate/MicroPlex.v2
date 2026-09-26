import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Basic rate-limit-ish guard: reject obviously spammy/empty submissions early.
function validate(body) {
  const { name, email, message } = body || {};
  if (!name || !email || !message) return "All fields are required.";
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Please provide a valid email address.";
  }
  if (message.length > 5000) return "Message is too long.";
  return null;
}

app.post("/api/contact", async (req, res) => {
  // Honeypot: a field that's hidden from real visitors via CSS but that
  // form-filling bots tend to fill in anyway. If it's populated, pretend
  // success and drop the message — no email sent, and the bot gets no
  // signal that it was caught.
  if (req.body?.company) {
    return res.status(200).json({ success: true });
  }

  const error = validate(req.body);
  if (error) return res.status(400).json({ error });

  const { name, email, message } = req.body;

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Missing EMAIL_USER/EMAIL_PASS environment variables");
    return res.status(500).json({ error: "Email service is not configured." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password, not the account password
      },
    });

    await transporter.sendMail({
      from: `"MicroPlex Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;font-size:14px;color:#111">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
});

export default app;
