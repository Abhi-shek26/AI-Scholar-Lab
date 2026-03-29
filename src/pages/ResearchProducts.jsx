import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animations/scrollAnimations";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function ResearchProducts() {
  const projects = [
    {
      type: "Product",
      title: "AI Tutor",
      description: "Adaptive learning platform using LLMs to personalize education.",
    },
    {
      type: "Product",
      title: "Research Assistant",
      description: "Tool to help researchers quickly synthesize papers and find insights.",
    },
    {
      type: "Product",
      title: "Code Generator",
      description: "AI system that generates production-grade code from specifications.",
    },
    {
      type: "Research",
      title: "Hallucination Detection",
      description: "Study on detecting and mitigating LLM hallucinations.",
    },
    {
      type: "Research",
      title: "LLM Evaluation",
      description: "New frameworks for comprehensive evaluation of language models.",
    },
    {
      type: "Research",
      title: "Agent Systems",
      description: "Research on building reliable multi-step AI agents.",
    },
  ];

  return (
    <MainLayout>
      <section
        className="min-h-screen pt-32 pb-20 bg-cover bg-center bg-fixed relative transition-colors duration-300"
        style={{backgroundImage: `url(/images/backgrounds/research-product-studio.jpg)`}}
      >
        {/* Lighter overlay with text shadow enhancement */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 text-white drop-shadow-lg">
              Research & Products
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl drop-shadow-lg">
              Examples of AI projects and research conducted by our scholars.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-6 mb-20"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card p-6 rounded-2xl border border-white/20"
              >
                <div className="mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    project.type === "Product"
                      ? "bg-accent/20 text-accent"
                      : "bg-secondary/20 text-secondary"
                  }`}>
                    {project.type}
                  </span>
                </div>
                <h3 className="text-lg font-display font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-100">{project.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-lg text-gray-100 mb-6">
              Learn more about our program and start building your project.
            </p>
            <Link to="/apply">
              <Button variant="primary" size="lg">
                Apply Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
