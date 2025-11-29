"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

interface ProjectProps {
  name: string;
  description: string;
  tags?: string[];
  href: string;
}

export function Project({ name, description, tags, href }: ProjectProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 -mx-5 rounded-lg hover:bg-muted/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium mb-1 flex items-center gap-2">
            {name}
            <ArrowUpRightIcon className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100" />
          </h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
          {tags && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
