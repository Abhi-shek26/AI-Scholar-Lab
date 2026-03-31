import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function FinalCTASection() {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-r from-secondary/10 dark:from-secondary/10
      via-white dark:via-background to-accent/10 dark:to-accent/10 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Build Something <span className="text-accent">Extraordinary</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            Limited seats available. Apply today to join the next cohort.
          </p>

          <Link to="/apply">
            <Button variant="primary" size="lg">
              Apply Now – Limited Seats
            </Button>
          </Link>

          <p className="mt-8 text-sm text-gray-600 dark:text-gray-500">
            Applications reviewed on a rolling basis. Early applications have higher acceptance rates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
