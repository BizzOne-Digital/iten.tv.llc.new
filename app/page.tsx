import Hero from "@/sections/home/Hero";
import AboutFilms from "@/sections/home/AboutFilms";
import FeaturedFilms from "@/sections/home/FeaturedFilms";
import OwnTheShow from "@/sections/home/OwnTheShow";
import LikeWhatYouSee from "@/sections/home/LikeWhatYouSee";
import NewsPreview from "@/sections/home/NewsPreview";
import CTASection from "@/sections/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedFilms />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="section-divider" />
      </div>
      <AboutFilms />
      <OwnTheShow />
      <LikeWhatYouSee />
      <NewsPreview />
      <CTASection />
    </>
  );
}
