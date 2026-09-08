import Image from "next/image";

const cards = [
  {
    title: "Interviews",
    description:
      "Featuring in-depth interviews with tips, tricks and myths about building a custom bagger - straight from the builders and owners.",
    image: "/bagtag/assets/img/interviews.jpg",
  },
  {
    title: "Awesome Sound Track",
    description:
      "A soundtrack built to suit these bikes. Original music from some of the best composers in the gaming industry.",
    image: "/bagtag/assets/img/speaker.webp",
  },
  {
    title: "Unique",
    description:
      "Watch something unique. This isn't some ol' bike film like the rest - time to break away from the sheep.",
    image: "/bagtag/assets/img/baggers.jpg",
  },
];

export default function BaggedTaggedSection() {
  return (
    <>
      <section
        className="relative py-24 sm:py-32"
        style={{
          backgroundImage: "url(/bagtag/assets/img/background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div className="flex justify-center">
            <Image
              src="/bagtag/assets/img/bagtag_cover.png"
              alt="Bagged & Tagged cover art"
              width={709}
              height={831}
              className="w-[70%] h-auto object-contain"
            />
          </div>

          <div>
            <p className="font-display italic font-bold text-lg text-[#0067ff] mb-4 text-center">
              An Original, Easy-To-Watch Documentary
            </p>
            <div className="space-y-4 text-text-muted leading-relaxed">
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

      <section className="py-20 sm:py-28 bg-bg">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <h2 className="text-center font-display italic font-bold text-3xl text-[#0067ff] mb-3">
            What We&apos;ve Got For You
          </h2>
          <p className="text-center text-text-muted mb-12">
            Some of the talent we feature in this film.
          </p>

          <div className="grid gap-8 sm:grid-cols-3">
            {cards.map(({ title, description, image }) => (
              <div key={title} className="flex flex-col overflow-hidden rounded-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#0067ff] py-2 text-center">
                    <span className="font-display uppercase tracking-wide text-sm text-white">
                      {title}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-text-muted leading-relaxed text-center">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
