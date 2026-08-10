import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <Navbar />
      <Hero />
      <div id="about" className="scroll-mt-20">
        <Skills />
      </div>
      <div id="projects" className="scroll-mt-20">
        <Projects />
      </div>
      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
