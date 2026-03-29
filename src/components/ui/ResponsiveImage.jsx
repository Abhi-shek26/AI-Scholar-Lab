import { motion } from "framer-motion";

export default function ResponsiveImage({
  src,
  alt,
  width = 600,
  height = 400,
  className = "",
  priority = false,
  hover = false,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative overflow-hidden rounded-xl ${className}`}
      whileHover={hover ? { scale: 1.05 } : {}}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="w-full h-auto object-cover"
        style={{
          aspectRatio: `${width} / ${height}`,
        }}
      />
    </motion.div>
  );
}
