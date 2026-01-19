"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form data:", data);
    setIsSubmitting(false);
    setSubmitStatus("success");
    reset();

    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Let's discuss your next project or just say hello
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject *
              </label>
              <input
                id="subject"
                type="text"
                {...register("subject", { required: "Subject is required" })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={6}
                {...register("message", { required: "Message is required" })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white font-semibold glow transition-opacity ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-3xl mb-2">📧</div>
                <h3 className="text-lg font-semibold text-neon-blue mb-1">Email</h3>
                <p className="text-gray-400">contact@aniruddha.dev</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-3xl mb-2">📱</div>
                <h3 className="text-lg font-semibold text-neon-purple mb-1">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <div className="text-3xl mb-2">📍</div>
                <h3 className="text-lg font-semibold text-neon-pink mb-1">Location</h3>
                <p className="text-gray-400">San Francisco, CA</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center space-x-6 mt-12"
        >
          {["GitHub", "LinkedIn", "Twitter", "Dribbble"].map((social) => (
            <motion.a
              key={social}
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-neon-blue hover:border-neon-blue transition-all"
            >
              {social[0]}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-20 text-gray-500"
      >
        <p>© 2026 Aniruddha Adak. All rights reserved.</p>
        <p className="mt-2 text-sm">Built with Next.js, TypeScript, and Framer Motion</p>
      </motion.div>
    </section>
  );
}
