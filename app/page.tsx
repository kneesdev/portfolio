import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";
import { Contact } from "@/components/sections/contact";

export default function Landing() {
  return (
    <>
      <div>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#63e_20%,#000_70%)]"></div>
        <Hero />
      </div>
      <About />
      <TechStack />
      <Contact />
    </>
  );
}
