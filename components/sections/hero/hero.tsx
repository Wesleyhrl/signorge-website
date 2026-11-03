import styles from "./hero.module.css";
import { DiamondMarker } from "@/components/shared/diamond-marker";
import { Container } from "@/components/layout/container";
import { ButtonSite } from "@/components/shared/button-site";
import HeroVisual from "@/components/sections/hero/hero-visual";

export default function Hero() {
  return (
    <section className="relative min-h-107.75 overflow-hidden">
      {/* Glows decorativos */}
      <div
        aria-hidden="true"
        className={`${styles.glows} pointer-events-none absolute inset-x-0 top-15 h-107.75`}
      />
      {/* Background de pontos */}
      <div
        aria-hidden="true"
        className=" pointer-events-none absolute inset-x-0 top-0 h-107.75 bg-[url('/decorations/dot-grid.svg')] bg-repeat-x opacity-[0.42]"
      />
      {/* Conteúdo da Hero */}
      <div className="pt-18 relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mt-20">
            <header>
              <div className="flex gap-2 items-center mb-6.5">
                <DiamondMarker color="signal" />
                <span className="text-slate text-sm lg:text-base">
                  Desenvolvimento Web
                </span>
              </div>
              <div className="flex flex-col gap-10">
                <div>
                  <h1 className="text-3xl sm:text-4xl xl:text-5xl font-display font-semibold">
                    Seu negócio não precisa de mais um site.
                    <br />
                    Precisa da solução certa. <br />
                    <span className="text-signal">Lading Page</span>
                  </h1>
                </div>
                <p className="text-base text-slate sm:text-lg lg:text-xl xl:text-2xl xl:leading-[1.1]">
                  Entendemos seu contexto, seu público e seus objetivos para
                  construir uma solução web alinhada às necessidades do seu
                  negócio.
                </p>
                <div className="flex flex-col  sm:flex-row  gap-4 items-center">
                  <ButtonSite variant="primary">
                    Fale Sobre seu Projeto
                  </ButtonSite>
                  <ButtonSite variant="outline">Ver Projetos</ButtonSite>
                </div>
              </div>
            </header>
            <HeroVisual />
          </div>
        </Container>
      </div>
    </section>
  );
}
