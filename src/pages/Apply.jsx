import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

export default function Apply() {
  const [formData, setFormData] = useState({
    fullName: "",
    grade: "",
    school: "",
    gpa: "",
    satScore: "",
    statementOfPurpose: "",
    projectLinks: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.grade) newErrors.grade = "Grade is required";
    if (!formData.school.trim()) newErrors.school = "School is required";
    if (!formData.gpa.trim()) newErrors.gpa = "GPA is required";
    if (!formData.statementOfPurpose.trim())
      newErrors.statementOfPurpose = "Statement of purpose is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Show success message
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        grade: "",
        school: "",
        gpa: "",
        satScore: "",
        statementOfPurpose: "",
        projectLinks: "",
        email: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <MainLayout>
      <section
        className="min-h-screen pt-32 pb-20 bg-cover bg-center bg-fixed relative transition-colors duration-300"
        style={{backgroundImage: `url(/images/backgrounds/apply-future-builder.jpg)`}}
      >
        {/* Lighter overlay with text shadow enhancement */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 text-white drop-shadow-lg">
              Apply to AI Scholars Lab
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 drop-shadow-lg">
              Limited spots available. Apply by the deadline for full consideration.
            </p>
          </motion.div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 p-6 bg-emerald-500/20 border border-emerald-400 rounded-lg text-center"
              role="status"
              aria-live="polite"
              aria-atomic="true"
            >
              <h2 className="text-xl font-semibold text-emerald-400 mb-2">
                ✓ Application Submitted
              </h2>
              <p className="text-emerald-300">
                Thanks for applying! We'll review your application and contact you soon.
              </p>
            </motion.div>
          )}

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-white/20"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Full Name <span aria-label="required">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg
                    text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-accent
                    transition-colors"
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p id="fullName-error" className="text-red-400 text-xs mt-1" role="alert">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Email <span aria-label="required">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg
                    text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-accent
                    transition-colors"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">{errors.email}</p>
                )}
              </div>

              {/* Grade */}
              <div>
                <label htmlFor="grade" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  Grade <span aria-label="required">*</span>
                </label>
                <select
                  id="grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-describedby={errors.grade ? "grade-error" : undefined}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg
                    text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="">Select grade</option>
                  <option value="9">9th</option>
                  <option value="10">10th</option>
                  <option value="11">11th</option>
                  <option value="12">12th</option>
                </select>
                {errors.grade && (
                  <p id="grade-error" className="text-red-400 text-xs mt-1" role="alert">{errors.grade}</p>
                )}
              </div>

              {/* School */}
              <div>
                <label htmlFor="school" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  School <span aria-label="required">*</span>
                </label>
                <input
                  id="school"
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-describedby={errors.school ? "school-error" : undefined}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg
                    text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-accent
                    transition-colors"
                  placeholder="Your high school"
                />
                {errors.school && (
                  <p id="school-error" className="text-red-400 text-xs mt-1" role="alert">{errors.school}</p>
                )}
              </div>

              {/* GPA */}
              <div>
                <label htmlFor="gpa" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  GPA <span aria-label="required">*</span>
                </label>
                <input
                  id="gpa"
                  type="text"
                  name="gpa"
                  value={formData.gpa}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-describedby={errors.gpa ? "gpa-error" : undefined}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg
                    text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-accent
                    transition-colors"
                  placeholder="3.8"
                />
                {errors.gpa && (
                  <p id="gpa-error" className="text-red-400 text-xs mt-1" role="alert">{errors.gpa}</p>
                )}
              </div>

              {/* SAT Score */}
              <div>
                <label htmlFor="satScore" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                  SAT Score (optional)
                </label>
                <input
                  id="satScore"
                  type="text"
                  name="satScore"
                  value={formData.satScore}
                  onChange={handleChange}
                  aria-describedby="satScore-hint"
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg
                    text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-accent
                    transition-colors"
                  placeholder="1500"
                />
                <p id="satScore-hint" className="text-xs text-gray-600 dark:text-gray-500 mt-1">Optional field</p>
              </div>
            </div>

            {/* Statement of Purpose */}
            <div className="mb-6">
              <label htmlFor="statement" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                Statement of Purpose <span aria-label="required">*</span> <span className="text-xs font-normal text-gray-600 dark:text-gray-400">(250–500 words)</span>
              </label>
              <textarea
                id="statement"
                name="statementOfPurpose"
                value={formData.statementOfPurpose}
                onChange={handleChange}
                required
                aria-required="true"
                aria-describedby={errors.statementOfPurpose ? "statement-error" : "statement-hint"}
                className="w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg
                  text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-accent
                  transition-colors resize-none"
                rows="6"
                placeholder="Tell us about your interest in AI, your goals, and why you want to join this program."
              ></textarea>
              {errors.statementOfPurpose ? (
                <p id="statement-error" className="text-red-400 text-xs mt-1" role="alert">{errors.statementOfPurpose}</p>
              ) : (
                <p id="statement-hint" className="text-xs text-gray-600 dark:text-gray-500 mt-1">250–500 words recommended</p>
              )}
            </div>

            {/* Project Links */}
            <div className="mb-8">
              <label htmlFor="projects" className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                Project Links (optional)
              </label>
              <textarea
                id="projects"
                name="projectLinks"
                value={formData.projectLinks}
                onChange={handleChange}
                aria-describedby="projects-hint"
                className="w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-lg
                  text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:border-accent
                  transition-colors resize-none"
                rows="3"
                placeholder="Links to your GitHub, portfolio, or projects (one per line)"
              ></textarea>
              <p id="projects-hint" className="text-xs text-gray-600 dark:text-gray-500 mt-1">Optional field - one link per line</p>
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-accent to-cyan-400 text-black
                  font-semibold rounded-lg hover:shadow-glow transition-all
                  font-display text-lg"
              >
                Submit Application
              </button>
            </motion.div>

            <p className="text-xs text-gray-600 dark:text-gray-500 text-center mt-4">
              By submitting, you agree to our Terms of Service and Privacy Policy.
            </p>
          </motion.form>
        </div>
      </section>
    </MainLayout>
  );
}
