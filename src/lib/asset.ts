import type { CSSProperties } from "react";

/** Set at build time when the site is served from a sub-path (e.g. GitHub Pages). */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a path from `public/` with the base path. */
export const asset = (path: string) => `${basePath}${path}`;

/** Inline `mask-image` for an SVG silhouette from `public/`. */
export const maskImage = (path: string): CSSProperties => ({
  maskImage: `url(${asset(path)})`,
  WebkitMaskImage: `url(${asset(path)})`,
});
