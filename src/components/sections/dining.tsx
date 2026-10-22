import { ParallaxImage } from "@/components/motion/parallax-image";
import { Reveal } from "@/components/motion/reveal";
import { SplitHeading } from "@/components/motion/split-heading";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { diningItems } from "@/data/dining";
import { asset } from "@/lib/asset";

export function Dining() {
  return (
    <section
      id="dining"
      className="relative isolate mt-6 overflow-hidden pt-16 pb-16 text-white sm:pt-20 xl:mt-[calc(90*var(--u))] xl:pt-[calc(270*var(--u))] xl:pb-[calc(280*var(--u))]"
    >
      {/* Wavy olive backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* eslint-disable @next/next/no-img-element -- decorative SVGs */}
        <img
          src={asset("/images/dining/blob.svg")}
          alt=""
          className="absolute top-0 left-[-25.78%] h-full w-[162.8%] max-w-none"
        />
        <img
          src={asset("/images/dining/bg.svg")}
          alt=""
          className="absolute inset-x-0 top-[1.15%] bottom-[2.51%] h-[96.34%] w-full max-w-none"
        />
        {/* eslint-enable @next/next/no-img-element */}
      </div>

      <Container>
        <SplitHeading
          as="h2"
          inView
          className="mx-auto text-center text-h2 text-sand xl:max-w-[78%]"
          segments={[
            {
              text: "Massa ornare lectus sollicitudin mi gravida. Purus bibendum ante nunc euismod fringilla lectus pulvinar",
            },
          ]}
        />

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-[597px] text-center text-body xl:mt-[calc(40*var(--u))] xl:max-w-[calc(597*var(--u))]">
            Massa cursus nulla sit nisl mattis laoreet quam bibendum amet. Tempor viverra
            amet ut lacinia arcu mi maecenas. Et aenean cum varius integer id condimentum.
            Fames quis eget vel pharetra sit a sagittis senectus felis. Enim egestas
            integer suspendisse ullamcorper facilisis magnis.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-10 xl:mt-[calc(160*var(--u))] xl:gap-0">
          {diningItems.map((item) => (
            <article key={item.title} className={`xl:w-[36.5%] ${item.className}`}>
              <ParallaxImage
                src={item.image}
                alt={item.alt}
                placeholder="blur"
                travel={7}
                sizes="(min-width: 1280px) 624px, 100vw"
                className="aspect-[624/362] rounded-[28px] xl:rounded-[calc(48.6*var(--u))]"
              />
              <Reveal delay={0.1}>
                <h3 className="mt-6 text-h3 text-sand xl:mt-[calc(53*var(--u))]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[518px] text-body xl:mt-[calc(17*var(--u))] xl:max-w-[83%]">
                  {item.description}
                </p>
              </Reveal>
            </article>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center xl:mt-[calc(160*var(--u))]">
          <ArrowLink href="#dining" tone="sand">
            Dining Location
          </ArrowLink>
        </Reveal>
      </Container>
    </section>
  );
}
