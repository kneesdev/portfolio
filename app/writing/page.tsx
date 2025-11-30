import { Section } from "@/components/section";
import Link from "next/link"
import { ArrowRightIcon } from "@phosphor-icons/react/ssr"

import { getAllPosts, getPostDate } from "@/lib/posts";

export default function Writing() {
  const posts = getAllPosts();

  return (
    <Section id="writing" title="writing">
      <div className="grid gap-2">
        {posts.map((post) => (
          <Link
            key={post.title}
            href={`/writing/${post.slug}`}
            className="group block p-5 -mx-5 rounded-lg hover:bg-muted/50"
          >
            <div className="grid md:grid-cols-[140px_1fr] gap-1 md:gap-8">
              <div className="flex md:flex-col justify-between md:justify-start gap-2">
                <span className="text-sm text-muted-foreground font-mono">
                  {getPostDate(post.date)}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-medium">{post.title}</h3>
                  <ArrowRightIcon className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
