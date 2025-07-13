"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import DuelsPlus from "@/images/brands/duelsplus.svg"
import Secton from "@/images/brands/secton.svg"

const companies = [
    {
        name: "Secton",
        description: "A software development company transforming ideas into reality.",
        url: "https://secton.org",
        image: Secton,
    },
    {
        name: "Duels+",
        description: "Lightweight, custom Minecraft Proxy designed to enhance your experience on Hypixel Duels.",
        url: "https://duelsplus.com",
        image: DuelsPlus,
    },
]

const otherProjects = [
    { name: "Lunar Client Archive", url: "https://github.com/kneesdev/LunarClientArchive" },
    { name: "Voidlands Network", url: "https://voidlands.network" },
    { name: "EngTool", url: "https://github.com/kneesdev/EngTool" },
]

export const WorkExperience = () => {
    return (
        <section id="work-experience" className="px-6 sm:px-12 py-24 max-w-7xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-10">My Work Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-64">
                {companies.map((company) => (
                    <motion.a
                        key={company.name}
                        href={company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="relative flex flex-col justify-end border bg-zinc-900 rounded-xl h-full p-6 hover:bg-zinc-800 transition-colors group overflow-hidden"
                    >
                        <div className="absolute bottom-0 left-0 w-40 h-40 opacity-10 duration-500 transition group-hover:opacity-20 pointer-events-none z-0">
                            <Image
                                src={company.image}
                                alt=""
                                fill
                                className="object-cover object-top-right scale-150 transition duration-500 group-hover:scale-[1.6]"
                            />
                        </div>

                        <div className="relative z-10">
                            <div className="flex gap-2 items-center mb-2">
                                <h3 className="text-3xl font-semibold text-primary">{company.name}</h3>
                            </div>
                            <p className="text-muted-foreground flex-grow">{company.description}</p>
                        </div>
                    </motion.a>
                ))}
            </div>

            <div className="mt-12">
                <h3 className="text-2xl font-semibold tracking-tight text-white mb-6">Other Projects</h3>
                <div className="grid grid-cols-1 gap-4">
                    {otherProjects.map((project) => (
                        <motion.a
                            key={project.name}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                            className="flex items-center justify-between border bg-zinc-900 rounded-xl px-6 py-4 hover:bg-zinc-800 transition-colors group"
                        >
                            <span className="text-lg font-medium text-primary">{project.name}</span>
                            <ArrowRight className="size-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    ))}
                </div>
                <p className="text-lg text-muted-foreground mt-6 text-center italic"><span className="text-primary font-medium">+</span> truly many private repositories</p>
            </div>
        </section>
    )
}
