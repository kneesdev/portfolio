'use client'

import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import { SiGithub, SiX, SiDiscord } from '@icons-pack/react-simple-icons';
import { Button } from '@/components/ui/button';

export function Footer() {
    return (
        <footer className="mt-20 border-t border-border/70 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 py-12 flex flex-col md:flex-row justify-between gap-8">
                <div>
                    <div className="text-lg font-semibold">lee (wyzux)</div>
                    <div className="text-sm text-primary/70">Full-stack Developer</div>
                </div>

                <div className="flex gap-2 text-primary/70">
                    <motion.a
                        href="https://github.com/kneesdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className="hover:text-primary transition-colors"
                    >
                        <Button size="icon" variant="outline">
                            <SiGithub />
                        </Button>
                    </motion.a>
                    <motion.a
                        // old id: 892038814921547898
                        href="https://discord.com/users/305734491169882115"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className="hover:text-primary transition-colors"
                    >
                        <Button size="icon" variant="outline">
                            <SiDiscord />
                        </Button>
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com/in/kneesdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className="hover:text-primary transition-colors"
                    >
                        <Button size="icon" variant="outline">
                            <Linkedin />
                        </Button>
                    </motion.a>
                    <motion.a
                        href="https://x.com/wvzyx_"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className="hover:text-primary transition-colors"
                    >
                        <Button size="icon" variant="outline">
                            <SiX />
                        </Button>
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