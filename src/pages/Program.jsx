import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const AMERICAN_TIMEZONE = "America/New_York";

function getNextIntakeDetails() {
  const now = new Date();
  const nextIntakeDate = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 15, 12, 0, 0)
  );

  const timeZone = AMERICAN_TIMEZONE;

  return {
    shortDate: new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      timeZone,
    }).format(nextIntakeDate),
    fullDate: new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone,
    }).format(nextIntakeDate),
    timeZone,
  };
}

export default function Program() {
  const nextIntake = getNextIntakeDetails();

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
              Programs
            </h1>
            <p className="text-xl text-gray-100 mb-12 max-w-4xl drop-shadow-lg">
              Two pathways: Summer Intake (8-9 weeks) and Full Fellowship (2 semesters / 8-9 months).
            </p>

            <div className="mb-14 flex flex-wrap gap-3">
              <a href="#summer-intake" className="rounded-lg border border-accent/50 bg-accent/15 px-4 py-2 text-sm font-semibold text-accent hover:brightness-110 transition-all">
                Jump to Summer Intake (Next: {nextIntake.shortDate})
              </a>
              <a href="#full-fellowship" className="rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:border-accent/40 transition-all">
                Jump to Full Fellowship
              </a>
            </div>
          </motion.div>

          {/* Two Program Cards */}
          <motion.div
            id="summer-intake"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-accent/50 bg-accent/15 text-sm font-bold text-accent">
                ##
              </span>
              <h2 className="text-3xl font-display font-bold text-white">Choose Your Program</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <article className="glass-card p-8 rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 hover:border-accent/40 transition-colors">
                <h3 className="text-2xl font-display font-bold mb-3 text-accent">Summer Intake - 8 to 9 Weeks</h3>
                <p className="text-gray-100 mb-3 text-sm">Fast, intensive entry path</p>
                <ul className="space-y-2 text-sm text-gray-100">
                  <li>• 1 deployed product</li>
                  <li>• Git portfolio</li>
                  <li>• 1 research paper</li>
                  <li>• Mini AI product build/simulation</li>
                  <li>• Novelty tests</li>
                </ul>
              </article>

              <article className="glass-card p-8 rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 hover:border-accent/40 transition-colors">
                <h3 className="text-2xl font-display font-bold mb-3 text-accent">Full Fellowship - 2 Semesters / 8 to 9 Months</h3>
                <p className="text-gray-100 mb-3 text-sm">Deep flagship experience</p>
                <ul className="space-y-2 text-sm text-gray-100">
                  <li>• Advanced product building</li>
                  <li>• Stronger publication pipeline</li>
                  <li>• Long-form mentorship</li>
                  <li>• Admissions differentiation</li>
                </ul>
              </article>
            </div>
          </motion.div>

          {/* Summer Intake */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="glass-card p-8 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 via-white/5 to-secondary/10">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-accent/50 bg-accent/15 text-sm font-bold text-accent">
                  01
                </span>
                <h2 className="text-3xl font-display font-bold text-white">Summer Intake</h2>
              </div>

              <div className="mb-6 rounded-lg border border-accent/50 bg-accent/15 px-4 py-3 backdrop-blur-sm">
                <p className="font-semibold text-accent">
                  Next Intake Date: {nextIntake.fullDate}
                </p>
                {/* <p className="text-xs text-gray-200 mt-1">Timezone: {nextIntake.timeZone}</p> */}
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-2">Summer AI Research & Product Fellowship</h3>
              <p className="text-lg text-gray-100 mb-2">
                8-9 week intensive for ambitious students ready to build, test, deploy, and publish
              </p>
              <p className="text-sm text-gray-100 mb-6">
                A compressed but high-impact summer experience where students learn modern AI systems, build a real product,
                publish a research paper, and validate novelty through simulations and testing.
              </p>

              <div className="grid gap-3 md:grid-cols-2 text-gray-100 text-sm">
                <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">Duration: 8-9 weeks</div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">Class Rhythm: Alternate days</div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">Live Sessions: 3 sessions per week</div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">Session Length: 90-120 minutes</div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">Weekly Commitment: 8-10 hours total</div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">Suggested Timing: US evening-friendly schedule</div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3 md:col-span-2">Learning Format: Live instruction + guided build + research supervision + independent work</div>
                <div className="rounded-lg border border-accent/45 bg-accent/10 px-4 py-3 text-accent md:col-span-2">Risk-Free Start: Exit within the first 2 weeks - no fee charged</div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3 md:col-span-2">Enrollment: Monthly option available and full-program option available</div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-display font-bold text-white mb-4">Summer Week-by-Week Curriculum</h4>
                <div className="space-y-3">
                  <details className="rounded-lg border border-white/15 bg-white/10 px-4 py-3" open>
                    <summary className="cursor-pointer font-semibold text-accent p-1">Weeks 1-2</summary>
                    <p className="text-sm mt-2">Focus: AI foundations - LLMs, prompt engineering, agent basics, system thinking</p>
                    <p className="text-sm mt-1">Output: Mini exercises and a simple AI assistant prototype</p>
                  </details>
                  <details className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                    <summary className="cursor-pointer font-semibold text-accent p-1">Weeks 3-4</summary>
                    <p className="text-sm mt-2">Focus: RAG, vector search, multi-step workflows, structured AI app building</p>
                    <p className="text-sm mt-1">Output: Mini AI product / early functional prototype</p>
                  </details>
                  <details className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                    <summary className="cursor-pointer font-semibold text-accent p-1">Weeks 5-6</summary>
                    <p className="text-sm mt-2">Focus: Main product build, feature refinement, evaluation, deployment workflow</p>
                    <p className="text-sm mt-1">Output: Core product built and prepared for deployment</p>
                  </details>
                  <details className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                    <summary className="cursor-pointer font-semibold text-accent p-1">Weeks 7-8</summary>
                    <p className="text-sm mt-2">Focus: Research framing, novelty definition, experiments, simulations, comparisons, testing</p>
                    <p className="text-sm mt-1">Output: Research paper draft and novelty validation results</p>
                  </details>
                  <details className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                    <summary className="cursor-pointer font-semibold text-accent p-1">Week 9 (buffer/finalization)</summary>
                    <p className="text-sm mt-2">Focus: Deployment polish, final edits, presentation prep</p>
                    <p className="text-sm mt-1">Output: Final deployed product, Git portfolio cleanup, final paper submission</p>
                  </details>
                </div>
              </div>

              <div className="rounded-lg border border-accent/35 bg-accent/10 px-4 py-4 mt-8">
                <p className="font-semibold text-accent mb-2">Summer Outcomes</p>
                <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                  <ul className="space-y-1 text-sm">
                    <li>• 1 product developed and deployed</li>
                    <li>• Git portfolio with clean documented repository</li>
                    <li>• 1 research paper published</li>
                    <li>• Mini AI product build/simulation used to support research direction</li>
                    <li>• Tests and experimental evidence that help establish novelty for the paper</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Full Fellowship */}
          <motion.div
            id="full-fellowship"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-accent/50 bg-accent/15 text-sm font-bold text-accent">
                  02
                </span>
                <h2 className="text-3xl font-display font-bold text-white">Full Fellowship (2 Semesters)</h2>
              </div>

              <h3 className="text-2xl font-display font-bold text-accent mb-4">Elite AI Research & Product Fellowship</h3>

              <div className="grid gap-3 md:grid-cols-2 mb-6 text-sm text-gray-100">
                <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">Duration: 8-9 Months (2 Semesters)</div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">Live Sessions: Weekly (Saturday)</div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">Session Duration: 2-2.5 Hours</div>
                <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">Weekly Commitment: 8-10 Hours</div>
              </div>

              <div className="space-y-3 text-gray-100 text-sm">
                <details className="rounded-lg border border-white/15 bg-white/10 px-4 py-3" open>
                  <summary className="cursor-pointer font-semibold text-accent p-1">Program Overview & Objective</summary>
                  <p>
                    A highly selective, merit-based 8-9 month AI fellowship designed for high school students to master modern AI systems
                    (LLMs, agents, RAG), build real-world AI products, conduct scientific research under PhD supervision,
                    publish research papers, and develop a strong college admissions profile.
                  </p>
                  <p className="font-semibold text-accent mt-3 mb-2">Program Objective</p>
                  <ul className="space-y-1 mt-1">
                    <li>• System-level understanding</li>
                    <li>• Real product development</li>
                    <li>• Scientific research</li>
                  </ul>
                </details>

                <details className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                  <summary className="cursor-pointer font-semibold text-accent py-1">Duration & Format</summary>
                  <ul className="space-y-1">
                    <li>• Duration: 8-9 Months (2 Semesters)</li>
                    <li>• Live Sessions: Weekly (Saturday)</li>
                    <li>• Session Duration: 2-2.5 Hours</li>
                    <li>• Weekly Commitment: 8-10 Hours</li>
                    <li>• Format: Live + guided build + research</li>
                  </ul>
                </details>

                <details className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                  <summary className="cursor-pointer font-semibold text-accent py-1">Class Structure</summary>
                  <p className="mb-1">Saturday (Core Session):</p>
                  <ul className="space-y-1 mb-2">
                    <li>• 2-2.5 hours live session</li>
                    <li>• Concept + system design + walkthrough</li>
                  </ul>
                  <p className="mb-1">During Week:</p>
                  <ul className="space-y-1">
                    <li>• Coding/Product Build: 3-4 hrs</li>
                    <li>• Research Work: 2-3 hrs</li>
                    <li>• Assignments: 2 hrs</li>
                    <li>• Total Weekly Commitment: 8-10 hours</li>
                  </ul>
                </details>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                    <p className="font-semibold text-accent mb-2">Semester 1 - AI Systems & Foundations</p>
                    <ul className="space-y-1">
                      <li>• AI fundamentals and LLM architecture</li>
                      <li>• Prompt engineering</li>
                      <li>• RAG systems and vector databases</li>
                      <li>• Agentic workflows</li>
                      <li>• Product thinking</li>
                    </ul>
                    <p className="mt-2">Deliverables: Mini AI applications, system understanding, research topic selection</p>
                  </div>

                  <div className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                    <p className="font-semibold text-accent mb-2">Semester 2 - Research & Product Lab</p>
                    <p className="mb-1">Track A - AI Research:</p>
                    <ul className="space-y-1 mb-2">
                      <li>• Problem definition</li>
                      <li>• Experiments and validation</li>
                      <li>• Research paper development</li>
                    </ul>
                    <p className="mb-1">Track B - AI Product:</p>
                    <ul className="space-y-1">
                      <li>• Build production AI system</li>
                      <li>• Deploy application</li>
                      <li>• Solve real-world problem</li>
                    </ul>
                  </div>
                </div>

                <details className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                  <summary className="cursor-pointer font-semibold text-accent py-1">Final Outcomes</summary>
                  <ul className="space-y-1">
                    <li>• Fully deployed AI product</li>
                    <li>• GitHub portfolio</li>
                    <li>• Research paper publication</li>
                    <li>• Experiments and simulations validating novelty</li>
                  </ul>
                </details>

                <details className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                  <summary className="cursor-pointer font-semibold text-accent py-1">Pricing</summary>
                  <p className="text-gray-100"> Kindly contact us for detailed pricing information.</p>
                </details>

                <div className="rounded-lg border border-accent/35 bg-accent/10 px-4 py-3">
                  <p className="font-semibold text-white mb-2">Risk-Free Policy</p>
                  <p>Exit within first 2 weeks - no fee charged</p>
                </div>

                <details className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                  <summary className="cursor-pointer font-semibold text-accent py-1">Admissions</summary>
                  <ul className="space-y-1">
                    <li>• Academic transcript</li>
                    <li>• SAT-style benchmark</li>
                    <li>• AI aptitude test</li>
                    <li>• Interview</li>
                  </ul>
                </details>

                <details className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                  <summary className="cursor-pointer font-semibold text-accent py-1">Tech Stack</summary>
                  <ul className="space-y-1">
                    <li>• Python</li>
                    <li>• LLM APIs</li>
                    <li>• GitHub</li>
                    <li>• Vector databases</li>
                    <li>• Agent frameworks</li>
                  </ul>
                </details>

                <details className="rounded-lg border border-white/15 bg-white/10 px-4 py-3">
                  <summary className="cursor-pointer font-semibold text-accent py-1">Program Positioning</summary>
                  <p>A structured AI journey combining research, product building, and real-world innovation.</p>
                </details>
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
