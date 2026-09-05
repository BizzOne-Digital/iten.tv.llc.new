import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderTile from "@/components/ui/PlaceholderTile";

type Person = {
  name: string;
  role?: string;
};

type PeopleGridProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  people: Person[];
  tone?: "elevated" | "base" | "graphite";
};

const toneClasses: Record<NonNullable<PeopleGridProps["tone"]>, string> = {
  elevated: "bg-bg-elevated",
  base: "bg-bg",
  graphite: "bg-bg-card",
};

export default function PeopleGrid({
  eyebrow,
  title,
  highlight,
  subtitle,
  people,
  tone = "elevated",
}: PeopleGridProps) {
  return (
    <section className={`py-24 sm:py-32 ${toneClasses[tone]}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} highlight={highlight} description={subtitle} />

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-5">
          {people.map((person, index) => (
            <PlaceholderTile key={`${person.name}-${index}`} name={person.name} role={person.role} />
          ))}
        </div>
      </div>
    </section>
  );
}
