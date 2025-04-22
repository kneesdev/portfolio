"use client";

import Image from "next/image"
import Figma from "@/images/icons/figma.svg"
import Nextjs from "@/images/icons/nextjs.svg"
import Nodejs from "@/images/icons/node.svg"
import Prisma from "@/images/icons/prisma.svg"
import ReactIcon from "@/images/icons/react.svg"
import Tailwindcss from "@/images/icons/tailwindcss.svg"
import Turbopack from "@/images/icons/turbopack.svg"
import Typescript from "@/images/icons/typescript.svg"
import Vercel from "@/images/icons/vercel.svg"
import Neon from "@/images/icons/neondb.svg"

const tools = [
    { name: "Next.js", icon: Nextjs },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactIcon },
    { name: "Node.js", icon: Nodejs },
    { name: "TailwindCSS", icon: Tailwindcss },
    { name: "Figma", icon: Figma },
    { name: "Neon", icon: Neon },
    { name: "Prisma", icon: Prisma },
    { name: "Turbopack", icon: Turbopack },
    { name: "Vercel", icon: Vercel },
];

export const TechStack = () => {
    return (
        <section id="tech-stack" className="px-6 sm:px-12 py-24 max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-10">My Essential Stack</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {tools.map((tool) => (
                    <div
                        key={tool.name}
                        className="flex items-center justify-center border bg-zinc-900 rounded-xl gap-2 p-6 hover:bg-zinc-800 transition"
                    >
                        <Image src={tool.icon} alt={tool.name} width={24} height={24} draggable={false} className="size-6" />
                        <span className="text-base font-medium text-primary">{tool.name}</span>
                    </div>
                ))}
            </div>
            <p className="text-lg text-muted-foreground mt-6 text-center italic"><span className="text-primary font-medium">+</span> Framer Motion, GSAP, tailwindcss-animate, etc.</p>
        </section>
    );
};