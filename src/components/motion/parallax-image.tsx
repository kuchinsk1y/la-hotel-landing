"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import Image, { type ImageProps } from "next/image";
import { useRef } from "react";

import { easeOutExpo } from "@/lib/motion";
import { cn } from "@/lib/cn";

type ParallaxImageProps = Omit<ImageProps, "fill"> & {
  /** How far (in % of the frame height) the photo travels inside its frame. */
  travel?: number;
  className?: string;
  imageClassName?: string;
};

/**
 * Image that drifts slower than the page and gently zooms while scrolling,
 * so it feels like it sits behind the frame. The frame reveals on entry.
 */
export function ParallaxImage({
  travel = 12,
  className,
  imageClassName,
  alt,
  ...props
}: ParallaxImageProps) {
  const frame = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: frame,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${-travel}%`, `${travel}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.02, 1.08]);

  return (
    <motion.div
      ref={frame}
      className={cn("relative overflow-hidden", className)}
      initial={{ opacity: 0, y: 70, clipPath: "inset(10% 6% 0% 6% round 40px)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.4, ease: easeOutExpo }}
    >
      <motion.div
        className="absolute inset-x-0 will-change-transform"
        style={{
          top: `${-travel}%`,
          bottom: `${-travel}%`,
          y: reduce ? 0 : y,
          scale: reduce ? 1 : scale,
        }}
      >
        <Image fill alt={alt} className={cn("object-cover", imageClassName)} {...props} />
      </motion.div>
    </motion.div>
  );
}
