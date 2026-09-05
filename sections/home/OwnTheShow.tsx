import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OwnTheShow() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative aspect-[4/3] rounded-sm overflow-hidden border-2 border-orange/70">
          <Image
            src="/sponsor-rider.jpg"
            alt="Rider overlooking the city skyline at night"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-display uppercase tracking-[0.3em] text-sm text-orange-bright">
            Stop Renting Airtime
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-display font-semibold uppercase text-text">
            Own The <span className="text-gradient-orange">Show</span>
          </h2>

          <div className="mt-6 space-y-5 text-text-muted leading-relaxed">
            <p>
              Traditional advertising is a rental agreement — you pay, you flash
              across the screen for 15 to 60 seconds, and then you&apos;re gone.
              No memory. No connection. No return. Sponsorship is ownership.
            </p>
            <p>
              When you sponsor a show on iTEN.TV, your brand
              doesn&apos;t disappear after a commercial break — it lives for the
              entire life of the show. Every episode. Every season. Every time
              someone tunes in, your logo is right there, front and center,
              embedded in the experience rather than interrupting it.
            </p>
            <p>
              That&apos;s not just exposure. That&apos;s an association. It
              tells viewers your brand isn&apos;t just buying attention —
              it&apos;s invested in the automotive world, the same way they
              are. It signals loyalty, credibility, and staying power to
              exactly the audience that matters: real automotive enthusiasts
              who are already watching, already engaged, already primed to
              care about the brands that support the content they love.
            </p>
            <p>
              iTEN.TV isn&apos;t another network doing what everyone else
              does. We&apos;re fresh and we&apos;re building something built
              around long-term partnership instead of short-term impressions.
            </p>
            <p>
              If you&apos;re ready to stop disappearing after 30 seconds and
              start becoming part of the show, let&apos;s talk. Let us tailor
              a package for you, so you don&apos;t have to be in just one
              spot.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 font-display uppercase tracking-widest text-sm text-orange-bright hover:text-orange transition-colors"
          >
            Contact iTEN.TV Today <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
