import Link from "next/link";
import MobileNav from "./MobileNav";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog / News" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#C9A876] to-[#5B8FC7] border-b border-black/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
            iTEN.TV
          </span>
          <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-wide text-black">
            Presents
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm uppercase tracking-widest text-black/80 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-display uppercase tracking-widest text-sm rounded-sm bg-black text-white hover:bg-black/80 transition-colors"
          >
            Get In Touch
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
