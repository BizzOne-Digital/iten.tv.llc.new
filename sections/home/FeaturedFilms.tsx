import Image from "next/image";

export default function FeaturedFilms() {
  return (
    <section className="py-16 sm:py-24 bg-bg">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h1 className="text-center font-display italic font-bold text-3xl sm:text-4xl text-neutral-400 mb-10">
          Bagged &amp; Tagged Films
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col items-center text-center">
            <p className="font-display italic font-bold text-lg text-[#0067ff] mb-4">
              Bagged &amp; Tagged - America&apos;s Wildest Baggers
            </p>
            <Image
              src="/bagtag/assets/img/bagtag1_logo.png"
              alt="Bagged & Tagged logo"
              width={500}
              height={420}
              className="w-1/2 max-w-[260px] h-auto object-contain mb-4"
            />
            <div className="relative w-4/5 max-w-sm aspect-[567/817] rounded-sm border-2 border-[#0067ff] overflow-hidden">
              <Image
                src="/bagtag/assets/img/top_cover_1.jpg"
                alt="Bagged & Tagged cover art"
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-text-muted max-w-sm">
              The original film that started it all — an inside look at the
              builders and riders pushing bagger culture to the edge.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="font-display italic font-bold text-lg text-[rgb(255,128,12)] mb-4">
              Bagged &amp; Tagged 2 - Ten years on
            </p>
            <Image
              src="/bagtag/assets/img/bagtag2_logo.png"
              alt="Bagged & Tagged 2 logo"
              width={500}
              height={420}
              className="w-1/2 max-w-[260px] h-auto object-contain mb-4"
            />
            <div className="relative w-4/5 max-w-sm aspect-[567/817] rounded-sm border-[1.5px] border-[rgb(245,147,0)] overflow-hidden">
              <Image
                src="/bagtag/assets/img/top_cover_2.jpg"
                alt="Bagged & Tagged 2 cover art"
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-text-muted max-w-sm">
              A decade later — revisiting the legends, the builds, and the
              culture that never slowed down.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
