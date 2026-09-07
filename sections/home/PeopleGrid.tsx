import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderTile from "@/components/ui/PlaceholderTile";

type Person = {
  name: string;
  role?: string;
  image?: string;
};

type PeopleGridProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  people: Person[];
  tone?: "elevated" | "base" | "graphite" | "light";
};

const toneClasses: Record<NonNullable<PeopleGridProps["tone"]>, string> = {
  elevated: "bg-bg-elevated",
  base: "bg-bg",
  graphite: "bg-bg-card",
  light: "bg-[#F5F3EF]",
};

export default function PeopleGrid({
  eyebrow,
  title,
  highlight,
  subtitle,
  people,
  tone = "elevated",
}: PeopleGridProps) {
  const headingTone = tone === "light" ? "light" : "dark";

  return (
    <section className={`py-24 sm:py-32 ${toneClasses[tone]}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          description={subtitle}
          align="center"
          tone={headingTone}
        />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-5">
          {people.map((person, index) => (
            <PlaceholderTile
              key={`${person.name}-${index}`}
              name={person.name}
              role={person.role}
              image={person.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
