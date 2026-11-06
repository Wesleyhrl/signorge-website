import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects/projects";
import Services from "@/components/sections/services/services";
import Header from "./../components/layout/header";
import Differential from "@/components/sections/differential/differential";
import Developer from "@/components/sections/developer/developer";
import FinalCTA from "@/components/sections/final-cta/final-cta";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Differential />
        <Developer />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
