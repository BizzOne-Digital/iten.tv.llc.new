import Hero from "@/sections/home/Hero";
import AboutFilms from "@/sections/home/AboutFilms";
import FeaturedFilms from "@/sections/home/FeaturedFilms";
import BaggedTaggedSection from "@/sections/home/BaggedTaggedSection";
import PeopleGrid from "@/sections/home/PeopleGrid";
import VideoTrailer from "@/sections/home/VideoTrailer";
import BaggedTagged2Section from "@/sections/home/BaggedTagged2Section";
import GalleryCTA from "@/sections/home/GalleryCTA";
import OwnTheShow from "@/sections/home/OwnTheShow";
import LikeWhatYouSee from "@/sections/home/LikeWhatYouSee";
import NewsPreview from "@/sections/home/NewsPreview";
import CTASection from "@/sections/home/CTASection";

const filmOneCredits = [
  { name: "Dirty Bird Concepts", image: "/new/portfolio_pic1.jpg" },
  { name: "Sinthium Custom Paint", image: "/new/portfolio_pic2.jpg" },
  { name: "Trask Performance", image: "/new/portfolio_pic4.jpg" },
  { name: "Jim Nasi Customs", image: "/new/portfolio_pic3.jpg" },
  { name: "Kaotic Designs", image: "/new/portfolio_pic5.jpg" },
  { name: "Jeff Goldsbury", role: "Original Builders", image: "/new/portfolio_pic6.jpg" },
  { name: "Vegas Croc", role: "Custom Manufacturers", image: "/new/portfolio_pic7.jpg" },
  { name: "Josh Rundled", role: "Riverside Harley Davidson", image: "/new/portfolio_pic8.jpg" },
  { name: "Picture Gallery", role: "Want to see some cool bikes?", image: "/new/gallery.jpg" },
];

const filmTwoGuests = [
  { name: "Curtis Hofmann", role: "Hofmann Designs", image: "/new/starring_001.jpg" },
  { name: "Paul Yaffe", role: "Paul Yaffe Originals", image: "/new/starring_002.jpg" },
  { name: "Satya Kraus", role: "Kraus Motor Co.", image: "/new/starring_003.jpg" },
  { name: "The Bad Azz Baggerz", role: "Crew", image: "/new/starring_004.jpg" },
  { name: "Coby Klein", role: "Speed by Design", image: "/new/starring_005.jpg" },
  { name: "James Bonner", role: "JBA Custom Cycles", image: "/new/starring_006.jpg" },
  { name: "Nick Trask", role: "Trask Performance", image: "/new/starring_007.jpg" },
  { name: "Justin B. Umbs", role: "Superstition HD, AZ", image: "/new/starring_008.jpg" },
  { name: "Kyle Collings", role: "Coonyz Customs Choppers", image: "/new/starring_009.jpg" },
];

const behindTheScenes = [
  { name: "Filming at Bad Azz Baggers", image: "/new/bts_001.jpg" },
  { name: "Hangin' with Coonyz Custom Choppers", role: "On location, part one", image: "/new/bts_002.jpg" },
  { name: "Hangin' with Coonyz Custom Choppers", role: "On location, part two", image: "/new/bts_003.jpg" },
  { name: "Talkin' Bikes at Inland Empire", image: "/new/bts_004.jpg" },
  { name: "Speed by Design", role: "One of our favs", image: "/new/bts_005.jpg" },
  { name: "The Original & #1 Built Bike", role: "By SBD", image: "/new/bts_006.jpg" },
  { name: "Clean, Classy and Stylish", role: "...with a bit of get up & go", image: "/new/bts_007.jpg" },
  { name: "What Kind Of Frankenstein Concept", role: "Have we here?", image: "/new/bts_008.jpg" },
  { name: "“What Film Crew?”", role: "...I'm busy working", image: "/new/bts_009.jpg" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedFilms />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="section-divider" />
      </div>

      <BaggedTaggedSection />
      <PeopleGrid
        eyebrow="Special Thanks"
        title="What We've Got"
        highlight="For You"
        subtitle="Some of the talent we feature in this film."
        people={filmOneCredits}
        tone="elevated"
      />
      <VideoTrailer label="Bagged & Tagged — Trailer" youtubeId="IDKmXgFFJZU" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="section-divider" />
      </div>

      <AboutFilms />
      <BaggedTagged2Section />
      <PeopleGrid
        eyebrow="Ten Years On"
        title="Some Of Our"
        highlight="Guests"
        subtitle="This isn't just about the big wigs — we've got a little of everyone."
        people={filmTwoGuests}
        tone="graphite"
      />
      <VideoTrailer label="Bagged & Tagged 2 — Trailer" youtubeId="zPnd7pb63KU" />
      <PeopleGrid
        eyebrow="On Set"
        title="Behind The"
        highlight="Scenes"
        subtitle="It may look like fun, but it's still hard work."
        people={behindTheScenes}
        tone="graphite"
      />
      <div className="bg-bg-card pb-20 sm:pb-28">
        <GalleryCTA label="Behind The Scenes Gallery" />
      </div>

      <OwnTheShow />
      <LikeWhatYouSee />
      <NewsPreview />
      <CTASection />
    </>
  );
}
