import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";

export default function IPPolicy() {
  const comparison = [
    { feature: "IP Ownership", typical: "Program or University", ours: "You (100%)" },
    { feature: "Equity/Royalties", typical: "Program takes cut", ours: "You keep everything" },
    { feature: "Legal Protection", typical: "Generic terms", ours: "Custom legal docs" },
    { feature: "Investor Access", typical: "Limited", ours: "Controlled access" },
    { feature: "Exit Rights", typical: "None", ours: "Full control" },
  ];

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
              IP & Venture Policy
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl drop-shadow-lg">
              Your ideas are yours. We've designed our policy to protect you and your intellectual property.
            </p>
          </motion.div>

          {/* Key Principles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl border border-accent/30 mb-16"
          >
            <h2 className="text-2xl font-display font-bold mb-8 text-accent">Key Principles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <FiCheck className="text-accent" /> Student Ownership
                </h3>
                <p className="text-gray-100">
                  You own 100% of the IP created during the program. No equity stakes for us.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <FiCheck className="text-accent" /> Legal Clarity
                </h3>
                <p className="text-gray-100">
                  Clear, founder-friendly legal documents. No surprises or hidden clauses.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <FiCheck className="text-accent" /> Controlled Exposure
                </h3>
                <p className="text-gray-100">
                  We connect you with investors and partners only when you choose.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                  <FiCheck className="text-accent" /> Venture Support
                </h3>
                <p className="text-gray-100">
                  Access to investor networks, legal advisors, and business mentorship.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl border border-accent/30 mb-16"
          >
            <h2 className="text-2xl font-display font-bold mb-6 text-white">How We Compare</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-max md:min-w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-white/10">
                    <th className="text-left py-3 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm text-white">Feature</th>
                    <th className="text-left py-3 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm text-white">Most Programs</th>
                    <th className="text-left py-3 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm text-accent font-semibold">AI Scholars Lab</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-200 dark:border-white/5">
                      <td className="py-3 px-2 sm:py-4 sm:px-4 font-semibold text-xs sm:text-sm text-white">{row.feature}</td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm text-white">{row.typical}</td>
                      <td className="py-3 px-2 sm:py-4 sm:px-4 text-xs sm:text-sm text-accent font-semibold">{row.ours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              Have questions about our IP policy? We're happy to discuss.
            </p>
            <Link to="/apply">
              <Button variant="primary" size="lg">
                Apply & Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
