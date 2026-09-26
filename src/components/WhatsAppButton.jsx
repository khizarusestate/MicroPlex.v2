import { motion } from "framer-motion";
import { WhatsappIcon } from "./BrandIcons";

const WHATSAPP_URL = "https://wa.me/923012220345";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 h-14 w-14 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_40px_rgba(37,211,102,0.8)] hover:scale-110 active:scale-95 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 260, damping: 20 }}
    >
      <WhatsappIcon className="h-7 w-7" />
    </motion.a>
  );
}
