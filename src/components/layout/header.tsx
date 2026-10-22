import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

import { MenuButton } from "./menu-button";
import { asset } from "@/lib/asset";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 pt-4 sm:pt-8 xl:pt-[calc(48*var(--u))]">
      <Reveal
        immediate
        y={-24}
        delay={0.2}
        duration={1.2}
        className="mx-auto grid w-full max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 sm:px-10 xl:px-[calc(106*var(--u))]"
      >
        <div>
          <MenuButton />
        </div>

        <Link href="/" aria-label={siteConfig.name}>
          <Image
            src={asset("/images/logo.svg")}
            alt={siteConfig.name}
            width={258}
            height={93}
            priority
            className="h-auto w-[108px] sm:w-[190px] xl:w-[calc(258*var(--u))]"
          />
        </Link>

        <div className="flex items-center justify-end gap-3 xl:gap-4">
          <Button href="#check-in" variant="outline" className="hidden lg:inline-flex">
            Online Check-in
          </Button>
          <Button href="#booking">Book Now</Button>
        </div>
      </Reveal>
    </header>
  );
}
