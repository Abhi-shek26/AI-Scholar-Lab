import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import MainLayout from "../layouts/MainLayout";
import { FiArrowRight, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <MainLayout>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed relative transition-colors duration-300"
        style={{backgroundImage: `url(/images/backgrounds/not-found-digital-void.jpg)`}}
      >
        {/* Lighter overlay with text shadow enhancement */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-8xl sm:text-9xl font-display font-bold mb-6 text-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent"
          >
            404
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4 text-white drop-shadow-lg">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-md mx-auto drop-shadow-lg">
            The page you're looking for doesn't exist. Let's get you back on track to building the future of AI.
          </p>

          {/* Decorative message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gradient-to-r from-accent/10 dark:from-accent/10 to-secondary/10 dark:to-secondary/10
              border border-accent/30 dark:border-accent/20 rounded-2xl p-6 mb-12"
          >
            <p className="text-sm sm:text-base text-white font-medium flex items-center justify-center gap-2">
              <FiArrowRight /> Lost in the digital void? Return home and explore our program instead.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/" className="flex items-center gap-2">
              <Button variant="primary" size="lg">
                <FiHome className="inline mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link to="/program" className="flex items-center gap-2">
              <Button variant="secondary" size="lg">
                Explore Program
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
    </MainLayout>
  );
}
