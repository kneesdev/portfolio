"use client";

import { useState } from "react";
import { ExternalLink } from "./external-link";
import { Signature } from "./signature";
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
  const [showEmail, setShowEmail] = useState(false);

  return (
    <footer id="contact" className="pt-8 border-t border-border">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex flex-col items-start gap-2">
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
          <button
            onClick={() => setShowEmail((x) => !x)}
            className="cursor-pointer text-sm text-muted-foreground underline decoration-dashed hover:text-foreground"
          >
            why is there no email?
          </button>
          {showEmail && (
            <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
              email is too asynchronous and i rarely check my inbox, so socials
              end up being faster for both of us. but if you really need it,
              it&apos;s{" "}
              <ExternalLink href="mailto:kneesdev@naver.com">
                kneesdev@naver.com
              </ExternalLink>
            </p>
          )}
        </div>
        <Signature className="w-16 opacity-60" />
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
