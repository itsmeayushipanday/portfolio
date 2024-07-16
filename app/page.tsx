import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Footer from "../components/Footer";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center overflow-clip items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Projects />
        <Grid />
        <Education />
        <Footer />
      </div>
    </main>
  );
}
