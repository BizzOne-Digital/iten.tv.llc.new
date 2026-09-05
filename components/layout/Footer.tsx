import Link from "next/link";
import { Camera, MessageCircle, Video, Mail, Phone } from "lucide-react";
import Logo from "./Logo";

const socials = [
  { href: "https://instagram.com", label: "Instagram", icon: Camera },
  { href: "https://facebook.com", label: "Facebook", icon: MessageCircle },
  { href: "https://youtube.com", label: "YouTube", icon: Video },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-text-muted max-w-xs leading-relaxed">
            Home of Bagged &amp; Tagged — original documentary films from the
            heart of America&apos;s bagger motorcycle culture.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-display uppercase tracking-widest text-sm text-text mb-1">
            Navigate
          </span>
          <Link href="/" className="text-sm text-text-muted hover:text-orange-bright transition-colors">Home</Link>
          <Link href="/blog" className="text-sm text-text-muted hover:text-orange-bright transition-colors">Blog / News</Link>
          <Link href="/contact" className="text-sm text-text-muted hover:text-orange-bright transition-colors">Contact</Link>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-display uppercase tracking-widest text-sm text-text mb-1">
            Get In Touch
          </span>
          <a href="mailto:info@iten.tv" className="flex items-center gap-2 text-sm text-text-muted hover:text-orange-bright transition-colors">
            <Mail size={16} /> info@iten.tv
          </a>
          <a href="tel:15207573019" className="flex items-center gap-2 text-sm text-text-muted hover:text-orange-bright transition-colors">
            <Phone size={16} /> (520) 757-3019
          </a>
          <div className="flex items-center gap-4 mt-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border text-text-muted hover:text-orange-bright hover:border-orange transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} iTEN.TV. All rights reserved.</p>
          <p>Bagged &amp; Tagged is a production of iTEN.TV</p>
        </div>
      </div>
    </footer>
  );
}
