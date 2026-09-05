import Image from "next/image";
import { Film, Wrench, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { icon: Film, label: "Documentary Films", value: "2+" },
  { icon: Wrench, label: "Builders Featured", value: "40+" },
  { icon: Users, label: "Riders On The Road", value: "1000s" },
];

export default function AboutFilms() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 grid gap-16 lg:grid-cols-2 items-center">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="We Make"
            highlight="Motorcycle Films"
            description="iTEN.TV goes beyond the garage — capturing the builders, the culture, and the road stories behind America's wildest bagger scene. Raw, honest, cinematic storytelling for real riders."
          />

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col gap-2">
                <Icon className="text-orange-bright" size={22} />
                <span className="font-display text-2xl font-semibold text-text">
                  {value}
                </span>
                <span className="text-xs text-text-muted uppercase tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-sm overflow-hidden border border-border">
          <Image
            src="/about.png"
            alt="Motorcycle builder working in a custom garage"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
