import type { StaticImageData } from "next/image";

import balcony from "@/assets/images/rooms/balcony.webp";
import breakfast from "@/assets/images/rooms/breakfast.webp";
import gallery1 from "@/assets/images/rooms/gallery-1.webp";
import gallery2 from "@/assets/images/rooms/gallery-2.webp";
import pool from "@/assets/images/rooms/pool.webp";
import superior from "@/assets/images/rooms/superior.webp";

export type Room = {
  title: string;
  description: string;
  image: StaticImageData;
};

const description =
  "Massa cursus nulla sit nisl mattis laoreet quam bibendum amet. Tempor viverra amet ut lacinia arcu mi maecenas. Et aenean cum varius integer id.";

export const rooms: Room[] = [
  { title: "Classic Room", description, image: pool },
  { title: "Superior Room", description, image: superior },
  { title: "Deluxe Room", description, image: balcony },
  { title: "Family Room", description, image: breakfast },
  { title: "Executive Suite", description, image: gallery2 },
];

export const introImages = { breakfast, balcony, pool };

export const gallerySlides: { image: StaticImageData; alt: string }[] = [
  { image: gallery1, alt: "Sun loungers on a wooden pool deck at sunset" },
  { image: gallery2, alt: "Cosy wooden terrace with armchairs" },
  { image: balcony, alt: "Mountain-view balcony with a bed and lounge chairs" },
];
