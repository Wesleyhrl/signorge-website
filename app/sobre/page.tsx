import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Introduction from "@/components/sections/sobre/introduction/introduction";
import Background from "@/components/sections/sobre/background/background";
import Technologies from "@/components/sections/sobre/technologies/technologies";
import FeaturedProjects from "@/components/sections/sobre/featured-projects/featured-projects";
import Signorge from "@/components/sections/sobre/signorge/signorge";
import Contact from "@/components/sections/sobre/contact/contact";

export const metadata: Metadata = {
  title: "Wesley Henrique - Desenvolvedor Full Stack | Signorge",
  description:
    "Conheça a trajetória, as tecnologias e os projetos de Wesley Henrique, desenvolvedor Full Stack à frente da Signorge.",
};

export default function Sobre() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Background />
        <Technologies />
        <FeaturedProjects />
        <Signorge />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
