import Link from "next/link";

import { cn } from "@/lib/cn";

import { ArrowIcon } from "./arrow-icon";

const tones = {
  navy: { text: "text-navy", pill: "bg-navy text-white" },
  forest: { text: "text-forest", pill: "bg-forest text-white" },
  sand: { text: "text-sand", pill: "bg-sand text-forest-deep" },
  white: { text: "text-white", pill: "bg-white text-navy" },
  whiteForest: { text: "text-white", pill: "bg-white text-forest" },
} as const;

type ArrowLinkProps = Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: string;
  tone?: keyof typeof tones;
};

/** Text link followed by a pill with an arrow that nudges forward on hover. */
export function ArrowLink({
  tone = "navy",
  className,
  children,
  ...props
}: ArrowLinkProps) {
  const t = tones[tone];
  return (
    <Link
      className={cn(
        "group inline-flex items-center gap-5 font-semibold sm:gap-[30px]",
        "text-[clamp(1.375rem,calc(34*var(--u)),2.125rem)]",
        t.text,
        className,
      )}
      {...props}
    >
      <span className="relative">
        {children}
        <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-current transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </span>
      <span
        className={cn(
          "flex h-11 w-[72px] items-center justify-center rounded-full transition-[width,transform] duration-500 ease-out group-hover:w-[84px]",
          t.pill,
        )}
      >
        <ArrowIcon className="transition-transform duration-500 ease-out group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
