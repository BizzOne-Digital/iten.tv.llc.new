import { ImageIcon } from "lucide-react";

type PlaceholderTileProps = {
  name: string;
  role?: string;
};

export default function PlaceholderTile({ name, role }: PlaceholderTileProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-sm border border-border bg-bg-card">
      <div className="aspect-[4/3] flex flex-col items-center justify-center gap-2 bg-bg text-text-muted/60">
        <ImageIcon size={28} strokeWidth={1.5} />
        <span className="text-[10px] uppercase tracking-widest">Photo Coming Soon</span>
      </div>
      <div className="px-4 py-3">
        <p className="text-sm font-display uppercase tracking-wide text-text">{name}</p>
        {role && <p className="text-xs text-text-muted mt-0.5">{role}</p>}
      </div>
    </div>
  );
}
