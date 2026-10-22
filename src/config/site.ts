export const siteConfig = {
  name: "La Valleri Hotel",
  description: "La Valleri Hotel — комфортный отдых в самом сердце города.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "ru_RU",
} as const;
