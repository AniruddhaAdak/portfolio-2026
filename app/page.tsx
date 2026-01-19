"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import ProgressIndicator from "@/components/ProgressIndicator";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <ProgressIndicator scaleX={scaleX} />
      <Navigation />
      
      <div className="relative">
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </div>

      {/* Background gradient effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-neon-blue opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-4 w-96 h-96 bg-neon-purple opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-neon-pink opacity-10 rounded-full blur-3xl"></div>
      </div>
    </main>
  );
}
