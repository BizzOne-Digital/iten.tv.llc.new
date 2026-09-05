import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex flex-col leading-none ${className}`}>
      <span className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-gradient-chrome">
        i<span className="text-orange">TEN</span>.TV
      </span>
      <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-text-muted group-hover:text-orange-bright transition-colors">
        Automotive Films
      </span>
    </Link>
  );
}
