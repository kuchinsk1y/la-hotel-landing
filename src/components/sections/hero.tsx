import { ParallaxImage } from "@/components/motion/parallax-image";
import { Reveal } from "@/components/motion/reveal";
import { SplitHeading } from "@/components/motion/split-heading";
import { Container } from "@/components/ui/container";
import { maskImage } from "@/lib/asset";

import heroImage from "@/assets/images/hero.webp";

import { HeroBackdrop } from "./hero-backdrop";

export function Hero() {
  return (
    <section
      style={maskImage("/images/hero/bg-1.svg")}
      className="relative isolate overflow-hidden bg-navy [mask-size:100%_100%] [mask-repeat:no-repeat] text-white"
    >
      <HeroBackdrop />

      <Container className="pt-32 pb-16 sm:pt-44 sm:pb-20 xl:pt-[calc(300*var(--u))] xl:pb-[calc(230*var(--u))]">
        <SplitHeading
          className="mx-auto text-center text-h2 xl:max-w-[78%]"
          segments={[
            { text: "Enim egestas integer suspendisse ullamcorper facilisis magnis." },
            {
              text: "Nisl mauris vel sit id diam. Est mattis vulputate sit nunc nibh .",
              className: "text-sand",
            },
          ]}
        />

        <ParallaxImage
          src={heroImage}
          alt="Rocky island with a sandy beach and turquoise lagoon"
          placeholder="blur"
          sizes="(min-width: 1920px) 1711px, 90vw"
          className="mt-12 aspect-[1711/745] rounded-[20px] sm:mt-20 xl:mt-[calc(120*var(--u))] xl:rounded-[30px]"
        />

        <div className="mt-12 flex flex-col gap-8 sm:mt-20 xl:mt-[calc(130*var(--u))] xl:ml-[48.7%] xl:max-w-[calc(836*var(--u))] xl:gap-[calc(64*var(--u))]">
          <Reveal>
            <p className="text-lead">
              Massa cursus nulla sit nisl mattis laoreet quam bibendum amet. Tempor
              viverra amet ut lacinia arcu mi maecenas. Et aenean cum varius integer id
              condimentum. Fames quis eget vel pharetra sit a sagittis senectus felis.
              Enim egestas integer suspendisse ullamcorper facilisis magnis.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-5 text-body xl:max-w-[calc(565*var(--u))]">
              <p>
                Massa cursus nulla sit nisl mattis laoreet quam bibendum amet. Tempor
                viverra amet ut lacinia arcu mi maecenas. Et aenean cum varius integer id
                condimentum. Fames quis eget vel pharetra sit a sagittis senectus felis.
                Enim egestas integer suspendisse ullamcorper facilisis magnis.
              </p>
              <p>
                Nisl mauris vel sit id diam. Est mattis vulputate tincidunt cras quam
                consequat mi mi. Interdum volutpat pellentesque consequat sed eros est.
                Imperdiet congue et felis elit eu egestas nunc bibendum.
              </p>
              <p>
                Consequat nulla mi odio mattis vulputate nulla. Dui ultrices viverra sit
                congue volutpat arcu sit eget aliquam. Id nec nunc sagittis tellus
                fringilla elit. Sed aliquam amet suspendisse dolor diam lorem consequat
                vel. Rutrum nunc et tempus consequat eget quam risus proin. Arcu tortor
                augue integer tempus facilisis.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
