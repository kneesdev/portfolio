"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

interface WorkItemProps {
  company: string;
  role: string;
  period: string;
  href: string;
  description: string;
}

export function WorkItem({
  company,
  role,
  period,
  href,
  description,
}: WorkItemProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 -mx-5 rounded-lg hover:bg-muted/50"
    >
      <div className="grid md:grid-cols-[140px_1fr] gap-1 md:gap-8">
        <div className="flex md:flex-col justify-between md:justify-start gap-2">
          <span className="text-sm text-muted-foreground font-mono">
            {period}
          </span>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-medium">{company}</h3>
            <span className="text-muted-foreground/50">/</span>
            <p className="text-muted-foreground">{role}</p>
            <ArrowUpRightIcon className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100" />
          </div>
          <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Link>
  );
}
