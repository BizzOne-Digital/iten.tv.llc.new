import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog / News" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 relative bg-bg/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm uppercase tracking-widest text-text-muted hover:text-orange-bright transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 font-display uppercase tracking-widest text-sm rounded-sm bg-orange text-bg hover:bg-orange-bright transition-colors"
          >
            Get In Touch
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
