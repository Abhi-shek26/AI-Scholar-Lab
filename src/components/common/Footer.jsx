import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      category: "Program",
      links: [
        { label: "About", path: "/program" },
        { label: "Curriculum", path: "/curriculum" },
        { label: "Research", path: "/research-products" },
      ],
    },
    {
      category: "Admissions",
      links: [
        { label: "Apply", path: "/apply" },
        { label: "Requirements", path: "/admissions" },
      ],
    },
    {
      category: "Legal",
      links: [
        { label: "IP Policy", path: "/ip-policy" },
      ],
    },
  ];

  return (
    <footer className="bg-background border-t border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold font-display mb-2">
              <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
                AI Scholars Lab
              </span>
            </h3>
            <p className="text-sm text-gray-400">
              Building the next generation of AI innovators.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.category}>
              <h4 className="font-semibold text-sm mb-4 text-gray-200">
                {group.category}
              </h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-xs text-gray-400">
            © {currentYear} AI Scholars Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
