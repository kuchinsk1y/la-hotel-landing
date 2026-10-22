import type Lenis from "lenis";

let instance: Lenis | null = null;

export const setLenis = (lenis: Lenis | null) => {
  instance = lenis;
};

/** Pause/resume smooth scrolling (e.g. while a full-screen menu is open). */
export const setScrollLocked = (locked: boolean) => {
  if (locked) instance?.stop();
  else instance?.start();
};
