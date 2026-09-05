import { PlayCircle, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-bg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-bagger.png)" }}
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-bagger.png"
        className="absolute inset-0 block h-full w-full object-cover object-center"
        style={{ objectFit: "cover", objectPosition: "center" }}
      >
        <source src="/bagtagfilms.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/30 to-bg/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.6)_100%)]" />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 sm:px-8 flex flex-col justify-center">
        <p className="animate-fade-up mb-4 font-display uppercase tracking-[0.4em] text-sm text-orange-bright">
          A Documentary Film Series
        </p>

        <h1
          className="animate-fade-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-[0.95] text-text"
          style={{ animationDelay: "0.1s" }}
        >
          America&apos;s <br />
          Wildest <span className="text-gradient-orange">Baggers</span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-xl text-lg text-text-muted leading-relaxed"
          style={{ animationDelay: "0.2s" }}
        >
          We make motorcycle films — chasing the builders, riders and legends
          who define bagger culture across America.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-5"
          style={{ animationDelay: "0.3s" }}
        >
          <Button href="/blog" variant="primary" icon={<PlayCircle size={18} />}>
            Watch The Story
          </Button>
          <Button href="/contact" variant="outline">
            Get In Touch
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex justify-center z-10">
        <ChevronDown className="text-chrome-2 animate-bounce" size={28} />
      </div>
    </section>
  );
}
