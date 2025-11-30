import { Section } from "@/components/section";
import { WorkItem } from "@/components/work-item";
import { Project } from "@/components/project";
import { Greeting } from "@/components/greeting";

import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import {
  SiNextdotjs,
  SiFigma,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPrisma,
  SiVercel,
  SiTurborepo,
} from "@icons-pack/react-simple-icons";
import { ExternalLink } from "@/components/external-link";

import { getAllPosts, getPostDate } from "@/lib/posts";

const work = [
  {
    company: "Secton",
    role: "Software Engineer",
    period: "2020 - present",
    href: "https://secton.org",
    description:
      "working on internal and client-facing applications. i spend a lot of time thinking about developer experience and how to make things feel fast.",
  },
];

const projects = [
  {
    name: "Duels+",
    description: "maintaining the launcher, api, backend services, and website",
    period: "2025 - present",
    href: "https://duelsplus.com",
  },
  {
    name: "discord-activity-nextjs",
    description: "minimal next.js boilerplate for building discord activities",
    tags: ["Unmaintained"],
    period: "2025",
    href: "https://github.com/kneesdev/discord-activity-nextjs",
  },
  {
    name: "Lunar Client Archive",
    description: "archived installers of the launcher",
    tags: ["Unmaintained"],
    period: "2024",
    href: "https://github.com/kneesdev/LunarClientArchive",
  },
];

const stack = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    href: "https://typescriptlang.org",
  },
  { name: "React", icon: SiReact, href: "https://react.dev" },
  { name: "Next.js", icon: SiNextdotjs, href: "https://nextjs.org" },
  { name: "Node.js", icon: SiNodedotjs, href: "https://nodejs.org" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    href: "https://tailwindcss.com",
  },
  { name: "Prisma", icon: SiPrisma, href: "https://prisma.io" },
  { name: "Vercel", icon: SiVercel, href: "https://vercel.com" },
  { name: "Turborepo", icon: SiTurborepo, href: "https://turborepo.com" },
  { name: "Figma", icon: SiFigma, href: "https://figma.com" },
];

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <header className="mb-20 md:mb-28">
        <Greeting />
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-4">
          i like designing frontend interfaces and developing scalable backend
          systems using modern frameworks.
        </p>
      </header>

      <Section id="about" title="about">
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            i first got into coding by scripting batch files when i was young,
            then i got curious about the web and moved to html and javascript. i
            also built various c# programs and eventually fell deep into web
            development.
          </p>
          <p>
            i have been writing code for about five years now. in that time
            i&apos;ve tried a bit of everything; discord bots, papermc plugins,
            minecraft modding, desktop & game development, even music production
            and video editing at one point.
          </p>
          <p>
            i ended up here because i genuinely enjoy this stuff, not because
            someone told me it was a good career. that&apos;s probably why i
            still enjoy it the same way i did when i first started.
          </p>
          <p>
            these days i care a lot about structure. i like writing code that
            future me won&apos;t be scared to open, and i try to build things in
            a way that feels obvious. frameworks change all the time, but good
            decisions age well.
          </p>
        </div>
      </Section>

      <Section id="work" title="experience">
        <div className="space-y-10">
          {work.map((item) => (
            <WorkItem key={item.company} {...item} />
          ))}
        </div>
      </Section>

      <Section id="projects" title="projects">
        <p className="text-muted-foreground mb-8 leading-relaxed">
          a few things i&apos;ve built (or helped build). most taught me
          something i didn&apos;t expect to learn.
        </p>
        <div className="grid gap-2">
          {projects.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </div>
      </Section>

      <Section id="writing" title="writing">
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            i occasionally write about things i learn. mostly so i don&apos;t
            forget them, but also because explaining something is the best way
            to find out if you actually understand it.
          </p>
        </div>
        <div className="space-y-6 mt-8">
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

      <Section title="stack">
        <p className="text-muted-foreground mb-6 leading-relaxed">
          tools i use regularly. this is not an exhaustive list; just the ones
          i&apos;d reach for if i were starting a new project.
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => {
            const Icon = tech.icon;
            return (
              <ExternalLink
                key={tech.name}
                href={tech.href}
                className=""
                hideArrow
              >
                <span
                  key={tech.name}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm border border-border rounded-full hover:border-accent text-muted-foreground"
                >
                  <Icon className="size-4" />
                  {tech.name}
                  <ArrowUpRightIcon className="h-3 w-3 hidden group-hover:inline-block" />
                </span>
              </ExternalLink>
            );
          })}
        </div>
      </Section>
    </>
  );
}
