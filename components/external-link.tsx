"use client";

import type React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  hideArrow?: boolean;
}

export function ExternalLink({
  href,
  children,
  className = "",
  hideArrow = false,
}: ExternalLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center gap-1 text-muted-foreground hover:text-foreground ${className}`}
    >
      {children}
      {!hideArrow && <ArrowUpRightIcon className="h-3 w-3 opacity-0 group-hover:opacity-100" />}
    </Link>
  );
}
