import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animations/scrollAnimations";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { FaBook, FaHammer, FaRocket } from "react-icons/fa6";

export default function Curriculum() {
  const modules = [
    {
      title: "AI Foundations",
      topics: ["Transformers", "LLMs", "Embeddings", "Attention Mechanisms"],
    },
    {
      title: "Advanced Techniques",
      topics: ["Fine-tuning", "RAG", "Prompt Engineering", "Agents"],
    },
    {
      title: "Systems & Infrastructure",
      topics: ["Model Deployment", "API Design", "Scaling", "Monitoring"],
    },
    {
      title: "Ethics & Safety",
      topics: ["Bias & Fairness", "Model Safety", "Regulatory Landscape", "Responsible AI"],
    },
    {
      title: "Product Development",
      topics: ["User Research", "MVP Building", "User Feedback", "Launch Strategy"],
    },
    {
      title: "Research Skills",
      topics: ["Literature Review", "Experimental Design", "Writing", "Peer Review"],
    },
  ];

  return (
    <MainLayout>
      <section
        className="min-h-screen pt-32 pb-20 bg-cover bg-center bg-fixed relative transition-colors duration-300"
        style={{backgroundImage: `url(/images/backgrounds/curriculum-learning-graph.jpg)`}}
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
              Curriculum
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl drop-shadow-lg">
              Comprehensive training designed for both researchers and builders.
            </p>
          </motion.div>

          {/* Modules */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {modules.map((module, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="glass-card p-6 rounded-2xl border border-white/20 hover:border-accent/50"
              >
                <h3 className="text-lg font-display font-bold mb-4 text-accent">
                  {module.title}
                </h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, i) => (
                    <li key={i} className="text-sm text-gray-100">
                      • {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Learning Approach with Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/20">
              <h2 className="text-2xl font-display font-bold mb-6 text-white">Learning Approach</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <FaBook size={16} /> Learn
                  </h3>
                  <p className="text-gray-100">Deep dives into theory from industry experts and PhD researchers.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <FaHammer size={16} /> Build
                  </h3>
                  <p className="text-gray-100">Apply knowledge immediately through hands-on projects and products.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-2 flex items-center gap-2">
                    <FaRocket size={16} /> Ship
                  </h3>
                  <p className="text-gray-100">Deploy real systems and get feedback from real users.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-lg text-gray-100 mb-6">Ready to dive in?</p>
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
