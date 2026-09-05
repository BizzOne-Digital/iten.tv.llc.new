import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import PostGrid from "@/sections/blog/PostGrid";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog / News",
  description:
    "Stories from the road — updates, behind-the-scenes features and news from iTEN.TV.",
};

export default function BlogPage() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="From The Road"
          title="Blog"
          highlight="& News"
          description="Behind-the-scenes stories, builder features, and updates from America's wildest bagger culture."
        />

        <div className="mt-14">
          <PostGrid posts={posts} />
        </div>
      </div>
    </section>
  );
}
