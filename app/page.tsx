import type { Metadata } from "next";
import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects/projects";
import Services from "@/components/sections/services/services";
import Header from "./../components/layout/header";
import Differential from "@/components/sections/differential/differential";
import Developer from "@/components/sections/developer/developer";
import FinalCTA from "@/components/sections/final-cta/final-cta";
import Footer from "@/components/layout/footer";
import { siteOrigin, studioCard } from "@/data/site";

const title = "Desenvolvimento web para empresas | Signorge";
const description =
  "A Signorge desenvolve landing pages, sites institucionais e software sob medida. Conheça os projetos do estúdio e converse sobre o que seu negócio precisa.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Signorge",
    locale: "pt_BR",
    url: "/",
    title,
    description,
    images: [studioCard],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [studioCard],
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Signorge",
  url: siteOrigin,
  inLanguage: "pt-BR",
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
