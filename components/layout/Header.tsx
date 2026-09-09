import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog / News" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-black/10"
      style={{ background: "linear-gradient(#a8daef, #b49f7f)" }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 h-24 flex items-center justify-between">
        <Link href="/" className="shrink-0 flex items-center gap-2">
          <Image
            src="/bagtag/assets/img/iten_tv_black.png"
            alt="iTEN.TV"
            width={400}
            height={180}
            className="h-14 sm:h-16 w-auto object-contain"
            priority
          />
          <span className="hidden sm:inline font-display text-lg font-bold uppercase tracking-wide text-black">
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
