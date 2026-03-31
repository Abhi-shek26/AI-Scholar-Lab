import { motion } from "framer-motion";

export default function GenZInnovationSection() {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-r from-white dark:from-background
      via-secondary/5 dark:via-secondary/5 to-white dark:to-background flex items-center
      justify-center min-h-96 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
        >
          Some AI products built here will become{" "}
          <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
            tomorrow's conversations
          </span>
          .
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-400"
        >
          And you could be the one building them.
        </motion.p>
      </div>
    </section>
  );
}
