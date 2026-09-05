import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import PostGrid from "@/sections/blog/PostGrid";
import { posts } from "@/lib/posts";

export default function NewsPreview() {
  const latest = posts.slice(0, 3);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading eyebrow="Latest Stories" title="Blog" highlight="& News" />
          <Button href="/blog" variant="outline" icon={<ArrowRight size={16} />}>
            View All Posts
          </Button>
        </div>

        <div className="mt-12">
          <PostGrid posts={latest} />
        </div>
      </div>
    </section>
  );
}
