"use client";

import { motion, type Variants } from "motion/react";
import { Fragment } from "react";

import { cn } from "@/lib/cn";
import { easeOutExpo } from "@/lib/motion";

type Segment = { text: string; className?: string };

type SplitHeadingProps = {
  segments: Segment[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
  /** Start when scrolled into view instead of on mount. */
  inView?: boolean;
};

const word: Variants = {
  hidden: { y: "125%", rotate: 4, opacity: 0 },
  visible: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: { duration: 1.1, ease: easeOutExpo },
  },
};

/**
 * Heading whose words rise out of a mask, one after another.
 * The trigger lives on the heading itself: words are clipped by their masks
 * while hidden, so they could never report as "in view" on their own.
 */
export function SplitHeading({
  segments,
  as: Tag = "h1",
  className,
  delay = 0.05,
  inView = false,
}: SplitHeadingProps) {
  const label = segments.map((s) => s.text).join(" ");
  const MotionTag = motion[Tag];

  const root: Variants = {
    hidden: {},
    visible: { transition: { delayChildren: delay, staggerChildren: 0.055 } },
  };

  return (
    <MotionTag
      aria-label={label}
      className={className}
      variants={root}
      initial="hidden"
      {...(inView
        ? { whileInView: "visible", viewport: { once: true, margin: "0px 0px -10% 0px" } }
        : { animate: "visible" })}
    >
      {segments.map((segment, s) =>
        segment.text.split(" ").map((w, i) => (
          <Fragment key={`${s}-${i}`}>
            <span
              aria-hidden
              className="inline-block overflow-hidden pb-[0.12em] align-bottom"
            >
              <motion.span
                variants={word}
                className={cn("inline-block will-change-transform", segment.className)}
              >
                {w}
              </motion.span>
            </span>{" "}
          </Fragment>
        )),
      )}
    </MotionTag>
  );
}
