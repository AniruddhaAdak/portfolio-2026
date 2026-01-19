"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const timelineData: TimelineItem[] = [
    {
      year: "2026",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of cutting-edge web applications using Next.js, React, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
    },
    {
      year: "2024",
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Developed and maintained multiple client projects, implementing responsive designs and optimizing application performance. Collaborated with cross-functional teams.",
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "Creative Agency",
      description: "Specialized in creating stunning user interfaces and interactive web experiences. Worked with React, Vue.js, and modern CSS frameworks.",
    },
    {
      year: "2020",
      title: "Junior Developer",
      company: "Startup Hub",
      description: "Started my professional journey building web applications and learning modern development practices. Contributed to various open-source projects.",
    },
  ];

  return (
    <section id="timeline" className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Career Timeline
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey and milestones
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  } ml-16 md:ml-0`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-neon-blue/50 transition-all"
                  >
                    <div
                      className={`inline-block px-4 py-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-sm font-bold mb-3 ${
                        index % 2 === 0 ? "md:float-right" : "md:float-left"
                      }`}
                    >
                      {item.year}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 clear-both">
                      {item.title}
                    </h3>
                    <h4 className="text-lg text-neon-purple mb-3 font-semibold">
                      {item.company}
                    </h4>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full transform -translate-x-1/2 z-10 glow"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
