import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects/projects";
import Services from "@/components/sections/services/services";
import Header from "./../components/layout/header";
import Differential from "@/components/sections/differential/differential";
import Developer from "@/components/sections/developer/developer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Differential />
      <Developer />
    </main>
  );
}
