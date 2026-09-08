import Image from "next/image";

export default function BuyFilmSection() {
  return (
    <section className="py-20 sm:py-24 bg-bg">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="rounded-sm bg-[#3e3a3a] py-16 px-8 text-center">
          <p className="font-display italic font-bold text-orange-bright text-lg mb-2">
            Download Digital Offer
          </p>
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Own The Film - $9.99
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Download Bagged &amp; Tagged today and ride along with America&apos;s
            wildest bagger builders and riders.
          </p>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 text-center">
          <div>
            <p className="font-display font-bold text-lg text-[#ff0018] mb-5">
              Purchase Download $11.95
            </p>
            <a
              href="https://itentvllc.square.site/product/bagged-tagged-2-download-/N6ST6LYPFBLLWDCWUPAZQ2WK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/bagtag/assets/img/download.png"
                alt="Purchase digital download"
                width={280}
                height={280}
                className="mx-auto h-40 w-auto object-contain"
              />
            </a>
            <p className="mt-5 text-sm text-text-muted">
              An email with a downloadable link will be sent to you within 24
              hours.
            </p>
          </div>

          <div>
            <p className="font-display font-bold text-lg text-[rgb(255,0,0)] mb-5">
              Purchase Blu-Ray Disc $19.95
            </p>
            <a
              href="https://itentvllc.square.site/product/bagged-tagged-2/FCPNOU2ESUWLSY6KU54MPCN7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Image
                src="/bagtag/assets/img/bagtag2_cover.png"
                alt="Purchase Blu-ray disc"
                width={280}
                height={368}
                className="mx-auto h-40 w-auto object-contain"
              />
            </a>
            <p className="mt-5 text-sm text-text-muted">
              Purchase a hard copy of the film. Free shipping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
