import Image from "next/image";
import CaptionedImageGrid from "@/components/ui/CaptionedImageGrid";

const items = [
  { image: "/bagtag/assets/img/portfolio_pic2.jpg", caption: "Sinthium Custom Paint" },
  { image: "/bagtag/assets/img/portfolio_pic4.jpg", caption: "Trask Performance" },
  { image: "/bagtag/assets/img/portfolio_pic1.jpg", caption: "Dirty Bird Designs" },
  { image: "/bagtag/assets/img/portfolio_pic3.jpg", caption: "Jim Nasi Customs" },
  { image: "/bagtag/assets/img/portfolio_pic5.jpg", caption: "Kaotic Designs" },
  { image: "/bagtag/assets/img/portfolio_pic6.jpg", caption: "Private Builders" },
  { image: "/bagtag/assets/img/portfolio_pic7.jpg", caption: "Custom Accessories" },
  { image: "/bagtag/assets/img/portfolio_pic8.jpg", caption: "Riverside Harley Davidson" },
  {
    image: "/bagtag/assets/img/gallery.jpg",
    caption: "Click For Gallery",
    href: "/bagtag/gallery/gallery.html",
    captionBg: "bg-black/80",
    captionText: "text-[#ffc107] italic font-bold",
  },
];

export default function SpecialGuestsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#F5F3EF] overflow-hidden">
      <div className="absolute inset-0" style={{ mixBlendMode: "multiply", opacity: 0.5 }}>
        <Image src="/2ndimg1.jpg" alt="" fill className="object-cover" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <h2 className="text-center font-display italic font-bold text-3xl sm:text-4xl text-[#0067ff] mb-3">
          Special Guests
        </h2>
        <p className="text-center text-neutral-600 mb-12">
          Some of the talent we feature in this film.
        </p>

        <CaptionedImageGrid items={items} />
      </div>
    </section>
  );
}
