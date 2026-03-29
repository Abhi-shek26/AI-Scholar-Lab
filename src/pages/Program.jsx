import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { FaRocket, FaChartBar } from "react-icons/fa6";

export default function Program() {
  return (
    <MainLayout>
      <section
        className="min-h-screen pt-32 pb-20 bg-cover bg-center bg-fixed relative transition-colors duration-300"
        style={{backgroundImage: `url(/images/backgrounds/program-fellowship-path.jpg)`}}
      >
        {/* Lighter overlay with text shadow enhancement */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 text-white drop-shadow-lg">
              The Program
            </h1>
            <p className="text-xl text-gray-100 mb-12 max-w-3xl drop-shadow-lg">
              An 8-9 month intensive fellowship combining research, product building, and mentorship from industry leaders.
            </p>
          </motion.div>

          {/* Program Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 mb-20"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/20">
              <h2 className="text-2xl font-display font-bold mb-4 text-accent">
                Semester 1: Foundations
              </h2>
              <ul className="space-y-3 text-white">
                <li>✓ LLMs & Transformers fundamentals</li>
                <li>✓ Prompt engineering & fine-tuning</li>
                <li>✓ Retrieval Augmented Generation (RAG)</li>
                <li>✓ AI agents & autonomous systems</li>
                <li>✓ Ethics & Safety in AI</li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-white/20">
              <h2 className="text-2xl font-display font-bold mb-4 text-accent">
                Semester 2: Build & Research
              </h2>
              <ul className="space-y-3 text-white">
                <li>✓ Choose your track (Product or Research)</li>
                <li>✓ Work on real projects with mentors</li>
                <li>✓ Write research papers or launch products</li>
                <li>✓ Network with industry professionals</li>
                <li>✓ Prepare for next steps</li>
              </ul>
            </div>
          </motion.div>

          {/* Tracks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-display font-bold mb-8 text-white">Choose Your Track</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-2xl border border-accent/30 hover:border-accent">
                <h3 className="text-2xl font-display font-bold mb-4 text-accent">🚀 Product Track</h3>
                <p className="text-white mb-4">
                  Build an AI-powered product from idea to launch. Focus on user research, product-market fit, and deployment.
                </p>
                <ul className="space-y-2 text-sm text-gray-100">
                  <li>• User validation & research</li>
                  <li>• MVP development</li>
                  <li>• Launch & iterate</li>
                  <li>• Consider venture opportunities</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-secondary/30 hover:border-secondary">
                <h3 className="text-2xl font-display font-bold mb-4 text-secondary flex items-center gap-3">
                  <FaChartBar size={24} /> Research Track
                </h3>
                <p className="text-white mb-4">
                  Conduct original research in AI. Work with PhD researchers to publish findings in top conferences.
                </p>
                <ul className="space-y-2 text-sm text-gray-100">
                  <li>• Research proposal development</li>
                  <li>• Experimental methodology</li>
                  <li>• Paper writing & revision</li>
                  <li>• Conference submission</li>
                </ul>
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
            <p className="text-lg text-gray-100 mb-6">Ready to apply?</p>
            <Link to="/apply">
              <Button variant="primary" size="lg">
                Start Your Application
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
