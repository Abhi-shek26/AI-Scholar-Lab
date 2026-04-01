import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

function getWindowDetails(date, windowType) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthShort = new Intl.DateTimeFormat("en-US", { month: "short" }).format(date);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  if (windowType === "mid") {
    return {
      startDay: 8,
      endDay: 15,
      label: `Mid of the Month (${monthShort} 8-15)`,
    };
  }

  const startDay = daysInMonth - 6;
  return {
    startDay,
    endDay: daysInMonth,
    label: `Last Week of the Month (${monthShort} ${startDay}-${daysInMonth})`,
  };
}

function SelectionWeekLabel() {
  const now = new Date();
  const today = now.getDate();
  const year = now.getFullYear();
  const month = now.getMonth();

  const mid = getWindowDetails(now, "mid");
  const last = getWindowDetails(now, "last");

  if (today >= mid.startDay && today <= mid.endDay) return mid.label;
  if (today >= last.startDay && today <= last.endDay) return last.label;

  if (today < mid.startDay) return mid.label;
  if (today < last.startDay) return last.label;

  const nextMonthDate = new Date(year, month + 1, 1);
  return getWindowDetails(nextMonthDate, "mid").label;
}

export default function Program() {
  return (
    <MainLayout>
      <section
        className="min-h-screen pt-32 pb-20 bg-cover bg-center bg-fixed relative transition-colors duration-300"
        style={{backgroundImage: `url(/images/backgrounds/program-fellowship-path.jpg)`}}
      >
        {/* Lighter overlay with text shadow enhancement */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 text-white drop-shadow-lg">
              The Program
            </h1>
            <p className="text-xl text-gray-100 mb-12 max-w-3xl drop-shadow-lg">
              Build with clear phases, structured mentorship, and college-ready outcomes.
            </p>
          </motion.div>

          {/* Program Structure */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-accent/50 bg-accent/15 text-sm font-bold text-accent">
                01
              </span>
              <h2 className="text-3xl font-display font-bold text-white">Program Structure</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <article className="glass-card p-8 rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 hover:border-accent/40 transition-colors">
                <h3 className="text-xl font-display font-bold mb-4 text-accent">
                  Phase 1 - Foundations (2 Weeks)
                </h3>
                <ul className="space-y-2 text-sm text-gray-100">
                  <li>• LLM fundamentals</li>
                  <li>• Prompt engineering</li>
                  <li>• Evaluation basics</li>
                </ul>
              </article>

              <article className="glass-card p-8 rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 hover:border-accent/40 transition-colors">
                <h3 className="text-xl font-display font-bold mb-4 text-accent">
                  Phase 2 - Research / Product Build (6-8 Weeks)
                </h3>
                <ul className="space-y-2 text-sm text-gray-100">
                  <li>• Choose track</li>
                  <li>• Build product OR research paper</li>
                  <li>• Weekly mentor reviews</li>
                </ul>
              </article>

              <article className="glass-card p-8 rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 hover:border-accent/40 transition-colors">
                <h3 className="text-xl font-display font-bold mb-4 text-accent">
                  Phase 3 - Publication / Showcase
                </h3>
                <ul className="space-y-2 text-sm text-gray-100">
                  <li>• Research paper / product demo</li>
                  <li>• Portfolio + GitHub</li>
                  <li>• College-ready output</li>
                </ul>
              </article>
            </div>
          </motion.div>

          {/* Summer Program */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="glass-card p-8 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-white/5 to-secondary/10">
              <div className="mb-6 rounded-lg border border-accent/50 bg-accent/15 px-4 py-3 backdrop-blur-sm">
                <p className="font-semibold text-accent">
                  Next Selection Week: {SelectionWeekLabel()}
                </p>
              </div>

              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-accent/50 bg-accent/15 text-sm font-bold text-accent">
                  02
                </span>
                <h2 className="text-3xl font-display font-bold text-white">Summer AI Scholars Program</h2>
              </div>
              <div className="space-y-3 text-gray-100">
                <p className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">Duration: 8-10 weeks</p>
                <p className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">Mode: Hybrid (Online + Guided)</p>
                <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                  <p className="mb-2">Output:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 1 AI product OR</li>
                    <li>• 1 research paper</li>
                  </ul>
                </div>
              </div>
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
            <p className="text-lg text-gray-100 mb-6">Ready to apply?</p>
            <Link to="/apply">
              <Button variant="primary" size="lg">
                Start Your Application
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
