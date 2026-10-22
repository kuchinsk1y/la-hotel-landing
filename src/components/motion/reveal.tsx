"use client";

import { motion, type HTMLMotionProps } from "motion/react";

import { easeOutExpo } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  duration?: number;
  /** Animate on mount instead of when scrolled into view. */
  immediate?: boolean;
};

export function Reveal({
  delay = 0,
  y = 40,
  duration = 1,
  immediate = false,
  ...props
}: RevealProps) {
  const target = { opacity: 1, y: 0 };
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      {...(immediate
        ? { animate: target }
        : { whileInView: target, viewport: { once: true, margin: "0px 0px -12% 0px" } })}
      transition={{ duration, delay, ease: easeOutExpo }}
      {...props}
    />
  );
}
