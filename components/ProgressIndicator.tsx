"use client";

import { motion, MotionValue } from "framer-motion";

interface ProgressIndicatorProps {
  scaleX: MotionValue<number>;
}

export default function ProgressIndicator({ scaleX }: ProgressIndicatorProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink z-50 origin-left"
      style={{ scaleX }}
    />
  );
}
