export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  date: string;
  category: string;
};

export const posts: Post[] = [
  {
    slug: "ten-years-of-bagged-and-tagged",
    title: "Ten Years of Bagged & Tagged: What's Changed",
    excerpt:
      "A decade after the original film, we go back on the road to find out how bagger culture has evolved.",
    content: [
      "When we first set out to make Bagged & Tagged, bagger culture was still finding its voice in the wider motorcycle world. Ten years on, the scene has exploded — bigger builds, bigger shows, and a community that has only grown louder and prouder.",
      "For this anniversary film, we tracked down the original builders and riders who appeared a decade ago to see where the road has taken them. Some are still wrenching in the same garages. Others have turned their passion into full-blown businesses.",
      "What hasn't changed is the spirit: chrome, attitude, and a refusal to blend in.",
    ],
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200&q=80",
    date: "2026-08-12",
    category: "Behind The Scenes",
  },
  {
    slug: "inside-the-garage-builders-who-defined-a-culture",
    title: "Inside The Garage: Builders Who Defined a Culture",
    excerpt:
      "We spent a week with three of the most respected bagger builders in the country. Here's what we learned.",
    content: [
      "There's a difference between a mechanic and a builder. A builder sees a stock bagger and imagines something no one has seen before.",
      "Over the course of a week, our crew embedded with three shops across three states, documenting the late nights, the failed welds, and the breakthroughs that turn a stock frame into a rolling piece of art.",
      "Their stories will be featured in an upcoming series — subscribe to stay updated.",
    ],
    image:
      "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1200&q=80",
    date: "2026-07-28",
    category: "Culture",
  },
  {
    slug: "why-sponsorship-beats-traditional-advertising",
    title: "Why Sponsorship Beats Traditional Advertising",
    excerpt:
      "Traditional ads disappear after 30 seconds. Sponsorship lives inside the show. Here's why that matters for brands.",
    content: [
      "Every brand wants attention, but attention that fades the moment the commercial ends isn't worth much. Sponsorship works differently — your brand becomes part of the story, not an interruption to it.",
      "On iTEN.TV, sponsors are embedded into every episode, every season, seen by an audience that is already engaged with the automotive world they love.",
      "That's the difference between renting airtime and owning the show.",
    ],
    image:
      "https://images.unsplash.com/photo-1547549082-6bc09f2049ae?w=1200&q=80",
    date: "2026-07-05",
    category: "Sponsorship",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
