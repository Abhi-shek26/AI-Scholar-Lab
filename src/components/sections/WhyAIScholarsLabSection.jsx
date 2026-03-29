import { motion } from "framer-motion";
import Card from "../ui/Card";
import { staggerContainer, staggerItem } from "../../animations/scrollAnimations";
import { FaRocket, FaBook, FaLock, FaBriefcase } from "react-icons/fa6";

export default function WhyAIScholarsLabSection() {
  const reasons = [
    {
      icon: <FaRocket className="w-10 h-10" />,
      title: "Y-Combinator Style",
      description: "Product-first approach. Build something real, ship it, iterate based on user feedback.",
    },
    {
      icon: <FaBook className="w-10 h-10" />,
      title: "PhD-Led Research",
      description: "Conduct original research under guidance of leading AI researchers and publish to top venues.",
    },
    {
      icon: <FaLock className="w-10 h-10" />,
      title: "Strict IP Protection",
      description: "You own your ideas. Clear IP rights, equity considerations, and legal protection from day one.",
    },
    {
      icon: <FaBriefcase className="w-10 h-10" />,
      title: "Venture-Ready Thinking",
      description: "Learn how to validate ideas, pitch to investors, and think like a founder in AI.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Why <span className="text-accent">AI Scholars Lab</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Built differently than every other program.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {reasons.map((reason, idx) => (
            <motion.div key={idx} variants={staggerItem}>
              <Card className="h-full hover:shadow-glow">
                <div className="text-4xl mb-4 inline-block">{reason.icon}</div>
                <h3 className="text-xl font-display font-semibold mb-2 text-gray-900 dark:text-white">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
