"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/", label: "home" },
  { href: "/writing", label: "writing" },
];

export function Nav() {
  const pathname = usePathname();
  const isPost = pathname.startsWith("/writing/") && pathname !== "/writing";

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-background mx-auto max-w-3xl z-50">
        <div className="mx-auto max-w-3xl pl-3 pr-6 py-4 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/" className="font-medium text-foreground">
              lee
            </Link>
          </div>
          <span className="text-muted-foreground/50">/</span>
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            const label =
              link.href === "/writing" && isPost ? "post" : link.label;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-foreground underline decoration-dashed"
                    : "text-muted-foreground hover:text-foreground hover:underline hover:decoration-dashed"
                }
              >
                {label}
              </Link>
            );
          })}
          <div className="flex items-center gap-3 ml-auto">
            {/* just in case i wanna add more stuff */}
            <Link
              href="/#contact"
              className="text-muted-foreground hover:text-foreground hover:underline hover:decoration-dashed"
            >
              contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="pointer-events-none mx-auto max-w-3xl absolute inset-x-0 top-16 h-10 bg-gradient-to-b from-background/70 to-transparent" />
    </div>
  );
}
