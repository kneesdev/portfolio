'use client';

import { ChevronDown } from "lucide-react";
import { SpotifyPlaying } from "../spotify-playing";
import { motion } from "framer-motion";

const line1 = [
    { word: "I", isPrimary: false },
    { word: "Build", isPrimary: false },
    { word: "Functional", isPrimary: true },
    { word: ",", isPrimary: false },
];

const line2 = [
    { word: "Yet", isPrimary: false },
    { word: "Elegant", isPrimary: true },
    { word: "Products", isPrimary: false },
];

const wordVariants = {
    hidden: { opacity: 0, y: 12, filter: "blur(12px)" },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            delay: i * 0.02,
            duration: 0.4,
            ease: "easeInOut",
        },
    }),
};

export function Hero() {
    return (
        <section id="hero" className="flex flex-col justify-end items-start h-screen max-w-7xl mx-auto gap-6 px-6 sm:px-12 pb-24">
            <SpotifyPlaying />
            <div className="text-[48px] sm:text-[76px] lg:text-[120px] leading-none font-normal tracking-tight text-primary/70">
                <div className="flex flex-wrap gap-x-4">
                    {line1.map((item, lineIndex) => (
                        <div key={lineIndex} className="flex">
                            {item.word.split("").map((letter, i) => (
                                <motion.span
                                    key={i}
                                    custom={i + lineIndex * 10}
                                    initial="hidden"
                                    animate="visible"
                                    variants={wordVariants}
                                    className={item.isPrimary ? "text-primary font-medium" : ""}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-x-4 mt-4">
                    {line2.map((item, lineIndex) => (
                        <div key={lineIndex} className="flex">
                            {item.word.split("").map((letter, i) => (
                                <motion.span
                                    key={i}
                                    custom={i + lineIndex * 10 + line1.length * 10}
                                    initial="hidden"
                                    animate="visible"
                                    variants={wordVariants}
                                    className={item.isPrimary ? "text-primary font-medium" : ""}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="flex flex-col items-center text-primary"
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    );
}
