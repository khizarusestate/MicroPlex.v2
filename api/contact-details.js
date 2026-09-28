import express from "express";
import nodemailer from "nodemailer";

const app = express();
// Raised from the default 100kb so a base64-encoded product image fits —
// capped well under Vercel's ~4.5MB request-body ceiling.
app.use(express.json({ limit: "6mb" }));

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const MAX_IMAGE_BYTES = 3 * 1024 * 1024; // 3MB decoded

function validate(body) {
  const { businessName, idea, image } = body || {};
  if (!businessName || !businessName.trim()) return "Business name is required.";
  if (businessName.length > 150) return "Business name is too long.";
  if (!idea || !idea.trim()) return "Please describe your idea.";
  if (idea.length > 5000) return "Idea description is too long.";

  if (!image || !image.dataUrl) return "A product image is required.";
  const match = /^data:(image\/[a-zA-Z+.-]+);base64,(.+)$/.exec(image.dataUrl);
  if (!match) return "Product image must be a valid image file.";
  const [, , base64Data] = match;
  // base64 -> decoded byte size, without actually decoding
  const decodedSize = base64Data.length * 0.75;
  if (decodedSize > MAX_IMAGE_BYTES) return "Product image must be under 3MB.";

  return null;
}

app.post("/api/contact-details", async (req, res) => {
  // Same honeypot pattern as /api/contact.
  if (req.body?.company) {
    return res.status(200).json({ success: true });
  }

  const error = validate(req.body);
  if (error) return res.status(400).json({ error });

  const { name, email, businessName, idea, image } = req.body;
  const match = /^data:(image\/[a-zA-Z+.-]+);base64,(.+)$/.exec(image.dataUrl);
  const [, mimeType, base64Data] = match;
  const ext = mimeType.split("/")[1]?.split("+")[0] || "png";

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("Missing EMAIL_USER/EMAIL_PASS environment variables");
    return res.status(500).json({ error: "Email service is not configured." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"MicroPlex Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email || undefined,
      subject: `New project details from ${businessName}`,
      text: `Business: ${businessName}\n${name ? `From: ${name} <${email}>\n` : ""}\nIdea:\n${idea}`,
      html: `
        <div style="font-family:sans-serif;font-size:14px;color:#111">
          ${name ? `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>` : ""}
          <p><strong>Business Name:</strong> ${escapeHtml(businessName)}</p>
          <p><strong>Idea:</strong></p>
          <p>${escapeHtml(idea).replace(/\n/g, "<br/>")}</p>
          <p>Product image attached.</p>
        </div>
      `,
      attachments: [
        {
          filename: `product.${ext}`,
          content: base64Data,
          encoding: "base64",
          contentType: mimeType,
        },
      ],
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Failed to send project-details email:", err);
    return res.status(500).json({ error: "Failed to send. Please try again later." });
  }
});

export default app;
