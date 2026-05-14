import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingButton = () => {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 floating-btn w-14 h-14 rounded-full flex items-center justify-center animate-pulse-glow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      title="Let's Talk"
    >
      <MessageCircle className="w-6 h-6 text-primary-foreground" />
    </motion.a>
  );
};

export default FloatingButton;
