"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { rooms } from "@/data/rooms";
import { cn } from "@/lib/cn";
import { asset } from "@/lib/asset";

const ease = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export function RoomList() {
  const [active, setActive] = useState(1);

  return (
    <ul className="relative overflow-hidden rounded-[24px] border-2 border-steel xl:rounded-[40px]">
      {rooms.map((room, i) => {
        const isActive = i === active;
        return (
          <li
            key={room.title}
            tabIndex={0}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={cn(
              "relative flex cursor-pointer items-stretch overflow-hidden border-steel transition-colors duration-700 outline-none",
              i > 0 && "border-t-2",
              "xl:min-h-[calc(220*var(--u))]",
              isActive ? "bg-navy text-white" : "text-night",
            )}
          >
            {/* Decorative blobs in the highlighted row */}
            {/* eslint-disable @next/next/no-img-element -- decorative SVGs */}
            <img
              src={asset("/images/rooms/row-blob-1.svg")}
              alt=""
              aria-hidden
              className={cn(
                "pointer-events-none absolute top-1/2 left-[40%] hidden max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[65deg] transition-opacity duration-700 xl:block",
                "h-[calc(524*var(--u))] w-[calc(447*var(--u))]",
                isActive ? "opacity-100" : "opacity-0",
              )}
            />
            <img
              src={asset("/images/rooms/row-blob-2.svg")}
              alt=""
              aria-hidden
              className={cn(
                "pointer-events-none absolute top-[110%] left-[90.5%] hidden max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[164.55deg] transition-opacity duration-700 xl:block",
                "h-[calc(566*var(--u))] w-[calc(443*var(--u))]",
                isActive ? "opacity-100" : "opacity-0",
              )}
            />

            {/* eslint-enable @next/next/no-img-element */}
            <div
              className={cn(
                "relative hidden shrink-0 overflow-hidden transition-[width] duration-[900ms] xl:block",
                ease,
                isActive ? "xl:w-[calc(415*var(--u))]" : "xl:w-0",
              )}
            >
              <Image
                src={room.image}
                alt=""
                fill
                sizes="(min-width: 1280px) 415px, 0px"
                className={cn(
                  "object-cover transition-transform duration-[1200ms]",
                  ease,
                  isActive ? "scale-100" : "scale-125",
                )}
              />
            </div>

            <div
              className={cn(
                "relative flex-1 px-6 py-7 transition-[padding] duration-[900ms] sm:px-10 xl:pt-[calc(50*var(--u))] xl:pb-[calc(40*var(--u))]",
                ease,
                isActive ? "xl:pl-[calc(87*var(--u))]" : "xl:pl-[calc(71*var(--u))]",
              )}
            >
              <h3 className="text-h4">{room.title}</h3>
              <p className="mt-3 max-w-[652px] pr-16 text-body sm:pr-24 xl:mt-[calc(14*var(--u))] xl:max-w-[calc(880*var(--u))] xl:pr-0">
                {room.description}
              </p>

              <Link
                href="#booking"
                tabIndex={isActive ? 0 : -1}
                aria-label={`Book ${room.title}`}
                className="absolute right-6 bottom-7 flex h-9 w-[82px] items-center justify-center sm:right-10 xl:right-[calc(61*var(--u))] xl:bottom-[calc(45*var(--u))]"
              >
                <span
                  className={cn(
                    "absolute inset-0 rounded-full bg-navy transition-opacity duration-500",
                    isActive ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute inset-0 rounded-full bg-white transition-opacity duration-500",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "relative text-body tabular-nums transition-opacity duration-500",
                    "text-white",
                    isActive && "opacity-0",
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowIcon
                  className={cn(
                    "absolute text-navy transition-opacity duration-500",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
