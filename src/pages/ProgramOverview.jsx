import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { BROCHURE_PDF_PATH } from "../config/contact";
import { Link } from "react-router-dom";

export default function ProgramOverview() {
  return (
    <MainLayout>
      <section className="min-h-screen pt-32 pb-20 bg-cover bg-center bg-fixed relative transition-colors duration-300"
        style={{ backgroundImage: "url(/images/backgrounds/program-fellowship-path.jpg)" }}>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass-card p-8 rounded-2xl border border-white/20"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-5 text-white drop-shadow-lg">
              Program Overview
            </h1>
            <p className="text-lg text-gray-100 mb-8">
              Preview the program brochure for a complete overview of tracks, structure, admissions, and output expectations.
            </p>

            <div className="rounded-xl border border-white/20 bg-white/10 p-3 mb-6">
              <iframe
                title="AI Scholars Lab Brochure Preview"
                src={`${BROCHURE_PDF_PATH}#toolbar=0&navpanes=0&scrollbar=1`}
                className="w-full h-[100vh] rounded-lg"
              />
            </div>

            <p className="text-sm text-gray-200 mb-4">
              Brochure download is shared after we receive your basic details.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-black font-semibold hover:brightness-110 transition-all"
              >
                Share Basic Info
              </Link>
              <Link
                to="/apply"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/25 bg-white/10 text-white font-semibold hover:border-accent/60 transition-all"
              >
                Apply Now
              </Link>
            </div>

          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
