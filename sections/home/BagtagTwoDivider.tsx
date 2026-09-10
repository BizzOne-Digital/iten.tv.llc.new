import Image from "next/image";

export default function BagtagTwoDivider() {
  return (
    <section className="py-6 sm:py-8 bg-bg">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="relative w-full aspect-[2256/704]">
          <Image
            src="/bgtag2_header.png"
            alt="Bagged & Tagged 2: America's Wildest Baggers — Ten Years On"
            fill
            sizes="(max-width: 1024px) 90vw, 800px"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
