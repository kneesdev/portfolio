'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "./ui/button"
import { usePathname, useRouter } from 'next/navigation'

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Tech Stack', href: '#tech-stack' },
]

export function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map((item) => item.href.substring(1));

            let currentSection = "";
            let minDistance = Number.MAX_VALUE;

            sections.forEach((section) => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    const distance = Math.abs(rect.top)
                    if (distance < minDistance && rect.top <= 100) {
                        minDistance = distance
                        currentSection = section
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollToSection = (href: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
        if (e) {
            e.preventDefault();
        }

        if (open) setOpen(false);

        const targetId = href.substring(1);

        if (pathname !== "/") {
            sessionStorage.setItem("scrollToSection", targetId);
            router.push("/");
            return;
        }

        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            setActiveSection(targetId);
        }
    };

    useEffect(() => {
        const storedSection = sessionStorage.getItem("scrollToSection");

        if (storedSection && pathname === "/") {
            sessionStorage.removeItem("scrollToSection");

            setTimeout(() => {
                const element = document.getElementById(storedSection);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    })
                    setActiveSection(storedSection);
                }
            }, 500)
        }
    }, [pathname]);

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-border/70' : ''}`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-12 py-4">
                <div className="flex items-center gap-4">
                    <img
                        src="https://avatars.githubusercontent.com/u/74821251"
                        alt=""
                        draggable={false}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <div className="text-sm font-semibold">lee (wyzux)</div>
                        <div className="text-xs text-primary/70">Full-stack Developer</div>
                    </div>
                </div>

                <nav className="relative hidden md:flex text-sm font-medium">
                    {navItems.map((item, index) => (
                        <div
                            key={item.href}
                            className="group/menu-item relative px-3 py-2"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {hoveredIndex === index && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className={`absolute inset-0 bg-muted/50 rounded-md z-0`}
                                    transition={{ type: 'spring', bounce: 0.3, duration: 0.5 }}
                                />
                            )}
                            <a
                                href={item.href}
                                onClick={(e) => scrollToSection(item.href, e)}
                                className={`relative z-10 font-semibold group-hover/menu-item:text-primary transition-colors ${activeSection === item.href.substring(1)
                                    ? "text-primary"
                                    : "text-primary/70"
                                    }`}
                            >
                                {item.label}
                            </a>
                        </div>
                    ))}
                </nav>

                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                    <Button onClick={(e) => scrollToSection("#contact")}>
                        Contact
                    </Button>
                </motion.div>
            </div>
        </motion.header>
    )
}