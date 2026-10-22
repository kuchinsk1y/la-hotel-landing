import type { StaticImageData } from "next/image";

import classicMain from "@/assets/images/features/classic-main.webp";
import classicSmall from "@/assets/images/features/classic-small.webp";
import classicTop from "@/assets/images/features/classic-top.webp";
import superiorMain from "@/assets/images/features/superior-main.webp";
import superiorSmall from "@/assets/images/features/superior-small.webp";
import superiorTop from "@/assets/images/features/superior-top.webp";

export type RoomFeatureData = {
  title: string;
  tags: string[];
  description: string;
  images: {
    top: { src: StaticImageData; alt: string };
    main: { src: StaticImageData; alt: string };
    small: { src: StaticImageData; alt: string };
  };
};

const description =
  "Massa cursus nulla sit nisl mattis laoreet quam bibendum amet. Tempor viverra amet ut lacinia arcu mi maecenas. Et aenean cum varius integer id. Massa cursus nulla sit nisl mattis laoreet quam bibendum amet. Tempor viverra amet ut lacinia arcu mi maecenas.";

export const roomFeatures: RoomFeatureData[] = [
  {
    title: "Classic Room",
    tags: ["Balcony", "Park View", "Sea View"],
    description,
    images: {
      top: {
        src: classicTop,
        alt: "Warm-lit suite with a dark wood bed and garden view",
      },
      main: {
        src: classicMain,
        alt: "Bright bedroom with tall windows and sheer curtains",
      },
      small: { src: classicSmall, alt: "Round lounge with sea-facing windows" },
    },
  },
  {
    title: "Superior Room",
    tags: ["Balcony", "Sea View"],
    description,
    images: {
      top: { src: superiorTop, alt: "Open-air lounge under a thatched roof" },
      main: { src: superiorMain, alt: "Thatched villa with a private plunge pool" },
      small: { src: superiorSmall, alt: "Whitewashed terrace above the sea" },
    },
  },
];
