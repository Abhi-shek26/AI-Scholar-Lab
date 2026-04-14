import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { CONTACT_EMAIL, DOMAIN } from "../config/contact";
import emailjs from "emailjs-com";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const AMERICAN_TIMEZONE = "America/New_York";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("idle");

  // Initialize EmailJS
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required";
    if (!formData.email.trim()) nextErrors.email = "Email is required";
    if (!formData.message.trim()) nextErrors.message = "Message is required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitMessage("");
    setSubmitStatus("idle");

    // Fallback for local preview when EmailJS credentials are not configured.
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setIsSubmitting(true);

    // Get current time in readable format
    const currentTime = new Date().toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: AMERICAN_TIMEZONE,
      timeZoneName: "short",
    });

    // Send via EmailJS
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_email: CONTACT_EMAIL,
        name: formData.name,
        from_email: formData.email,
        message: formData.message,
        time: currentTime,
      })
      .then(() => {
        setSubmitStatus("success");
        setSubmitMessage("Message submitted successfully. Our team will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setSubmitStatus("error");
        setSubmitMessage(
          `Unable to submit right now. ${error?.text || error?.message || "Please try again shortly."}`
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <MainLayout>
      <section
        className="min-h-screen pt-32 pb-20 bg-cover bg-center bg-fixed relative transition-colors duration-300"
        style={{ backgroundImage: "url(/images/backgrounds/admissions-journey.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-white drop-shadow-lg">
              Contact
            </h1>
            <p className="text-lg text-gray-100 drop-shadow-lg">
              For general inquiries from students, parents, and external partners.
            </p>
            <p className="text-sm text-gray-200 mt-3">
              Domain: {DOMAIN} | Contact: {CONTACT_EMAIL}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 rounded-2xl border border-white/20"
          >
            {!EMAILJS_PUBLIC_KEY && (
              <p className="mb-5 text-xs text-yellow-300">
                EmailJS credentials missing. Submit will open your email app until VITE_EMAILJS_* variables are configured.
              </p>
            )}

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

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-300 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white"
                  placeholder="Your email address"
                />
                {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/90 dark:bg-white/5 border border-gray-300 dark:border-white/15 rounded-lg text-gray-900 dark:text-white resize-none"
                  placeholder="How can we help?"
                />
                {errors.message && <p className="text-red-300 text-xs mt-1">{errors.message}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 px-6 py-3 rounded-lg bg-accent text-black font-semibold hover:brightness-110 transition-all"
            >
              {isSubmitting ? "Submitting..." : "Send to contact@aischolarslab.org"}
            </button>
          </motion.form>
        </div>
      </section>
    </MainLayout>
  );
}
