import Image from "next/image";

const bikeImages = [
  "/bagtag/assets/img/chopper_001.jpg",
  "/bagtag/assets/img/chopper_002.jpg",
  "/bagtag/assets/img/chopper_003.jpg",
];

export default function ChopperVisionSection() {
  return (
    <section className="bg-[#df6ea3]">
      <div className="relative w-full aspect-[2000/325]">
        <Image
          src="/bagtag/assets/img/top_banner.png"
          alt="Chopper Vision"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/bagtag/assets/img/chopper_005.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
          <p className="text-center font-display italic font-bold text-lg text-white mb-12">
            From the studio that brought you the Bagged and Tagged Films -
            iTEN.TV
          </p>

          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div className="flex flex-col items-center gap-6">
              {bikeImages.map((src) => (
                <div
                  key={src}
                  className="relative w-4/5 aspect-[4/3] rounded-sm border-2 border-[#6f42c1] overflow-hidden"
                >
                  <Image
                    src={src}
                    alt="Chopper Vision custom build"
                    fill
                    sizes="(max-width: 1024px) 80vw, 40vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4 text-white/90 leading-relaxed">
              <p>
                There was a time when the chopper was king. Long forks
                stretched toward the horizon, hand-fabricated frames, paint
                jobs that took months to lay down - every bike a rolling
                piece of art, built by hands that bled for it. Then the scene
                shifted. Baggers rolled in with their stereo systems and their
                five minutes in the spotlight, and the chopper world did what
                it&apos;s always does best: it went quiet, went underground,
                and kept building.
              </p>
              <p>It never stopped. It just stopped asking for permission.</p>
              <p>
                Now it&apos;s back - louder, meaner, and more creative than
                ever. Garages from coast to coast are turning out machines
                that blur the line between motorcycle and sculpture. A new
                generation of builders has picked up the torch, and the old
                guard is still out there proving the game was never over. The
                chopper scene isn&apos;t having a comeback. It&apos;s having a
                reckoning.
              </p>
              <p className="font-display uppercase font-bold text-white">
                Chopper Vision is where you watch it happen.
              </p>
              <p>
                From the team behind the Bagged and Tagged series, iTEN.TV is
                going all-in on the culture that started it all. This isn&apos;t
                a nostalgia piece. This is a front-row seat to the builders,
                the shops, the rallies, and the rides that are dragging the
                chopper scene back into the light - captured the way only
                iTEN.TV knows how to shoot it: raw, real, and right up close.
              </p>
              <p>
                Every episode puts you in the shop at 2 AM when a deadline&apos;s
                looming and a frame still needs to be raked. It puts you on
                the back roads when a first ride either validates six months
                of work or sends someone back to the drawing board. It puts
                you at the shows where builders don&apos;t just show up - they
                throw down, bike to bike, ego to ego, for bragging rights that
                actually mean something in this world.
              </p>
              <p>
                We&apos;ve got the archive to back it up - thousands of photos
                and hours of footage that live and breathe this culture, and
                we&apos;re just getting started. Chopper Vision is built to
                run: season after season of builds, riders, rivalries, and the
                kind of two-wheeled insanity that made this scene legendary in
                the first place. Not setup make believe drama!
              </p>
              <p>
                The baggers had their moment. Now it&apos;s time to remember
                who built this culture from the frame up.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-4">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="relative aspect-video">
            <iframe
              src="https://www.youtube.com/embed/CZ0PdLDdG4k"
              title="Insane Custom Choppers You Need to See"
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
