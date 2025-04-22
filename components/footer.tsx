'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="mt-20 border-t border-border/70 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 flex flex-col md:flex-row justify-between gap-8">
                <div>
                    <div className="text-lg font-semibold">lee (wyzux)</div>
                    <div className="text-sm text-primary/70">Full-stack Developer</div>
                </div>

                <div className="flex gap-4 text-xl text-primary/70">
                    <motion.a
                        href="https://github.com/kneesdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className="hover:text-primary transition"
                    >
                        <Github />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/kneesdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className="hover:text-primary transition"
                    >
                        <Linkedin />
                    </motion.a>
                    <motion.a
                        href="https://x.com/wvzyx_"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className="hover:text-primary transition"
                    >
                        <Twitter />
                    </motion.a>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center text-xs text-primary/50 py-4"
            >
                © {new Date().getFullYear()} wyzux/KneesDev. All rights reserved.
            </motion.div>
        </footer>
    )
}