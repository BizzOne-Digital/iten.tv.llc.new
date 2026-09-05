import { PlayCircle } from "lucide-react";

export default function VideoTrailer({ label }: { label: string }) {
  return (
    <section className="py-20 sm:py-28 bg-bg">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="relative aspect-video rounded-sm border border-dashed border-chrome-2/40 bg-bg-card flex flex-col items-center justify-center gap-4">
          <PlayCircle size={48} className="text-orange-bright" strokeWidth={1.5} />
          <p className="font-display uppercase tracking-[0.3em] text-sm text-text-muted">
            {label}
          </p>
        </div>
      </div>
    </section>
  );
}
