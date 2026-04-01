import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";

export default function CoreTeam() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <MainLayout>
      <section
        className="min-h-screen pt-32 pb-20 bg-cover bg-center bg-fixed relative transition-colors duration-300"
        style={{ backgroundImage: "url(/images/backgrounds/admissions-journey.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-white drop-shadow-lg">
              Our Core Team
            </h1>
            <p className="text-lg text-gray-100 drop-shadow-lg">
              Researchers, engineers, and practitioners with strong academic and industry backgrounds.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Academic Background */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl border border-white/20 backdrop-blur-md"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Academic Background</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-accent mt-1">🎓</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Doctorates & Researchers
                    </h3>
                    <p className="text-gray-200">
                      Team members hold PhDs and conduct research in AI, Systems, and Applied Sciences.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4">
                  <div className="text-2xl text-accent mt-1">🏫</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Top-Tier Educational Institutions
                    </h3>
                    <p className="text-gray-200">
                      Graduates from Georgia Institute of Technology, State University of New York
                      (Binghamton), Indian Institutes of Technology (IITs), and Regional Engineering
                      Colleges (RECs/NITs).
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Industry Experience */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl border border-white/20 backdrop-blur-md"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Industry Experience</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-accent mt-1">🏢</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Enterprise & Innovation Leaders
                    </h3>
                    <p className="text-gray-200">
                      Experience across leading organizations including:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
                      <li>Barclays</li>
                      <li>Gartner</li>
                      <li>Lockheed Martin</li>
                      <li>CVS</li>
                      <li>Federal Agencies</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4">
                  <div className="text-2xl text-accent mt-1">🚀</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Research & Product Development
                    </h3>
                    <p className="text-gray-200">
                      The team brings a combination of deep research expertise and real-world
                      enterprise AI product development experience, ensuring practical application of
                      theoretical knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl border border-accent/30 bg-accent/5 backdrop-blur-md"
            >
              <p className="text-gray-100 text-lg leading-relaxed">
                Our core team is uniquely positioned to bridge academic rigor with industry
                practicality. We create AI systems that matter—solving real problems while advancing
                the field.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
