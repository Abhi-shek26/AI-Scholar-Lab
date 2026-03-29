import { motion } from "framer-motion";

export default function Card({ children, className = "", hover = true, ...props }) {
  return (
    <motion.div
      className={`glass-card p-6 rounded-2xl border border-gray-200 dark:border-white/20
        backdrop-blur-glass ${className} transition-colors duration-300`}
      whileHover={hover ? { y: -8, boxShadow: "0 0 35px rgba(0, 224, 255, 0.3)" } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
