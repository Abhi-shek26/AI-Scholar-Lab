import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../../animations/scrollAnimations";
import { FiFileText, FiLayers, FiGithub, FiAward } from "react-icons/fi";
import ResponsiveImage from "../ui/ResponsiveImage";

export default function OutcomesSection() {
  const outcomes = [
    {
      icon: <FiFileText className="w-10 h-10" />,
      title: "Published AI Research",
      description: "Your work appears in top-tier research papers and conferences.",
    },
    {
      icon: <FiLayers className="w-10 h-10" />,
      title: "Deployed AI Product",
      description: "Launch a production AI system with real users or enterprise customers.",
    },
    {
      icon: <FiGithub className="w-10 h-10" />,
      title: "GitHub Portfolio",
      description: "Portfolio of production AI code that impresses top universities and companies.",
    },
    {
      icon: <FiAward className="w-10 h-10" />,
      title: "Recommendation Letters",
      description: "Strong recommendations from industry leaders and PhD researchers.",
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 float-right ml-8 max-w-md"
        >
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 clear-both"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What You'll Have After This Program
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Not just experience. Tangible achievements that set you apart.
          </p>
        </motion.div>

        {/* Outcomes Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 clear-both"
        >
          {outcomes.map((outcome, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="relative group"
            >
              <div className="glass-card p-6 rounded-2xl border border-white/20 h-full
                hover:border-accent/50 hover:shadow-glow transition-all duration-300">
                <div className="text-4xl mb-4 inline-block">{outcome.icon}</div>
                <h3 className="text-lg font-display font-semibold mb-2 text-gray-900 dark:text-white">
                  {outcome.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
