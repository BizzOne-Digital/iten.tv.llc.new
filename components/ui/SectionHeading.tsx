type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "light" ? "text-neutral-900" : "text-text";
  const descriptionColor = tone === "light" ? "text-neutral-600" : "text-text-muted";

  return (
    <div className={`max-w-2xl ${alignClasses}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-display uppercase tracking-[0.3em] text-orange-bright">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl md:text-5xl font-display font-semibold uppercase ${titleColor}`}>
        {title} {highlight && <span className="text-gradient-orange">{highlight}</span>}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${descriptionColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
