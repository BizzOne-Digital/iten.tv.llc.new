import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated" data-bs-theme="dark">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-14 grid gap-10 sm:grid-cols-3">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <Image
            src="/bagtag/assets/img/iten_logo2.png"
            alt="iTEN.TV"
            width={400}
            height={180}
            className="w-2/3 max-w-[220px] h-auto object-contain"
          />
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="https://www.iten.tv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-orange-bright transition-colors"
            >
              iTEN.TV Website
            </a>
            <a href="/blog" className="text-text-muted hover:text-orange-bright transition-colors">
              Blog / News
            </a>
            <a
              href="https://www.iten.tv/contact.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-orange-bright transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start gap-3">
          <span className="font-display uppercase tracking-widest text-sm text-text mb-1">
            About
          </span>
          <a
            href="https://www.iten.tv/terms.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-orange-bright transition-colors"
          >
            Terms
          </a>
          <a
            href="https://www.iten.tv/privacy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-orange-bright transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://itentvllc.square.site/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-orange-bright transition-colors"
          >
            Shopping Cart
          </a>
        </div>

        <div />
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-6 text-xs text-text-muted text-center sm:text-left">
          <p>All rights reserved. Copyright &copy; {new Date().getFullYear()} iTEN.TV</p>
        </div>
      </div>
    </footer>
  );
}
