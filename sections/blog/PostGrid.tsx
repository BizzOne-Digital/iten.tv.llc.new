import type { Post } from "@/lib/posts";
import PostCard from "./PostCard";

export default function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
