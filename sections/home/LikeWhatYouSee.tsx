import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const gallery = [
  "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
  "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=800&q=80",
  "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?w=800&q=80",
  "https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=800&q=80",
];

export default function LikeWhatYouSee() {
  return (
    <section className="py-24 sm:py-32 bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="font-display uppercase tracking-[0.3em] text-sm text-orange-bright">
              Behind The Lens
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-display font-semibold uppercase text-text">
              Like What <span className="text-gradient-orange">You See?</span>
            </h2>
          </div>
          <Button href="/blog" variant="outline" icon={<ArrowRight size={16} />}>
            See More Stories
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-sm border border-border group ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={src}
                alt="Bagger motorcycle culture still"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
