import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Admissions() {
  const steps = [
    {
      num: "1",
      title: "Academic review",
      description: "We evaluate academic consistency, effort, and evidence of high potential.",
    },
    {
      num: "2",
      title: "Aptitude assessment",
      description: "SAT-style test focused on analytical reasoning and structured problem solving.",
    },
    {
      num: "3",
      title: "Optional coding / AI evaluation",
      description: "For students with prior experience, we offer an optional technical evaluation.",
    },
  ];

  return (
    <MainLayout>
      <section
        className="min-h-screen pt-32 pb-20 bg-cover bg-center bg-fixed relative transition-colors duration-300"
        style={{backgroundImage: `url(/images/backgrounds/admissions-journey.jpg)`}}
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
              Admissions (Merit-Based Only)
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl drop-shadow-lg">
              Selection is strictly merit-driven and designed for high-potential students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 mb-20"
          >
            <h2 className="text-3xl font-display font-bold text-white">Evaluation Process</h2>
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="flex gap-6 items-start"
              >
                <div className="inline-flex items-center justify-center
                  w-12 h-12 rounded-full bg-gradient-to-r from-accent to-cyan-400
                  text-black font-display font-bold flex-shrink-0">
                  {step.num}
                </div>
                <div className="glass-card p-6 rounded-2xl border border-white/20 flex-grow">
                  <h3 className="text-xl font-display font-bold mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-100">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl border border-accent/40 mb-20"
          >
            <h3 className="text-2xl font-display font-bold text-accent mb-3">Key Highlight</h3>
            <p className="text-lg text-gray-100">
              All applicants undergo a FREE evaluation test (can be taken from home).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-lg text-gray-100 mb-6">
              Ready to apply for the next evaluation cycle?
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
