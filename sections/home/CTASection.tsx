import { Download, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-sm border border-orange/40 bg-bg-card px-8 py-16 sm:px-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,107,29,0.15),transparent_60%)]" />

          <div className="relative">
            <p className="font-display uppercase tracking-[0.3em] text-sm text-orange-bright">
              Limited Special Offer
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-display font-semibold uppercase text-text">
              Own The Full Film — <span className="text-gradient-orange">$9.99</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-text-muted leading-relaxed">
              Download Bagged &amp; Tagged today and ride along with America&apos;s
              wildest bagger builders and riders.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-5">
              <Button href="/contact" variant="primary" icon={<Download size={18} />}>
                Download Now
              </Button>
              <Button href="/blog" variant="ghost" icon={<ArrowRight size={16} />}>
                Read The Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
