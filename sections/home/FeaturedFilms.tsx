import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const films = [
  {
    title: "Bagged & Tagged",
    logo: "/logo1.png",
    tagline: "America's Wildest Baggers",
    description:
      "The original film that started it all — an inside look at the builders and riders pushing bagger culture to the edge.",
    image: "/img1.png",
    accent: "chrome",
  },
  {
    title: "Bagged & Tagged 2",
    logo: "/logo2.png",
    tagline: "Ten Years In",
    description:
      "A decade later — revisiting the legends, the builds, and the culture that never slowed down.",
    image: "/img2.png",
    accent: "orange",
  },
];

export default function FeaturedFilms() {
  return (
    <section className="py-24 sm:py-32 bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-display font-semibold uppercase text-text">
          <span className="text-[#2F6FED]">The</span>{" "}
          <span className="text-gradient-orange">Films</span>
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {films.map((film) => (
            <div
              key={film.title}
              className="group relative overflow-hidden rounded-sm border border-border bg-bg-card"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={film.image}
                  alt={`${film.title} film still`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
              </div>

              <div className="p-8">
                <p
                  className={`text-xs font-display uppercase tracking-[0.3em] ${
                    film.accent === "orange" ? "text-orange-bright" : "text-chrome-2"
                  }`}
                >
                  {film.tagline}
                </p>

                <h3 className="sr-only">{film.title}</h3>
                <div className="mt-3 inline-flex bg-white rounded-md p-4 shadow-lg">
                  <Image
                    src={film.logo}
                    alt={`${film.title} logo`}
                    width={220}
                    height={220}
                    className="h-24 sm:h-28 w-auto object-contain"
                  />
                </div>

                <p className="mt-4 text-sm text-text-muted leading-relaxed">
                  {film.description}
                </p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm font-display uppercase tracking-widest text-text hover:text-orange-bright transition-colors">
                  Watch Trailer <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
