import { useEffect, useRef, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL;

function CustomSelect({ id, name, value, onChange, options, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  const handleSelect = (selectedValue) => {
    onChange({
      target: {
        name,
        value: selectedValue,
        type: "text",
      },
    });
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-left text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors flex items-center justify-between"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <span className="text-sm">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <ul
          className="absolute z-20 mt-1 w-full rounded-lg border border-gray-300 dark:border-white/15 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg max-h-64 overflow-auto"
          role="listbox"
          aria-labelledby={id}
        >
          {options.map((option) => (
            <li key={option.value || "placeholder"}>
              <button
                type="button"
                onClick={() => handleSelect(option.value)}
                className="w-full px-4 py-2 text-left text-gray-900 dark:text-white hover:bg-accent/20 transition-colors"
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Apply() {
  const [formData, setFormData] = useState({
    // Section 1: Applicant Basics
    fullName: "",
    email: "",
    currentLevel: "",
    schoolName: "",
    countryTimezone: "",
    
    // Section 2: Academic & Capability
    gpa: "",
    standardizedScores: "",
    codingExperience: "",
    aiMLExposure: "",
    
    // Section 3: Statement of Purpose
    statementOfPurpose: "",
    
    // Section 4: Idea / Thinking Ability
    ideaDescription: "",
    
    // Section 5: Optional Evidence
    gitHubPortfolio: "",
    projectLink: "",
    resumeLink: "",
    
    // Section 8: Parent Acknowledgment
    parentGuardianName: "",
    parentGuardianEmail: "",
    parentGuardianPhone: "",
    acknowledgmentConsent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    if (submitStatus !== "success") return;

    const timer = setTimeout(() => {
      setSubmitStatus("idle");
      setSubmitMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [submitStatus]);

  useEffect(() => {
    if (submitStatus === "idle") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Section 1 validation
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.currentLevel.trim()) newErrors.currentLevel = "Current level is required";
    if (!formData.countryTimezone.trim()) newErrors.countryTimezone = "Country/Timezone is required";
    
    // Section 3 validation
    if (!formData.statementOfPurpose.trim()) newErrors.statementOfPurpose = "Statement of purpose is required";
    if (wordCount(formData.statementOfPurpose) < 150) newErrors.statementOfPurpose = "Statement must be at least 150 words";
    if (wordCount(formData.statementOfPurpose) > 500) newErrors.statementOfPurpose = "Statement must not exceed 500 words";
    
    // Section 4 validation
    if (!formData.ideaDescription.trim()) newErrors.ideaDescription = "Idea description is required";
    if (wordCount(formData.ideaDescription) < 100) newErrors.ideaDescription = "Idea description must be at least 100 words";
    if (wordCount(formData.ideaDescription) > 300) newErrors.ideaDescription = "Idea description must not exceed 300 words";
    
    // Section 8 validation
    if (!formData.parentGuardianName.trim()) newErrors.parentGuardianName = "Parent/Guardian name is required";
    if (!formData.parentGuardianEmail.trim()) newErrors.parentGuardianEmail = "Parent/Guardian email is required";
    if (!formData.parentGuardianPhone.trim()) newErrors.parentGuardianPhone = "Parent/Guardian phone is required";
    if (!formData.acknowledgmentConsent) newErrors.acknowledgmentConsent = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const wordCount = (text) => text.trim().split(/\s+/).length;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitStatus("idle");
    setSubmitMessage("");

    if (!APPS_SCRIPT_URL) {
      setSubmitStatus("error");
      setSubmitMessage("Application form endpoint is not configured. Set VITE_APPS_SCRIPT_URL in your .env file.");
      return;
    }

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      currentLevel: formData.currentLevel,
      schoolName: formData.schoolName,
      countryTimezone: formData.countryTimezone,
      gpa: formData.gpa,
      standardizedScores: formData.standardizedScores,
      codingExperience: formData.codingExperience,
      aiMLExposure: formData.aiMLExposure,
      statementOfPurpose: formData.statementOfPurpose,
      ideaDescription: formData.ideaDescription,
      gitHubPortfolio: formData.gitHubPortfolio,
      projectLink: formData.projectLink,
      resumeLink: formData.resumeLink,
      parentGuardianName: formData.parentGuardianName,
      parentGuardianEmail: formData.parentGuardianEmail,
      parentGuardianPhone: formData.parentGuardianPhone,
      acknowledgmentConsent: formData.acknowledgmentConsent,
    };

    setIsSubmitting(true);

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setSubmitStatus("success");
      setSubmitMessage("Application submitted successfully.");
      setFormData({
        fullName: "",
        email: "",
        currentLevel: "",
        schoolName: "",
        countryTimezone: "",
        gpa: "",
        standardizedScores: "",
        codingExperience: "",
        aiMLExposure: "",
        statementOfPurpose: "",
        ideaDescription: "",
        gitHubPortfolio: "",
        projectLink: "",
        resumeLink: "",
        parentGuardianName: "",
        parentGuardianEmail: "",
        parentGuardianPhone: "",
        acknowledgmentConsent: false,
      });
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Unable to submit right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
      <section
        className="min-h-screen pt-32 pb-20 bg-cover bg-center bg-fixed relative transition-colors duration-300"
        style={{ backgroundImage: `url(/images/backgrounds/apply-future-builder.jpg)` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-white drop-shadow-lg">
              Apply to AI Scholars Lab
            </h1>
            <p className="text-lg text-gray-100 drop-shadow-lg mb-3">
              We evaluate applicants based on clarity of thinking, curiosity, and problem-solving ability.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-white/20 bg-white/85 dark:bg-slate-900/60"
          >
            {submitStatus === "success" && (
              <p className="mb-5 rounded-lg border border-green-400/50 bg-green-500/15 px-4 py-3 text-sm text-green-200">
                {submitMessage}
              </p>
            )}

            {submitStatus === "error" && (
              <p className="mb-5 rounded-lg border border-red-400/50 bg-red-500/15 px-4 py-3 text-sm text-red-200">
                {submitMessage}
              </p>
            )}

            {/* SECTION 1: APPLICANT BASICS */}
            <div className="border-b border-white/10 pb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Section 1: Applicant Basics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-white">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-300 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="student@example.com"
                  />
                  {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="currentLevel" className="block text-sm font-semibold mb-2 text-white">
                    Current Level <span className="text-red-400">*</span>
                  </label>
                  <CustomSelect
                    id="currentLevel"
                    name="currentLevel"
                    value={formData.currentLevel}
                    onChange={handleChange}
                    placeholder="Select a level"
                    options={[
                      { value: "", label: "Select a level" },
                      { value: "Grade 9", label: "Grade 9" },
                      { value: "Grade 10", label: "Grade 10" },
                      { value: "Grade 11", label: "Grade 11" },
                      { value: "Grade 12", label: "Grade 12" },
                      { value: "Gap Year", label: "Gap Year" },
                      { value: "Other", label: "Other" },
                    ]}
                  />
                  {errors.currentLevel && <p className="text-red-300 text-xs mt-1">{errors.currentLevel}</p>}
                </div>

                <div>
                  <label htmlFor="schoolName" className="block text-sm font-semibold mb-2 text-white">
                    School Name (Optional)
                  </label>
                  <input
                    id="schoolName"
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="City High School"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="countryTimezone" className="block text-sm font-semibold mb-2 text-white">
                    Country / Timezone <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="countryTimezone"
                    type="text"
                    name="countryTimezone"
                    value={formData.countryTimezone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="India (IST) / United States (EST)"
                  />
                  {errors.countryTimezone && <p className="text-red-300 text-xs mt-1">{errors.countryTimezone}</p>}
                </div>
              </div>
            </div>

            {/* SECTION 2: ACADEMIC & CAPABILITY */}
            <div className="border-b border-white/10 pb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Section 2: Academic & Capability Snapshot</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="gpa" className="block text-sm font-semibold mb-2 text-white">
                    GPA (Optional)
                  </label>
                  <input
                    id="gpa"
                    type="text"
                    name="gpa"
                    value={formData.gpa}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="3.8/4.0"
                  />
                </div>

                <div>
                  <label htmlFor="standardizedScores" className="block text-sm font-semibold mb-2 text-white">
                    Standardized Scores (Optional)
                  </label>
                  <input
                    id="standardizedScores"
                    type="text"
                    name="standardizedScores"
                    value={formData.standardizedScores}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="SAT 1480 / ACT 34"
                  />
                </div>

                <div>
                  <label htmlFor="codingExperience" className="block text-sm font-semibold mb-2 text-white">
                    Coding Experience
                  </label>
                  <CustomSelect
                    id="codingExperience"
                    name="codingExperience"
                    value={formData.codingExperience}
                    onChange={handleChange}
                    placeholder="Select if any"
                    options={[
                      { value: "", label: "Select if any" },
                      { value: "None", label: "None" },
                      { value: "Beginner", label: "Beginner" },
                      { value: "Intermediate", label: "Intermediate" },
                      { value: "Advanced", label: "Advanced" },
                    ]}
                  />
                </div>

                <div>
                  <label htmlFor="aiMLExposure" className="block text-sm font-semibold mb-2 text-white">
                    AI/ML Exposure
                  </label>
                  <CustomSelect
                    id="aiMLExposure"
                    name="aiMLExposure"
                    value={formData.aiMLExposure}
                    onChange={handleChange}
                    placeholder="Select if any"
                    options={[
                      { value: "", label: "Select if any" },
                      { value: "None", label: "None" },
                      { value: "Courses", label: "Courses" },
                      { value: "Projects", label: "Projects" },
                      { value: "Competitions", label: "Competitions" },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* SECTION 3: STATEMENT OF PURPOSE */}
            <div className="border-b border-white/10 pb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Section 3: Statement of Purpose</h2>
              <p className="text-sm text-gray-300 mb-4">
                Tell us why you want to join AI Scholars Lab, what problems interest you, and what ideas you're thinking about.
              </p>
              
              <div>
                <label htmlFor="statementOfPurpose" className="block text-sm font-semibold mb-2 text-white">
                  Your Statement <span className="text-red-400">*</span> <span className="text-xs font-normal text-gray-400">(150–500 words)</span>
                </label>
                <textarea
                  id="statementOfPurpose"
                  name="statementOfPurpose"
                  value={formData.statementOfPurpose}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors resize-none"
                  rows="6"
                  placeholder="I want to build AI systems that solve real-world problems. I'm particularly interested in..."
                />
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-400">Word count: {wordCount(formData.statementOfPurpose)}</p>
                  {errors.statementOfPurpose && <p className="text-red-300 text-xs">{errors.statementOfPurpose}</p>}
                </div>
              </div>
            </div>

            {/* SECTION 4: IDEA / THINKING ABILITY */}
            <div className="border-b border-white/10 pb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Section 4: Idea / Thinking Ability</h2>
              <p className="text-sm text-gray-300 mb-4">
                Describe one AI system or product you would build: What problem does it solve? Who benefits? What's the approach?
              </p>
              
              <div>
                <label htmlFor="ideaDescription" className="block text-sm font-semibold mb-2 text-white">
                  Your Idea <span className="text-red-400">*</span> <span className="text-xs font-normal text-gray-400">(100–300 words)</span>
                </label>
                <textarea
                  id="ideaDescription"
                  name="ideaDescription"
                  value={formData.ideaDescription}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors resize-none"
                  rows="5"
                  placeholder="I would build an AI system that..."
                />
              </div>
            </div>

            {/* SECTION 5: OPTIONAL EVIDENCE */}
            <div className="border-b border-white/10 pb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Section 5: Optional Evidence</h2>
              <p className="text-sm text-gray-300 mb-4">
                Share links to your work, portfolio, or resume if available.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="gitHubPortfolio" className="block text-sm font-semibold mb-2 text-white">
                    GitHub / Portfolio (Optional)
                  </label>
                  <input
                    id="gitHubPortfolio"
                    type="url"
                    name="gitHubPortfolio"
                    value={formData.gitHubPortfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="https://github.com/yourname"
                  />
                </div>

                <div>
                  <label htmlFor="projectLink" className="block text-sm font-semibold mb-2 text-white">
                    Project Link (Optional)
                  </label>
                  <input
                    id="projectLink"
                    type="url"
                    name="projectLink"
                    value={formData.projectLink}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="https://example.com/project"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="resumeLink" className="block text-sm font-semibold mb-2 text-white">
                    Resume Link (Optional)
                  </label>
                  <input
                    id="resumeLink"
                    type="url"
                    name="resumeLink"
                    value={formData.resumeLink}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="https://example.com/resume.pdf"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 8: PARENT ACKNOWLEDGMENT */}
            <div className="pb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Section 8: Parent/Guardian Acknowledgment & Consent</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="parentGuardianName" className="block text-sm font-semibold mb-2 text-white">
                    Parent/Guardian Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="parentGuardianName"
                    type="text"
                    name="parentGuardianName"
                    value={formData.parentGuardianName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="Jane Doe"
                  />
                  {errors.parentGuardianName && <p className="text-red-300 text-xs mt-1">{errors.parentGuardianName}</p>}
                </div>

                <div>
                  <label htmlFor="parentGuardianEmail" className="block text-sm font-semibold mb-2 text-white">
                    Parent/Guardian Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="parentGuardianEmail"
                    type="email"
                    name="parentGuardianEmail"
                    value={formData.parentGuardianEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="parent@example.com"
                  />
                  {errors.parentGuardianEmail && <p className="text-red-300 text-xs mt-1">{errors.parentGuardianEmail}</p>}
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="parentGuardianPhone" className="block text-sm font-semibold mb-2 text-white">
                    Parent/Guardian Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="parentGuardianPhone"
                    type="text"
                    name="parentGuardianPhone"
                    value={formData.parentGuardianPhone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.parentGuardianPhone && <p className="text-red-300 text-xs mt-1">{errors.parentGuardianPhone}</p>}
                </div>
              </div>

              {/* Acknowledgment Checkbox */}
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 mb-6">
                <h3 className="text-sm font-semibold text-white mb-4">Terms of Participation</h3>
                <ul className="text-sm text-gray-200 space-y-2 mb-4">
                  <li>✓ Selection is merit-based and does not imply free participation</li>
                  <li>✓ Fees and payment timelines will be communicated post-selection</li>
                  <li>✓ No guarantee of university admissions</li>
                  <li>✓ Scholarships are limited and merit-based</li>
                </ul>
                
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acknowledgmentConsent"
                    checked={formData.acknowledgmentConsent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-gray-300 accent-accent focus:ring-accent"
                  />
                  <span className="text-sm text-gray-200">
                    I acknowledge the above terms and agree that my parent/guardian consents to AI Scholars Lab's selection and participation policies.
                  </span>
                </label>
                {errors.acknowledgmentConsent && <p className="text-red-300 text-xs mt-2">{errors.acknowledgmentConsent}</p>}
              </div>
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-accent text-black font-semibold rounded-lg hover:brightness-110 transition-all text-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </motion.div>

            <p className="text-xs text-gray-400 text-center">
              Questions? Email us at <span className="text-accent font-semibold">contact@aischolarslab.org</span>
            </p>
          </motion.form>
        </div>
      </section>
    </MainLayout>
  );
}
