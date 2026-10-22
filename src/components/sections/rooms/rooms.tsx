import { ParallaxImage } from "@/components/motion/parallax-image";
import { Reveal } from "@/components/motion/reveal";
import { SplitHeading } from "@/components/motion/split-heading";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { introImages } from "@/data/rooms";

import { RoomGallery } from "./room-gallery";
import { RoomList } from "./room-list";
import { asset } from "@/lib/asset";

export function Rooms() {
  return (
    <section
      id="rooms"
      className="relative isolate overflow-hidden pt-12 pb-14 sm:pt-16 xl:pt-[calc(230*var(--u))] xl:pb-[calc(120*var(--u))]"
    >
      {/* Decorative shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* eslint-disable @next/next/no-img-element -- decorative SVGs */}
        <img
          src={asset("/images/rooms/blob-2.svg")}
          alt=""
          className="absolute top-[4.73%] left-[3.8%] hidden max-w-none opacity-40 xl:block xl:h-[calc(1087*var(--u))] xl:w-[calc(927*var(--u))]"
        />
        <img
          src={asset("/images/rooms/blob-1.svg")}
          alt=""
          className="absolute top-[75.3%] left-[3.5%] hidden max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-[52.22deg] xl:block xl:h-[calc(1047*var(--u))] xl:w-[calc(1192*var(--u))]"
        />
        {/* eslint-enable @next/next/no-img-element */}
      </div>

      <Container>
        <SplitHeading
          as="h2"
          inView
          className="mx-auto text-center text-h2 text-night xl:max-w-[70%]"
          segments={[
            { text: "Nisl mauris vel sit id diam." },
            { text: "Est mattis vulputate sit.", className: "text-steel" },
          ]}
        />

        {/* Intro */}
        <div className="mt-10 grid gap-6 sm:mt-12 xl:mt-[calc(120*var(--u))] xl:grid-cols-[44.15fr_53.9fr] xl:gap-x-[calc(33*var(--u))]">
          <div className="flex flex-col xl:pt-0">
            <Reveal>
              <p className="max-w-[485px] text-lead">
                Massa cursus nulla sit nisl mattis laoreet quam bibendum amet. Tempor
                viverra amet ut lacinia arcu mi maecenas. Et aenean cum varius integer id.
              </p>
              <ArrowLink href="#rooms-list" className="mt-6 xl:mt-[calc(36*var(--u))]">
                Explore Rooms
              </ArrowLink>
            </Reveal>

            <ParallaxImage
              src={introImages.breakfast}
              alt="Breakfast table with fresh juice and a hearty plate"
              placeholder="blur"
              travel={8}
              sizes="(min-width: 1280px) 754px, 100vw"
              className="mt-6 aspect-[754/472] rounded-[24px] xl:mt-[calc(100*var(--u))] xl:rounded-[40px]"
            />
          </div>

          <div className="flex flex-col items-start gap-5 xl:gap-[calc(31*var(--u))]">
            <ParallaxImage
              src={introImages.balcony}
              alt="Bedroom balcony overlooking a mountain lake"
              placeholder="blur"
              travel={8}
              sizes="(min-width: 1280px) 921px, 100vw"
              className="aspect-[921/678] w-full rounded-[24px] xl:rounded-[40px]"
            />
            <ParallaxImage
              src={introImages.pool}
              alt="Indoor swimming pool with a wooden lounge"
              placeholder="blur"
              travel={8}
              sizes="(min-width: 1280px) 425px, 60vw"
              className="aspect-[425/298] w-3/5 rounded-[24px] sm:w-1/2 xl:w-[46.1%] xl:rounded-[40px]"
            />
          </div>
        </div>

        {/* Room list */}
        <Reveal id="rooms-list" className="mt-12 scroll-mt-10 xl:mt-[calc(110*var(--u))]">
          <RoomList />
        </Reveal>

        {/* Gallery */}
        <Reveal className="mt-12 xl:mt-[calc(140*var(--u))]">
          <RoomGallery />
        </Reveal>
      </Container>
    </section>
  );
}
