import { Container } from "@/components/layout/container";
import ProjectsCarousel from "./projects-carousel";
import { Suspense } from "react";
import { Reveal } from "@/components/motion/reveal";

export default function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 pb-6 mt-20 md:mt-24 lg:mt-30"
    >
      <Container>
        <header className="flex flex-col gap-4">
          <Reveal delay={0.15}>
            <h2
              id="projects-heading"
              className="font-display text-3xl font-semibold text-graphite sm:text-4xl xl:text-5xl"
            >
              O que entendemos.{" "}
              <span className="text-forge">O que construímos.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-base text-slate sm:text-lg lg:text-xl xl:text-2xl xl:leading-[1.1]">
              Sites e experiências web criados a partir das necessidades de cada
              negócio.
            </p>
          </Reveal>
        </header>
      </Container>
      <Suspense fallback={null}>
        <ProjectsCarousel />
      </Suspense>
    </section>
  );
}
