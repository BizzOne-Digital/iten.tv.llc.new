import Hero from "@/sections/home/Hero";
import FeaturedFilms from "@/sections/home/FeaturedFilms";
import BaggedTaggedSection from "@/sections/home/BaggedTaggedSection";
import VideoTrailer from "@/sections/home/VideoTrailer";
import SpecialGuestsSection from "@/sections/home/SpecialGuestsSection";
import BagtagTwoDivider from "@/sections/home/BagtagTwoDivider";
import BaggedTagged2Section from "@/sections/home/BaggedTagged2Section";
import WhosNewSection from "@/sections/home/WhosNewSection";
import BuyFilmSection from "@/sections/home/BuyFilmSection";
import ChopperVisionSection from "@/sections/home/ChopperVisionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedFilms />
      <BaggedTaggedSection />
      <VideoTrailer label="Bagged & Tagged — Trailer" youtubeId="IDKmXgFFJZU" />
      <SpecialGuestsSection />
      <BagtagTwoDivider />
      <BaggedTagged2Section />
      <VideoTrailer
        label="Bagged & Tagged 2 — Trailer"
        youtubeId="zPnd7pb63KU"
        outerBg="bg-[#171717]"
      />
      <WhosNewSection />
      <BuyFilmSection />
      <ChopperVisionSection />
    </>
  );
}
