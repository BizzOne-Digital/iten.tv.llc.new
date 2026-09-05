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
  { name: "Curtis Hofmann", role: "Hofmann Designs" },
  { name: "Paul Yaffe", role: "Paul Yaffe Originals" },
  { name: "Satya Kraus", role: "Kraus Motor Co." },
  { name: "The Bad Azz Baggerz", role: "Crew" },
  { name: "Coby Klein", role: "Speed by Design" },
  { name: "James Bonner", role: "JBA Custom Cycles" },
  { name: "Nick Trask", role: "Trask Performance" },
  { name: "Justin B. Umbs", role: "Superstition HD, AZ" },
  { name: "Kyle Collings", role: "Coonyz Customs Choppers" },
];

const behindTheScenes = [
  { name: "Filming at Bad Azz Baggers" },
  { name: "Hangin' with Coonyz Custom Choppers", role: "On location, part one" },
  { name: "Hangin' with Coonyz Custom Choppers", role: "On location, part two" },
  { name: "Talkin' Bikes at Inland Empire" },
  { name: "Speed by Design", role: "One of our favs" },
  { name: "The Original & #1 Built Bike", role: "By SBD" },
  { name: "Clean, Classy and Stylish", role: "...with a bit of get up & go" },
  { name: "What Kind Of Frankenstein Concept", role: "Have we here?" },
  { name: "“What Film Crew?”", role: "...I'm busy working" },
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
      <VideoTrailer label="Bagged & Tagged — Trailer Coming Soon" />

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
      <VideoTrailer label="Bagged & Tagged 2 — Trailer Coming Soon" />
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
