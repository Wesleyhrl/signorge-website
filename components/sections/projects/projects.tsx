import { Container } from "@/components/layout/container";
import ProjectCard from "./project-card";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 py-16 lg:py-24"
    >
      <Container>
        <header className="flex flex-col gap-4">
          <h2
            id="projects-heading"
            className="font-display text-3xl font-semibold text-graphite sm:text-4xl xl:text-5xl"
          >
            O que entendemos.{" "}
            <span className="text-forge">O que construímos.</span>
          </h2>
          <p className="text-base text-slate sm:text-lg lg:text-xl xl:text-2xl xl:leading-[1.1]">
            Sites e experiências web criados a partir das necessidades de cada
            negócio.
          </p>
        </header>
        <div className="mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
