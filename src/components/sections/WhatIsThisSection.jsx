import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../../animations/scrollAnimations";
import { FiTool, FiBarChart2, FiUsers } from "react-icons/fi";
import ResponsiveImage from "../ui/ResponsiveImage";

export default function WhatIsThisSection() {
  const features = [
    {
      icon: <FiTool className="w-12 h-12" />,
      title: "Build Real AI Products",
      description: "Not tutorials. Create production-grade AI systems that solve real problems.",
    },
    {
      icon: <FiBarChart2 className="w-12 h-12" />,
      title: "Conduct Scientific Research",
      description: "Work alongside PhD researchers to publish peer-reviewed papers.",
    },
    {
      icon: <FiUsers className="w-12 h-12" />,
      title: "Work with Industry Experts",
      description: "Learn from AI engineers and entrepreneurs building at scale.",
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-white dark:from-background
      via-white/95 dark:via-background/95 to-white dark:to-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
        </motion.div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Not a Course. <br />
            <span className="text-accent">Not a Bootcamp.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            This is an entirely different category of learning.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="text-center"
            >
              <div className="text-5xl mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-display font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
