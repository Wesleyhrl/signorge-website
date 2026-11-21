import { Container } from "@/components/layout/container";
import { portfolioProjects } from "@/data/sobre";
import PortfolioProjectCard from "./portfolio-project-card";
import { Reveal } from "@/components/motion/reveal";

export default function FeaturedProjects() {
  return (
    <section
      id="projetos"
      aria-labelledby="portfolio-heading"
      className="mt-20 scroll-mt-24 md:mt-24 lg:mt-30"
    >
      <Container>
        <div className="mx-auto max-w-300">
          <Reveal delay={0.15}>
            <header className="max-w-[65ch]">
              <h2
                id="portfolio-heading"
                className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
              >
                Projetos em destaque
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
                Uma seleção de projetos que representam meus conhecimentos e
                minha experiência prática em desenvolvimento.
              </p>
            </header>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
            {portfolioProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.1 + 0.15}>
              <PortfolioProjectCard  project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
