import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import type { Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-sm border border-border bg-bg-card hover:border-orange/60 transition-colors"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-display uppercase tracking-widest bg-bg/80 text-orange-bright border border-orange/40 rounded-sm">
          {post.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <Calendar size={14} />
          {formattedDate}
        </div>
        <h3 className="mt-3 text-xl font-display font-semibold uppercase text-text leading-snug">
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-text-muted leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-display uppercase tracking-widest text-text group-hover:text-orange-bright transition-colors">
          Read Story <ArrowUpRight size={16} />
        </span>
      </div>
    </Link>
  );
}
