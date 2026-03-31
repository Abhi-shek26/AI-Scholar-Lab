import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function IPPolicy() {
  const collaborationPoints = [
    "Projects are built collaboratively.",
    "Contributors (students, mentors, platform) may be part of founding teams.",
    "Contributors (students, mentors, platform) may be part of co-authored research.",
  ];

  const agreementPoints = ["Ownership", "Contribution", "Publication rights"];

  return (
    <MainLayout>
      <section
        className="min-h-screen pt-32 pb-20 bg-cover bg-center bg-fixed relative transition-colors duration-300"
        style={{backgroundImage: `url(/images/backgrounds/ip-policy-ownership.jpg)`}}
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
              Intellectual Property & Collaboration
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl drop-shadow-lg">
              Our framework supports collaborative building with clear agreements and transparent attribution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl border border-accent/30 mb-16"
          >
            <h2 className="text-2xl font-display font-bold mb-6 text-accent">Collaboration Principles</h2>
            <ul className="space-y-3 text-gray-100">
              {collaborationPoints.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl border border-accent/30 mb-16"
          >
            <h2 className="text-2xl font-display font-bold mb-6 text-white">Structured Agreements Define</h2>
            <ul className="grid sm:grid-cols-3 gap-4 text-gray-100">
              {agreementPoints.map((point) => (
                <li key={point} className="rounded-lg border border-white/20 px-4 py-3 text-center">
                  {point}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-lg font-semibold text-accent">
              We operate with full transparency — all contributors are recognized and protected through structured agreements.
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
              Questions about collaboration or publication policy?
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
