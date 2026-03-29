import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../animations/scrollAnimations";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Admissions() {
  const steps = [
    {
      num: "1",
      title: "Application",
      description: "Submit your application with basic info, grades, and essay.",
    },
    {
      num: "2",
      title: "Assessment Test",
      description: "SAT-style test covering problem-solving and basic CS concepts.",
    },
    {
      num: "3",
      title: "AI Challenge",
      description: "Build a small AI project to demonstrate your skills and creativity.",
    },
    {
      num: "4",
      title: "Interview",
      description: "Conversation with our team about your interests and goals.",
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
              Admissions
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl drop-shadow-lg">
              We're selective. We accept 15–20 students per cohort. Here's how we evaluate applications.
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 mb-20"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/20 text-center">
              <div className="text-4xl font-bold text-accent mb-2">15–20</div>
              <p className="text-gray-100">Spots per cohort</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/20 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">&lt; 5%</div>
              <p className="text-gray-100">Acceptance rate</p>
            </div>
            <div className="glass-card p-8 rounded-2xl border border-white/20 text-center">
              <div className="text-4xl font-bold text-accent mb-2">8–9</div>
              <p className="text-gray-100">Months program length</p>
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
            <p className="text-lg text-gray-100 mb-6">
              Ready to apply? We review applications on a rolling basis.
            </p>
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
