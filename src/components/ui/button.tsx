import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonProps = Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: string;
  variant?: "solid" | "outline";
};

const variants = {
  solid: "bg-white text-ink border-white hover:bg-sand hover:border-sand",
  outline: "border-white text-white hover:bg-white hover:text-ink",
} as const;

export function Button({ variant = "solid", className, ...props }: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-4 py-2.5 text-sm leading-6 font-semibold whitespace-nowrap transition-[color,background-color,border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 active:translate-y-0 active:scale-[0.97] sm:px-5 sm:py-3 sm:text-base",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
