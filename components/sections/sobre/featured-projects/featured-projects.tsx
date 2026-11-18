import { Container } from "@/components/layout/container";
import { portfolioProjects } from "@/data/sobre";
import PortfolioProjectCard from "./portfolio-project-card";

export default function FeaturedProjects() {
  return (
    <section
      id="projetos"
      aria-labelledby="portfolio-heading"
      className="mt-20 scroll-mt-24 md:mt-24 lg:mt-30"
    >
      <Container>
        <div className="mx-auto max-w-300">
          <header className="max-w-[65ch]">
            <h2
              id="portfolio-heading"
              className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
            >
              Projetos em destaque
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              Uma seleção de projetos que representam meus conhecimentos e minha
              experiência prática em desenvolvimento.
            </p>
          </header>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
            {portfolioProjects.map((project) => (
              <PortfolioProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
