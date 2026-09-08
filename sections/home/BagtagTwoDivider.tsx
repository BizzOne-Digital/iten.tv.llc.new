import Image from "next/image";

export default function BagtagTwoDivider() {
  return (
    <section className="py-16 bg-bg">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 grid gap-8 md:grid-cols-2 items-center">
        <div className="flex justify-center">
          <Image
            src="/bagtag/assets/img/bagtag2_mini_log.png"
            alt="Bagged & Tagged 2"
            width={400}
            height={200}
            className="w-1/2 h-auto object-contain"
          />
        </div>
        <p className="text-center font-display italic font-bold text-3xl sm:text-4xl text-text">
          10 Years On
        </p>
      </div>
    </section>
  );
}
