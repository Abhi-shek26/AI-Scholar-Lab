import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Program", path: "/program" },
    { label: "Curriculum", path: "/curriculum" },
    { label: "Research", path: "/research-products" },
    { label: "Admissions", path: "/admissions" },
    { label: "IP Policy", path: "/ip-policy" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold font-display">
            <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
              AI Scholars Lab
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Apply Button */}
            <Link
              to="/apply"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-accent to-cyan-400 text-black
                font-semibold rounded-lg hover:shadow-glow transition-all hover:scale-105"
            >
              Apply
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className="text-accent ml-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 border-t border-white/10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 text-gray-300 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/apply"
              className="block m-4 px-6 py-2 bg-gradient-to-r from-accent to-cyan-400 text-black
                font-semibold rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Apply
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
