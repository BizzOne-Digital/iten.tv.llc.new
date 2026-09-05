import Image from "next/image";
import { ImageIcon } from "lucide-react";

type PlaceholderTileProps = {
  name: string;
  role?: string;
  image?: string;
};

export default function PlaceholderTile({ name, role, image }: PlaceholderTileProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-border bg-bg-card">
      <div className="relative aspect-[4/3] flex flex-col items-center justify-center gap-2 bg-bg text-text-muted/60 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <>
            <ImageIcon size={28} strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-widest">Photo Coming Soon</span>
          </>
        )}
      </div>
      <div className="px-4 py-3">
        <p className="text-sm font-display uppercase tracking-wide text-text">{name}</p>
        {role && <p className="text-xs text-text-muted mt-0.5">{role}</p>}
      </div>
    </div>
  );
}
