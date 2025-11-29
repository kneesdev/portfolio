import type React from "react";
interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`mb-20 md:mb-28 ${className}`}>
      {title && (
        <h2 className="text-sm font-medium font-mono text-foreground mb-8 tracking-wide">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
