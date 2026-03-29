import { motion } from "framer-motion";
import { FiBook, FiCpu, FiTarget } from "react-icons/fi";

export default function WhoShouldApplySection() {
  const criteria = [
    {
      emoji: <FiBook className="w-8 h-8" />,
      text: "10th or 11th grade students with genuine interest in AI and computing",
    },
    {
      emoji: <FiCpu className="w-8 h-8" />,
      text: "Comfortable with coding. You don't need to be a pro, but you should enjoy building.",
    },
    {
      emoji: <FiTarget className="w-8 h-8" />,
      text: "Aim for top universities. This program prepares you to be competitive at MIT, Stanford, CMU, etc.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white dark:from-background
      to-secondary/5 dark:to-secondary/5 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Who Should Apply
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            This program is selective and requires genuine commitment.
          </p>
        </motion.div>

        {/* Criteria List */}
        <div className="space-y-6">
          {criteria.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex items-start gap-4 p-6 glass-card rounded-xl border border-white/10"
            >
              <div className="text-3xl flex-shrink-0">{item.emoji}</div>
              <p className="text-lg text-gray-700 dark:text-gray-300 pt-1">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
