import { ParallaxImage } from "@/components/motion/parallax-image";
import { Reveal } from "@/components/motion/reveal";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";

import aerial from "@/assets/images/cta/aerial.webp";
import { asset, maskImage } from "@/lib/asset";

export function Cta() {
  return (
    <section
      id="booking"
      className="relative isolate overflow-hidden pt-44 pb-8 sm:pt-72 xl:pt-[calc(560*var(--u))] xl:pb-[calc(87*var(--u))]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          style={maskImage("/images/shapes/wave-top.svg")}
          className="absolute inset-x-0 top-[calc(30*var(--u))] bottom-0 bg-mist/70 mask-wave-top"
        />
        <div
          style={maskImage("/images/shapes/wave-top.svg")}
          className="absolute inset-x-0 top-[calc(60*var(--u))] bottom-0 mask-wave-top"
        >
          <ParallaxImage
            src={aerial}
            alt=""
            placeholder="blur"
            travel={8}
            sizes="100vw"
            className="!absolute inset-0 !rounded-none"
          />
        </div>
      </div>

      <Container>
        <Reveal className="relative flex min-h-[calc(298*var(--u))] flex-col items-start justify-center gap-6 overflow-hidden rounded-card bg-forest px-6 py-8 text-white sm:px-10 md:flex-row md:items-center md:justify-between xl:px-[7%]">
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG */}
          <img
            src={asset("/images/cta/card-blob.svg")}
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[133%] left-[65.8%] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-60 xl:h-[calc(1172*var(--u))] xl:w-[calc(1294*var(--u))]"
            style={{ width: "60vw", height: "54vw" }}
          />
          <h2 className="relative text-h3">Get back to nature</h2>
          <ArrowLink href="#contact" tone="whiteForest" className="relative">
            Book Your Stay
          </ArrowLink>
        </Reveal>
      </Container>
    </section>
  );
}
