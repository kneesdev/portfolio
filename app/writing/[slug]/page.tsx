import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getPostDate } from "@/lib/posts";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <header className="mb-20 md:mb-28">
        <h1 className="text-3xl font-medium mb-4">{post.title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {getPostDate(post.date)}
        </p>
      </header>

      <article
        className="mb-20 md:mb-28 max-w-none prose prose-zinc dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title}`;

  return {
    title,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
