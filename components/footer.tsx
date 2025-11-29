"use client";

import { ExternalLink } from "./external-link";
import {
  SiGithub,
  SiX,
  SiDiscord,
  SiNextdotjs,
} from "@icons-pack/react-simple-icons";

const socials = [
  { label: "github", icon: SiGithub, href: "https://github.com/kneesdev" },
  { label: "twitter", icon: SiX, href: "https://x.com/leesiure" },
  {
    label: "discord",
    icon: SiDiscord,
    href: "https://discord.com/users/305734491169882115",
  },
];

export function Footer() {
  return (
    <footer id="contact" className="pt-8 border-t border-border">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="font-medium mb-1">get in touch</h2>
          <p className="text-sm text-muted-foreground">let&apos;s chat :)</p>
        </div>
        <div className="flex gap-3 text-sm">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <ExternalLink key={social.label} href={social.href} hideArrow>
                {Icon && <Icon className="size-5" />}
              </ExternalLink>
            );
          })}
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-12 flex items-center gap-1">
        © {new Date().getFullYear()} lee. built with{" "}
        <ExternalLink href="https://nextjs.org">
          <SiNextdotjs className="w-3 h-3 inline-block" /> next.js
        </ExternalLink>
      </p>
    </footer>
  );
}
