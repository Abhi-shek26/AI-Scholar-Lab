import { motion } from "framer-motion";
import Card from "../ui/Card";
import { staggerContainer, staggerItem } from "../../animations/scrollAnimations";

export default function ProgramHighlightsSection() {
  const buildItems = [
    "Digital Employees (AI agents performing real-world tasks)",
    "LLM Evaluation Systems (accuracy, benchmarking, performance)",
    "Hallucination Detection Systems",
    "Agentic AI Products (multi-agent workflows solving real problems)",
    "Many other Agentic AI products",
    "Idea to implementation - Focused product lab",
  ];

  const researchTracks = [
    "LLM Evaluation",
    "Hallucination Detection",
    "AI Benchmarking",
    "Enterprise AI Architectures",
  ];

  const productTracks = [
    "Digital Employees",
    "Agentic AI Workflows",
    "AI SaaS Products",
    "Agentic AI products",
    "AI SDKs - Horizontal and vertical",
  ];

  return (
    <section className="py-10 md:py-16 bg-white dark:bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What Students <span className="text-accent">Build</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Real product and research outcomes with structured execution.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          <motion.div variants={staggerItem}>
            <Card className="h-full hover:shadow-glow">
              <h3 className="text-2xl font-display font-semibold mb-5 text-gray-900 dark:text-white">
                What Students Build
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                {buildItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Card className="h-full hover:shadow-glow">
              <h3 className="text-2xl font-display font-semibold mb-5 text-gray-900 dark:text-white">
                Program Tracks
              </h3>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-lg font-display font-semibold mb-3 text-accent">Research Tracks</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {researchTracks.map((track) => (
                      <li key={track}>• {track}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-display font-semibold mb-3 text-accent">Product Tracks</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {productTracks.map((track) => (
                      <li key={track}>• {track}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}