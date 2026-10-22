import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Cta } from "@/components/sections/cta";
import { Dining } from "@/components/sections/dining";
import { Discover } from "@/components/sections/discover";
import { RoomFeatures } from "@/components/sections/features/room-features";
import { Hero } from "@/components/sections/hero";
import { Retreat } from "@/components/sections/retreat";
import { Rooms } from "@/components/sections/rooms/rooms";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Rooms />
        <Dining />
        <Retreat />
        <RoomFeatures />
        <Discover />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
