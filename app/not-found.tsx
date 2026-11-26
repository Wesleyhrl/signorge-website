import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ButtonSite } from "@/components/shared/button-site";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center bg-offwhite py-16 sm:py-24">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-8 text-center">
          <Image
            src="/logo/signorge-symbol.svg"
            alt="Signorge"
            width={64}
            height={64}
            loading="eager"
          />
          <div className="space-y-4">
            <h1 className="font-display text-3xl leading-tight font-semibold tracking-tight text-graphite sm:text-4xl lg:text-5xl">
              404 — Página não encontrada
            </h1>
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              Confira o endereço ou volte à página inicial.
            </p>
          </div>
          <ButtonSite href="/">Voltar à página inicial</ButtonSite>
        </div>
      </Container>
    </main>
  );
}
