import Image from "next/image";

const items = [
  {
    title: "No Fluff",
    image: "/bagtag/assets/img/man_tie.jpg",
    paragraphs: [
      "This isn't some suit's idea of a “biker film.” It's created by true industry pros- people who live and breathe custom motorcycles. No fake drama. No reality TV nonsense. Just the real love, grit, frustration, and thrill of owning a custom bagger.",
      "No endless slow-mo welding montages. No staged shouting matches. Just raw passion and real stories from the heart of the scene.",
    ],
  },
  {
    title: "Just As Loud As The First Film",
    image: "/bagtag/assets/img/guitar2.jpg",
    paragraphs: [
      "The soundtrack on the first Bagged & Tagged film caught people off guard. It's not your typical Skynyrd-and-leather-cliché music -  it hits harder than a crack in the nuts. It's dark, gritty, and untamed. It made riders feel like kings of the road, not just fans of the film.",
      "This time, we're going even louder than before. No bubblegum pop. No softcore hip-hop. We're talking heavy-hitting outlaw country, industrial rock, and southern grit.",
    ],
  },
  {
    title: "10 Year Re-Union",
    image: "/bagtag/assets/img/party.jpg",
    paragraphs: [
      "Remember Veronica Mills? That smokin' hot cheerleader from high school that everyone wanted a piece of? Where is she now? Yeah... we don't give a damn either.",
      "But hey, lets see how much things have changed. Who rose, who folded, who cashed in, and who burned out. Who's running the game now, and who's just faking it.",
    ],
  },
];

export default function HighlightsSection() {
  return (
    <section className="py-24 sm:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 className="text-center font-display italic font-bold text-3xl text-orange-bright mb-14">
          Highlights
        </h2>

        <div className="grid gap-10 sm:grid-cols-3">
          {items.map(({ title, image, paragraphs }) => (
            <div key={title} className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/85 py-2 px-2 text-center">
                  <span className="font-display uppercase tracking-wide text-sm text-orange-bright">
                    {title}
                  </span>
                </div>
              </div>
              <div className="mt-4 space-y-3 text-sm text-text-muted leading-relaxed">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
