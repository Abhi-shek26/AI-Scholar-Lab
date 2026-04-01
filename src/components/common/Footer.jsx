import { Link } from "react-router-dom";
import { APPLY_EMAIL, CONTACT_EMAIL } from "../../config/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      category: "Explore",
      links: [
        { label: "Home", path: "/" },
        { label: "Program", path: "/program" },
        { label: "Research & Products", path: "/research-products" },
      ],
    },
    {
      category: "Admissions",
      links: [
        { label: "Admissions", path: "/admissions" },
        { label: "Program Overview", path: "/program-overview" },
      ],
    },
    {
      category: "Policy",
      links: [
        { label: "IP & Collaboration", path: "/ip-policy" },
        { label: "Contact", path: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-background border-t border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-accent/60 bg-white/80 text-xs font-bold text-accent dark:bg-slate-900/60">
                AISL
              </span>
              <h3 className="text-lg font-bold font-display">AI Scholars Lab</h3>
            </div>
            <p className="text-sm text-gray-400">
              AI Laboratory for Future Innovators.
            </p>
            <div>
            <p className="mt-3 text-sm text-gray-400">
              Apply:     <a href={`mailto:${APPLY_EMAIL}`} className="hover:text-accent transition-colors">{APPLY_EMAIL}</a>
            </p>
            </div>
            <span></span>
            <p className="text-sm py-4  text-gray-400">
              Queries: <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent transition-colors">{CONTACT_EMAIL}</a>
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
