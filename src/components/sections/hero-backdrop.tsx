"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { asset } from "@/lib/asset";

const blobs = [
  {
    src: "/images/hero/bg-2.svg",
    className: "left-[48.28%] -top-[17.2%] -right-[7.24%] bottom-[69.71%]",
    speed: 0.12,
  },
  {
    src: "/images/hero/bg-3.svg",
    className: "left-[-13.33%] top-[69.78%] right-[58.85%] -bottom-[2.65%]",
    speed: -0.1,
  },
  {
    src: "/images/hero/bg-5.svg",
    className: "left-[-6.2%] top-[-7.19%] right-3/4 bottom-[79.83%]",
    speed: 0.2,
  },
];

/** Organic background shapes drifting at different speeds as the page scrolls. */
export function HeroBackdrop() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const big = useTransform(scrollY, [0, 3000], [0, -260]);
  const a = useTransform(scrollY, [0, 3000], [0, 3000 * blobs[0].speed]);
  const b = useTransform(scrollY, [0, 3000], [0, 3000 * blobs[1].speed]);
  const c = useTransform(scrollY, [0, 3000], [0, 3000 * blobs[2].speed]);
  const ys = [a, b, c];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {blobs.map(({ src, className }, i) => (
        <motion.img
          key={src}
          src={asset(src)}
          alt=""
          className={`absolute block max-w-none will-change-transform ${className}`}
          style={{ y: reduce ? 0 : ys[i] }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.1 * i }}
        />
      ))}
      <motion.div
        className="absolute inset-[9.8%_-41.54%_1.68%_15.21%] will-change-transform"
        style={{ containerType: "size", y: reduce ? 0 : big }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG */}
        <img
          src={asset("/images/hero/bg-4.svg")}
          alt=""
          className="absolute top-1/2 left-1/2 block max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[56.55deg]"
          style={{
            width: "hypot(42.1732cqw, 62.5682cqh)",
            height: "hypot(57.8268cqw, 37.4318cqh)",
          }}
        />
      </motion.div>
    </div>
  );
}
