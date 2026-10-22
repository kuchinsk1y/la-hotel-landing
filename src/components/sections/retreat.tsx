import { ParallaxImage } from "@/components/motion/parallax-image";
import { Reveal } from "@/components/motion/reveal";
import { SplitHeading } from "@/components/motion/split-heading";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";

import poolLeft from "@/assets/images/pool/left.webp";
import poolRight from "@/assets/images/pool/right.webp";
import { asset } from "@/lib/asset";

export function Retreat() {
  return (
    <section
      id="gallery"
      className="relative isolate overflow-hidden pt-12 pb-12 sm:pt-16 xl:pt-[calc(130*var(--u))] xl:pb-[calc(40*var(--u))]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG */}
        <img
          src={asset("/images/pool/blob.svg")}
          alt=""
          className="absolute top-[48.8%] left-[78%] hidden max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-[89.86deg] xl:block xl:h-[calc(1505*var(--u))] xl:w-[calc(1661*var(--u))]"
        />
      </div>

      <Container>
        <SplitHeading
          as="h2"
          inView
          className="mx-auto text-center text-h2 xl:max-w-[78%]"
          segments={[
            {
              text: "Sed aliquam amet suspendisse dolor diam lorem consequat vel.",
              className: "text-forest",
            },
            {
              text: "Rutrum nunc et tempus consequat eget quam risus proin.",
              className: "text-olive",
            },
          ]}
        />
      </Container>

      <div className="relative mt-10 xl:mt-[calc(200*var(--u))] xl:h-[calc(873*var(--u))]">
        <Reveal className="relative z-10 mx-auto flex max-w-[655px] flex-col items-center px-5 text-center xl:max-w-[calc(655*var(--u))] xl:px-0">
          <h3 className="text-h2 text-forest">Consequat nulla mi odio mattis</h3>
          <p className="mt-6 max-w-[485px] text-lead xl:mt-[calc(36*var(--u))] xl:max-w-[calc(485*var(--u))]">
            Massa cursus nulla sit nisl mattis laoreet quam bibendum amet. Tempor viverra
            amet ut lacinia arcu mi maecenas.
          </p>
          <ArrowLink
            href="#rooms"
            tone="forest"
            className="mt-8 xl:mt-[calc(70*var(--u))]"
          >
            Explore Rooms
          </ArrowLink>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 px-5 sm:px-10 xl:contents">
          <ParallaxImage
            src={poolLeft}
            alt="Woman standing in an infinity pool facing the sea"
            placeholder="blur"
            travel={6}
            sizes="(min-width: 1280px) 523px, 50vw"
            className="aspect-[523/873] rounded-[24px] xl:absolute xl:top-0 xl:left-[calc(-52*var(--u))] xl:h-full xl:w-[calc(523*var(--u))] xl:rounded-[calc(40*var(--u))]"
          />
          <ParallaxImage
            src={poolRight}
            alt="Aerial view of the resort pool surrounded by palm trees"
            placeholder="blur"
            travel={6}
            sizes="(min-width: 1280px) 523px, 50vw"
            className="aspect-[523/873] rounded-[24px] xl:absolute xl:top-0 xl:right-[calc(-48*var(--u))] xl:h-full xl:w-[calc(523*var(--u))] xl:rounded-[calc(40*var(--u))]"
          />
        </div>
      </div>
    </section>
  );
}
