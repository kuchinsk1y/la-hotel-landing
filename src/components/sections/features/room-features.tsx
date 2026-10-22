import { Container } from "@/components/ui/container";
import { roomFeatures } from "@/data/features";

import { RoomFeature } from "./room-feature";
import { asset } from "@/lib/asset";

export function RoomFeatures() {
  return (
    <section
      id="suites"
      className="relative isolate overflow-hidden pt-12 pb-12 sm:pt-16 xl:pt-[calc(150*var(--u))] xl:pb-[calc(120*var(--u))]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG */}
        <img
          src={asset("/images/features/blob.svg")}
          alt=""
          className="absolute top-[23.8%] left-[67.1%] hidden max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[163.21deg] xl:block xl:h-[calc(1319*var(--u))] xl:w-[calc(1125*var(--u))]"
        />
      </div>

      <Container className="flex flex-col gap-12 xl:gap-[calc(200*var(--u))]">
        {roomFeatures.map((feature, i) => (
          <RoomFeature key={feature.title} {...feature} reverse={i % 2 === 1} />
        ))}
      </Container>
    </section>
  );
}
