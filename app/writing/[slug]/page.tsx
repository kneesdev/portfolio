import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon } from "@phosphor-icons/react/ssr";
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
      <Link
        href="/writing"
        className="flex gap-2 items-center text-sm font-medium font-mono text-foreground mb-8 tracking-wide hover:underline hover:decoration-dashed"
      >
        <ArrowLeftIcon /> return to writing
      </Link>

      <header className="mb-20 md:mb-28">
        <h1 className="text-3xl font-medium mb-4">{post.title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {getPostDate(post.date)}
        </p>
      </header>

      <article
        className="mb-20 md:mb-28 max-w-none prose prose-zinc prose-img:rounded-lg prose-img:pointer-events-none dark:prose-invert prose-code:font-mono prose-code:bg-muted prose-code:text-foregroundprose-code:px-[0.35rem] prose-code:py-[0.15rem] prose-code:rounded-md prose-a:decoration-dashed prose-a:hover:no-underline prose-p:text-muted-foreground"
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
    twitter: {
      title: `${post.title}`,
    },
    openGraph: {
      title: `${post.title}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
