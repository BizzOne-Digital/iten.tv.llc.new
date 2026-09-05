import Link from "next/link";
import { Images, ArrowRight } from "lucide-react";

export default function GalleryCTA({
  label,
  href = "/contact",
}: {
  label: string;
  href?: string;
}) {
  return (
    <div className="mt-6 flex justify-center">
      <Link
        href={href}
        className="inline-flex items-center gap-3 px-6 py-4 rounded-sm border border-border bg-bg-card hover:border-orange/60 transition-colors"
      >
        <Images className="text-orange-bright" size={20} />
        <span className="font-display uppercase tracking-widest text-sm text-text">
          {label}
        </span>
        <ArrowRight size={16} className="text-text-muted" />
      </Link>
    </div>
  );
}
