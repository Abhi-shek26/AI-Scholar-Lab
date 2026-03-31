import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { CONTACT_EMAIL, DOMAIN } from "../config/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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

    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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
              className="w-full mt-8 px-6 py-3 rounded-lg bg-accent text-black font-semibold hover:brightness-110 transition-all"
            >
              Send to contact@aischolarslab.org
            </button>
          </motion.form>
        </div>
      </section>
    </MainLayout>
  );
}
