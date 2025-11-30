import { Section } from "@/components/section";
import { getAllPosts, getPostDate } from "@/lib/posts";

export default function Writing() {
  const posts = getAllPosts();

  return (
    <Section id="writing" title="writing">
      <div className="space-y-6">
        {posts.map((post) => (
          <a
            key={post.title}
            href={`/writing/${post.slug}`}
            className="group block py-2"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-medium group-hover:text-muted-foreground">
                {post.title}
              </h3>
              <span className="text-sm text-muted-foreground font-mono shrink-0">
                {getPostDate(post.date)}
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
