import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { fadeInUp, fadeIn } from "../../animations/scrollAnimations";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-cover bg-center transition-colors duration-300"
      style={{backgroundImage: `url(/images/backgrounds/home-ai-vision.jpg)`}}
    >
      {/* Theme-aware overlay keeps heading and CTA readable on high-detail backgrounds. */}
      <div className="absolute inset-0 bg-gradient-to-b "></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mx-auto max-w-4xl rounded-3xl border border-black/10 bg-white/25 px-5 py-8 shadow-xl backdrop-blur-sm dark:border-white/15 dark:bg-slate-950/45 sm:px-8 sm:py-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block px-4 py-2 bg-accent/20 border border-accent/55 rounded-full transition-colors duration-300"
          >
            <span className="text-sm font-semibold text-cyan-700 dark:text-accent">
              Elite High School AI Fellowship
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6
              text-gray-90 dark:text-white leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
          >
            Y-Combinator for Future AI Builders
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90 dark:text-white/90
              max-w-3xl mx-auto mb-8 sm:mb-12 transition-colors duration-300"
          >
            Build AI Products. Publish Research. Protect Your Ideas. Stand Out for Top Universities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/apply">
              <Button variant="primary" size="lg">
                Apply Now
              </Button>
            </Link>
            <Link to="/program">
              <Button variant="secondary" size="lg" className="bg-white/75 dark:bg-white/10">
                Explore Program
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator - Hidden on small screens */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden sm:block mt-16 sm:mt-20"
        >
          <div className="w-8 h-12 border-2 border-accent rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-accent rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
