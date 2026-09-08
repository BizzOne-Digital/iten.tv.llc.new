import Image from "next/image";

export default function BaggedTagged2Section() {
  return (
    <section className="py-24 sm:py-32 bg-[#171717]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <p className="font-display italic font-bold text-sm text-orange-bright mb-4 text-center">
            Get Ready For The Ride Of A Lifetime
          </p>

          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              From the masterminds behind Inspire and Bagged &amp; Tagged I —
              Executive Producers John D and Brian Bostwick (Majestic: The
              Nick Trask Story) with Joe Duenser — comes the highly
              anticipated sequel that takes custom bagger culture to a whole
              new level: Bagged &amp; Tagged II - 10 Years On.
            </p>
            <p>
              This film doesn&apos;t just showcase bikes. It&apos;s a
              high-octane journey through the evolution of custom baggers,
              featuring some of the most jaw-dropping, insane Harley Davidson
              builds ever created. But this isn&apos;t just about chrome and
              paint jobs. It&apos;s an inside look at the builders who pushed
              the limits, the legends who fell off the radar, and the new
              wave of custom bike creators taking the industry by storm.
            </p>
            <p>
              Forget the shallow clichés of bikes, boobs, and beers — this is
              for the true performance-driven enthusiasts. Those who crave
              class, power, and a ride that commands attention with every
              rumbling rev.
            </p>
            <p>
              Loud. Proud. Relentless. If you want a ride that doesn&apos;t
              just turn heads but owns the road, then this is your movie.
              Welcome to the next chapter of custom bagger history.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/bagtag/assets/img/bagtag2_cover.png"
            alt="Bagged & Tagged 2: Ten Years On cover"
            width={680}
            height={896}
            className="w-[70%] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
