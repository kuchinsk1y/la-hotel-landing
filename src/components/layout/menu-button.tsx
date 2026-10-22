"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navLinks } from "@/config/navigation";
import { cn } from "@/lib/cn";
import { setScrollLocked } from "@/lib/lenis";

export function MenuButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    setScrollLocked(true);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      setScrollLocked(false);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((v) => !v)}
        className="relative z-50 -m-2 flex w-[calc(2.5rem+1rem)] flex-col gap-[7px] p-2 sm:w-[calc(3.875rem+1rem)] sm:gap-[13px]"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn(
              "block h-0.5 w-full bg-white transition-all duration-300",
              open && i === 0 && "translate-y-[9px] rotate-45 sm:translate-y-[15px]",
              open && i === 1 && "opacity-0",
              open && i === 2 && "-translate-y-[9px] -rotate-45 sm:-translate-y-[15px]",
            )}
          />
        ))}
      </button>

      <nav
        id="site-menu"
        aria-label="Main"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 flex items-center justify-center bg-navy transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <ul className="flex flex-col items-center gap-6 font-display text-4xl text-white sm:text-6xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-sand"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button
          href="#check-in"
          variant="outline"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className="absolute inset-x-5 bottom-10 sm:inset-x-auto lg:hidden"
        >
          Online Check-in
        </Button>
      </nav>
    </>
  );
}
