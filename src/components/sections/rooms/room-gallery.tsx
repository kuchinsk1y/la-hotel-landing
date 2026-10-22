"use client";

import Image from "next/image";
import { useState } from "react";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { gallerySlides } from "@/data/rooms";
import { cn } from "@/lib/cn";

const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";

const controlClass =
  "flex h-9 w-[82px] items-center justify-center rounded-full bg-navy text-white transition-[opacity,transform] duration-300 enabled:hover:scale-105 enabled:active:scale-95 disabled:cursor-default disabled:opacity-40";

export function RoomGallery() {
  const [index, setIndex] = useState(0);
  const last = gallerySlides.length - 1;

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-end gap-6 xl:mb-5">
        <button
          type="button"
          aria-label="Previous slide"
          disabled={index === 0}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          className={controlClass}
        >
          <ArrowIcon direction="left" />
        </button>
        <p aria-live="polite" className="text-body tabular-nums">
          {index + 1} / {gallerySlides.length}
        </p>
        <button
          type="button"
          aria-label="Next slide"
          disabled={index === last}
          onClick={() => setIndex((i) => Math.min(last, i + 1))}
          className={controlClass}
        >
          <ArrowIcon />
        </button>
      </div>

      <div className="flex items-end gap-[4.27%]">
        {gallerySlides.map((slide, i) => {
          const state = i < index ? "past" : i === index ? "active" : "next";
          return (
            <button
              key={slide.alt}
              type="button"
              tabIndex={state === "next" ? 0 : -1}
              aria-label={state === "active" ? slide.alt : `Show slide ${i + 1}`}
              aria-current={state === "active"}
              onClick={() => setIndex(i)}
              className={cn(
                "relative block aspect-[1338/678] shrink-0 overflow-hidden rounded-[24px] transition-[width,margin,opacity] duration-[1100ms] xl:rounded-[40px]",
                ease,
                state === "past" && "pointer-events-none -mr-[4.27%] w-0 opacity-0",
                state === "active" && "w-full cursor-default xl:w-[78.3%]",
                state === "next" && "w-[72%] cursor-pointer xl:w-[52.6%]",
              )}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(min-width: 1280px) 70vw, 100vw"
                className={cn(
                  "object-cover transition-transform duration-[1400ms]",
                  ease,
                  state === "active" ? "scale-100" : "scale-110",
                )}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
