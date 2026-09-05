import Image from "next/image";

export default function BaggedTagged2Section() {
  return (
    <section className="py-24 sm:py-32 bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 grid gap-12 lg:grid-cols-2 items-start">
        <div className="flex flex-col items-center lg:items-start gap-8 lg:sticky lg:top-28">
          <div className="relative w-full max-w-sm aspect-[3/4]">
            <Image
              src="/2ndimg3.png"
              alt="Bagged & Tagged 2: Ten Years On — Blu-ray cover"
              fill
              sizes="(max-width: 1024px) 80vw, 30vw"
              className="object-contain"
            />
          </div>
          <div className="bg-white rounded-md p-5 shadow-lg">
            <Image
              src="/logo2.png"
              alt="Bagged & Tagged 2: Ten Years On logo"
              width={320}
              height={320}
              className="h-32 sm:h-36 w-auto object-contain"
            />
          </div>
        </div>

        <div>
          <p className="font-display uppercase tracking-[0.3em] text-sm text-orange-bright mb-3">
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

            <h3 className="pt-4 font-display uppercase tracking-widest text-text text-lg">
              No Fluff
            </h3>
            <p>
              This isn&apos;t some suit&apos;s idea of a &ldquo;biker
              film.&rdquo; It&apos;s created by true industry pros — people
              who live and breathe custom motorcycles. No fake drama. No
              reality TV nonsense. Just the real love, grit, frustration, and
              thrill of owning a custom bagger. No endless slow-mo welding
              montages. No staged shouting matches. Just raw passion and real
              stories from the heart of the scene.
            </p>

            <h3 className="pt-4 font-display uppercase tracking-widest text-text text-lg">
              Just As Loud As The First Film
            </h3>
            <p>
              The soundtrack on the first Bagged &amp; Tagged film caught
              people off guard. It&apos;s not your typical
              Skynyrd-and-leather-cliché music — it hits harder than a crack
              in the nuts. It&apos;s dark, gritty, and untamed. It made riders
              feel like kings of the road, not just fans of the film. This
              time, we&apos;re going even louder than before. No bubblegum
              pop. No softcore hip-hop. We&apos;re talking heavy-hitting
              outlaw country, industrial rock, and southern grit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
