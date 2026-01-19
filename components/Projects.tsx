"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  image: string;
  link: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern online shopping experience",
      fullDescription: "A full-stack e-commerce platform built with Next.js, featuring real-time inventory management, payment processing, and an intuitive admin dashboard. Implemented advanced search functionality and personalized recommendations.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image: "🛒",
      link: "#",
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time messaging with AI integration",
      fullDescription: "An innovative chat application integrating OpenAI's GPT models for intelligent conversations. Features include real-time messaging, file sharing, voice messages, and smart suggestions powered by machine learning.",
      tech: ["React", "Node.js", "Socket.io", "OpenAI"],
      image: "🤖",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio CMS",
      description: "Content management for creatives",
      fullDescription: "A headless CMS designed specifically for creative professionals. Offers drag-and-drop page building, media library management, SEO optimization, and seamless integration with various frontend frameworks.",
      tech: ["React", "Express", "MongoDB", "AWS"],
      image: "📱",
      link: "#",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Data visualization platform",
      fullDescription: "Comprehensive analytics dashboard providing real-time insights through interactive charts and graphs. Features custom report generation, data export capabilities, and integration with multiple data sources.",
      tech: ["Vue.js", "D3.js", "Python", "Redis"],
      image: "📊",
      link: "#",
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "Health and wellness monitoring",
      fullDescription: "A comprehensive fitness tracking application that monitors workouts, nutrition, and health metrics. Includes goal setting, progress tracking, social features, and integration with popular fitness devices.",
      tech: ["React Native", "Firebase", "Node.js"],
      image: "💪",
      link: "#",
    },
    {
      id: 6,
      title: "Music Streaming Service",
      description: "Next-gen audio platform",
      fullDescription: "A modern music streaming platform with high-quality audio playback, personalized playlists, social sharing features, and artist collaboration tools. Built with performance and scalability in mind.",
      tech: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
      image: "🎵",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Showcasing my recent work and innovations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-neon-purple/50 transition-all cursor-pointer group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {project.image}
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-neon-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-neon-blue"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] p-8 rounded-2xl border-2 border-neon-purple max-w-2xl w-full max-h-[90vh] overflow-y-auto glow-purple"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-6xl">{selectedProject.image}</div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors text-3xl leading-none"
                >
                  ×
                </button>
              </div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedProject.fullDescription}
              </p>
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-neon-blue">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm text-white border border-neon-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <motion.a
                href={selectedProject.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-semibold glow"
              >
                View Project
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
