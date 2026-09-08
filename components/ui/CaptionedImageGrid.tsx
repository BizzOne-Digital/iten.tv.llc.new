import Image from "next/image";
import Link from "next/link";

type Item = {
  image: string;
  caption: string;
  href?: string;
  description?: string;
  captionBg?: string;
  captionText?: string;
};

type CaptionedImageGridProps = {
  items: Item[];
  captionBg?: string;
  captionText?: string;
};

export default function CaptionedImageGrid({
  items,
  captionBg = "bg-[#0067ff]",
  captionText = "text-white",
}: CaptionedImageGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {items.map((item, index) => {
        const bg = item.captionBg ?? captionBg;
        const text = item.captionText ?? captionText;

        const content = (
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src={item.image}
              alt={item.caption}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
            <div className={`absolute bottom-0 inset-x-0 py-2 px-2 text-center ${bg}`}>
              <span className={`font-display uppercase tracking-wide text-xs sm:text-sm ${text}`}>
                {item.caption}
              </span>
            </div>
          </div>
        );

        return (
          <div key={`${item.caption}-${index}`}>
            {item.href ? (
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                {content}
              </Link>
            ) : (
              content
            )}
            {item.description && (
              <p className="mt-4 text-sm text-text-muted leading-relaxed">{item.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
