import Image from "next/image";

const highlights = [
  {
    title: "Interviews",
    description:
      "Featuring in-depth interviews with tips, tricks and myths about building a custom bagger — straight from the builders and owners.",
    image: "/new/interviews.jpg" as string | undefined,
  },
  {
    title: "Music",
    description:
      "A soundtrack built to suit these bikes. Original music from some of the best composers in the gaming industry.",
    image: "/new/speaker.jpg" as string | undefined,
  },
  {
    title: "Unique",
    description:
      "Watch something unique. This isn't some ol' bike film like the rest — time to break away from the sheep.",
    image: "/new/baggers.jpg" as string | undefined,
  },
];

export default function BaggedTaggedSection() {
  return (
    <>
      <section className="relative py-24 sm:py-32 overflow-hidden bg-[#F5F3EF]">
        <div className="absolute inset-0 opacity-[0.06]">
          <Image
            src="/2ndimg1.jpg"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="bg-white rounded-md p-6 shadow-lg border border-black/5">
              <Image
                src="/home1.png"
                alt="Bagged & Tagged cover art"
                width={709}
                height={831}
                className="h-64 sm:h-80 w-auto object-contain"
              />
            </div>
          </div>

          <div>
            <p className="font-display uppercase tracking-[0.3em] text-sm text-orange-bright mb-3">
              An Original, Easy-To-Watch Documentary
            </p>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                From the studios of iTEN.TV comes our new documentary film,
                &ldquo;Bagged &amp; Tagged.&rdquo; We go on the road to find
                some of the most radical and modified street-legal Harley
                Davidson baggers. We visit the bike shows and workshops. We
                talk with the designers and builders of these wild and insane
                bikes. Best of all, they&apos;re all street legal.
              </p>
              <p>
                This is not an over-the-top production with script writers,
                camera cranes, and special FX crews — this is as raw as it
                gets. We track down the people right there at the shows, on
                the side of the road, and even at their jobs while they work.
                A film that relates to everyone with bikes that everyone could
                own, with answers that come straight from their mouths.
              </p>
              <p>
                Best of all, you won&apos;t see the same stuff you see on TV.
                Everything you need to know about modifying your bagger is
                here in this film. The biggest names in the industry: Jim
                Nasi, Brian Horstman, John Shope, Nick Trask, + many more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-bg-card">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <h2 className="text-center font-display uppercase tracking-widest text-2xl text-text mb-12">
            Highlights
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {highlights.map(({ title, description, image }) => (
              <div
                key={title}
                className="flex flex-col overflow-hidden rounded-sm border border-border bg-bg text-center"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {image && (
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="p-6 flex flex-col gap-3 items-center">
                  <h3 className="font-display uppercase tracking-wide text-lg text-orange-bright">
                    {title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
