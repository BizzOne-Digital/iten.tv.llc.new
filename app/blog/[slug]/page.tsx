import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar } from "lucide-react";
import { posts, getPostBySlug } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-display uppercase tracking-widest text-text-muted hover:text-orange-bright transition-colors"
        >
          <ArrowLeft size={16} /> Back To Blog
        </Link>

        <p className="mt-8 text-xs font-display uppercase tracking-[0.3em] text-orange-bright">
          {post.category}
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase text-text leading-tight">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-2 text-sm text-text-muted">
          <Calendar size={14} />
          {formattedDate}
        </div>

        <div className="relative mt-10 aspect-[16/9] rounded-sm overflow-hidden border border-border">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="mt-10 space-y-6 text-text-muted leading-relaxed text-lg">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
