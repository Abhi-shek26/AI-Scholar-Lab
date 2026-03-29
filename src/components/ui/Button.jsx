import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-out ";

  const variants = {
    primary: "bg-gradient-to-r from-accent to-cyan-400 text-black hover:shadow-glow hover:scale-105",
    secondary:
      "bg-white/10 border border-accent text-accent hover:bg-accent/10 hover:shadow-glow-sm",
    tertiary: "text-accent hover:text-white border-b border-accent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
