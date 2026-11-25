import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Introduction from "@/components/sections/sobre/introduction/introduction";
import Background from "@/components/sections/sobre/background/background";
import Technologies from "@/components/sections/sobre/technologies/technologies";
import FeaturedProjects from "@/components/sections/sobre/featured-projects/featured-projects";
import Signorge from "@/components/sections/sobre/signorge/signorge";
import Contact from "@/components/sections/sobre/contact/contact";
import { profileCard, siteOrigin } from "@/data/site";

const title = "Wesley Henrique – Desenvolvedor Full Stack";
const description =
  "Conheça a trajetória de Wesley Henrique, desenvolvedor Full Stack à frente da Signorge. Explore seu portfólio e projetos com React, Next.js, TypeScript e Python.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sobre" },
  openGraph: {
    type: "profile",
    siteName: "Signorge",
    locale: "pt_BR",
    url: "/sobre",
    images: [profileCard],
  },
  twitter: {
    card: "summary_large_image",
    images: [profileCard],
  },
};

const profile = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${siteOrigin}/sobre`,
  mainEntity: {
    "@type": "Person",
    name: "Wesley Henrique",
    jobTitle: "Desenvolvedor Full Stack",
    image: `${siteOrigin}/developer.webp`,
    sameAs: [
      "https://www.linkedin.com/in/wesleyhrl/",
      "https://github.com/Wesleyhrl",
    ],
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profile).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
