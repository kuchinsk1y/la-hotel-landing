import { ParallaxImage } from "@/components/motion/parallax-image";
import { Reveal } from "@/components/motion/reveal";
import { SplitHeading } from "@/components/motion/split-heading";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";

import leftImage from "@/assets/images/discover/left.webp";
import tallImage from "@/assets/images/discover/tall.webp";
import topRightImage from "@/assets/images/discover/top-right.webp";
import { asset, maskImage } from "@/lib/asset";

export function Discover() {
  return (
    <section
      id="discover"
      className="relative isolate mt-10 pt-20 pb-16 text-white sm:pt-28 xl:mt-[calc(60*var(--u))] xl:pt-[calc(300*var(--u))] xl:pb-[calc(200*var(--u))]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          style={maskImage("/images/shapes/wave-top.svg")}
          className="absolute inset-x-0 top-[calc(-40*var(--u))] bottom-0 bg-mist/70 mask-wave-top"
        />
        <div
          style={maskImage("/images/shapes/wave-top.svg")}
          className="absolute inset-0 overflow-hidden bg-navy mask-wave-top"
        >
          {/* eslint-disable @next/next/no-img-element -- decorative SVGs */}
          <img
            src={asset("/images/discover/blob-3.svg")}
            alt=""
            className="absolute top-[26%] left-[24%] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[56.55deg] xl:h-[calc(1681*var(--u))] xl:w-[calc(1856*var(--u))]"
            style={{ width: "60vw", height: "54vw" }}
          />
          <img
            src={asset("/images/discover/blob-2.svg")}
            alt=""
            className="absolute top-[78.6%] left-[86%] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-[83.23deg] xl:h-[calc(1084*var(--u))] xl:w-[calc(1233*var(--u))]"
            style={{ width: "40vw", height: "35vw" }}
          />
          {/* eslint-enable @next/next/no-img-element */}
        </div>
      </div>

      <Container>
        <SplitHeading
          as="h2"
          inView
          className="mx-auto text-center text-h2 xl:max-w-[74%]"
          segments={[
            { text: "Enim egestas integer suspendisse" },
            { text: "ullamcorper facilisis magnis.", className: "text-sand" },
          ]}
        />

        <div className="mt-10 grid grid-cols-2 gap-4 xl:relative xl:mt-[calc(130*var(--u))] xl:block xl:h-[calc(903*var(--u))]">
          <ParallaxImage
            src={tallImage}
            alt="Rooftop infinity pool with lounge beds above the sea"
            placeholder="blur"
            travel={7}
            sizes="(min-width: 1280px) 480px, 100vw"
            className="col-span-2 aspect-[716/903] rounded-card xl:absolute xl:top-0 xl:left-[29%] xl:col-auto xl:h-full xl:w-[41.9%]"
          />
          <ParallaxImage
            src={topRightImage}
            alt="Lakeside lodge with a heated pool and sun beds"
            placeholder="blur"
            travel={7}
            sizes="(min-width: 1280px) 320px, 50vw"
            className="aspect-[466/291] rounded-card xl:absolute xl:bottom-0 xl:left-0 xl:w-[27.3%]"
          />
          <ParallaxImage
            src={leftImage}
            alt="Thatched pool bar with loungers"
            placeholder="blur"
            travel={7}
            sizes="(min-width: 1280px) 320px, 50vw"
            className="aspect-[466/510] rounded-card xl:absolute xl:top-0 xl:right-0 xl:w-[27.3%]"
          />
        </div>

        <Reveal className="mt-10 flex justify-center xl:mt-[calc(150*var(--u))]">
          <ArrowLink href="#discover" tone="white">
            Discover Valleri
          </ArrowLink>
        </Reveal>
      </Container>
    </section>
  );
}
