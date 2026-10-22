import { ParallaxImage } from "@/components/motion/parallax-image";
import { Reveal } from "@/components/motion/reveal";
import type { RoomFeatureData } from "@/data/features";
import { cn } from "@/lib/cn";

type RoomFeatureProps = RoomFeatureData & {
  /** Puts the photo cluster on the left and the text on the right. */
  reverse?: boolean;
};

const frame = "absolute rounded-card";

export function RoomFeature({
  title,
  tags,
  description,
  images,
  reverse = false,
}: RoomFeatureProps) {
  return (
    <article
      className={cn(
        "grid items-start gap-8 xl:gap-0",
        reverse ? "xl:grid-cols-[56.4%_1fr]" : "xl:grid-cols-[43.6%_1fr]",
      )}
    >
      <Reveal
        className={cn(
          reverse
            ? "xl:order-2 xl:pt-[calc(56*var(--u))] xl:pl-[calc(276*var(--u))]"
            : "xl:pt-[calc(116*var(--u))]",
        )}
      >
        <ul className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-navy/20 px-5 py-1.5 text-body text-navy"
            >
              {tag}
            </li>
          ))}
        </ul>
        <h3 className="mt-5 text-h4 text-night">{title}</h3>
        <p className="mt-3 max-w-[500px] text-body xl:max-w-[calc(500*var(--u))]">
          {description}
        </p>
      </Reveal>

      <div className={cn("relative aspect-[964/822] w-full", reverse && "xl:order-1")}>
        <ParallaxImage
          src={images.top.src}
          alt={images.top.alt}
          placeholder="blur"
          travel={6}
          sizes="(min-width: 1280px) 330px, 50vw"
          className={cn(
            frame,
            "top-0 aspect-[501/340] w-[52%]",
            reverse ? "left-[12.9%]" : "left-[48%]",
          )}
        />
        <ParallaxImage
          src={images.main.src}
          alt={images.main.alt}
          placeholder="blur"
          travel={6}
          sizes="(min-width: 1280px) 440px, 70vw"
          className={cn(
            frame,
            "top-[45.3%] aspect-[665/450] w-[69%]",
            reverse ? "left-[31%]" : "left-0",
          )}
        />
        <ParallaxImage
          src={images.small.src}
          alt={images.small.alt}
          placeholder="blur"
          travel={6}
          sizes="(min-width: 1280px) 180px, 30vw"
          className={cn(
            frame,
            "top-[44.9%] aspect-square w-[27.8%]",
            reverse ? "left-0" : "left-[72.2%]",
          )}
        />
      </div>
    </article>
  );
}
