import type { StaticImageData } from "next/image";

import poolBar from "@/assets/images/dining/pool-bar.webp";
import restaurant from "@/assets/images/dining/restaurant.webp";
import terrace from "@/assets/images/dining/terrace.webp";

export type DiningItem = {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
  /** Desktop placement on the staggered layout. */
  className: string;
};

const description =
  "Massa cursus nulla sit nisl mattis laoreet quam bibendum amet. Tempor viverra amet ut lacinia arcu mi maecenas. Et aenean cum varius integer id condimentum. Fames quis eget vel pharetra sit a sagittis senectus felis. Enim egestas integer.";

export const diningItems: DiningItem[] = [
  {
    title: "Massa ornare lectus",
    description,
    image: restaurant,
    alt: "Waiter setting tables in the hotel restaurant",
    className: "",
  },
  {
    title: "Enim et quis leo lacinia",
    description,
    image: poolBar,
    alt: "White sun loungers by the pool under palm leaves",
    className: "xl:ml-[58.6%] xl:-mt-[calc(405*var(--u))]",
  },
  {
    title: "Arcu amet nunc tempus",
    description,
    image: terrace,
    alt: "Whitewashed terrace overlooking the sea",
    className: "xl:ml-[11.8%] xl:mt-[calc(69*var(--u))]",
  },
];
