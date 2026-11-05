import type { Metadata } from "next";
import Header from "@/components/layout/header";
import { Container } from "@/components/layout/container";
import { ButtonSite } from "@/components/shared/button-site";

export const metadata: Metadata = {
  title: "Minha trajetória | Signorge",
  description: "Conheça Wesley Henrique, desenvolvedor à frente da Signorge.",
};

export default function Sobre() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 sm:pt-40">

      </main>
    </>
  );
}
