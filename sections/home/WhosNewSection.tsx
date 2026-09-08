import CaptionedImageGrid from "@/components/ui/CaptionedImageGrid";

const items = [
  { image: "/bagtag/assets/img/starring_001.jpg", caption: "Curtis Hofmann - Hofmann Designs" },
  { image: "/bagtag/assets/img/starring_002.jpg", caption: "Paul Yaffe - Paul Yaffe Originals" },
  { image: "/bagtag/assets/img/starring_003.jpg", caption: "Satya Kraus - Krause Motor" },
  { image: "/bagtag/assets/img/starring_005.jpg", caption: "Coby Klein - Speed By Design" },
  { image: "/bagtag/assets/img/starring_006.jpg", caption: "James Bonner - JBA Customs" },
  { image: "/bagtag/assets/img/starring_007.jpg", caption: "Nick Trask - Trask Performance" },
  { image: "/bagtag/assets/img/starring_008.jpg", caption: "Justin B. Umbs - Superstition Harley" },
  { image: "/bagtag/assets/img/starring_010.jpg", caption: "Marcos Mendieta - Inland Empire" },
  { image: "/bagtag/assets/img/starring_009.jpg", caption: "Kyle Coolings - Coonyz Customs" },
];

export default function WhosNewSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#171717]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 className="text-center font-display italic font-bold text-3xl sm:text-4xl text-orange-bright mb-14">
          Who&apos;s In The Film This Time?
        </h2>

        <CaptionedImageGrid
          items={items}
          captionBg="bg-orange-bright"
          captionText="text-black"
        />
      </div>
    </section>
  );
}
