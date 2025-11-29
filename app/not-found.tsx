import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Nav />

      {/* questionable color choices, i know x2 */}
      <main className="bg-primary-foreground dark:bg-card mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-20 md:mb-28">
          <h1 className="text-3xl font-medium mb-4">you seem lost</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            i don’t think you should be here, because this page doesn&apos;t exist. or maybe it does. i don&apos;t know, this message was written ages ago.
          </p>
        </header>

        <Footer />
      </main>
    </div>
  );
}
