import { Container } from "@/components/layout/container";
import { technologyGroups } from "@/data/sobre";
import TechnologyItem from "@/components/sections/sobre/technologies/technology-item";

export default function Technologies() {
  return (
    <section
      id="tecnologias"
      aria-labelledby="technologies-heading"
      className="mt-16 scroll-mt-24 md:mt-20 lg:mt-24"
    >
      <Container>
        <div className="mx-auto max-w-300">
          <h2
            id="technologies-heading"
            className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
          >
            Tecnologias que utilizo
          </h2>
          <div className="mt-7 divide-y divide-border sm:mt-9">
            {technologyGroups.map((group) => (
              <div
                key={group.id}
                className="grid gap-4 py-5 first:pt-0 last:pb-0 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12 lg:py-6"
              >
                <h3
                  id={`technologies-${group.id}`}
                  className="max-w-64 text-base leading-snug font-semibold lg:pt-2"
                >
                  {group.title}
                </h3>
                <ul
                  aria-labelledby={`technologies-${group.id}`}
                  className="flex flex-wrap gap-2.5 sm:gap-3"
                >
                  {group.technologies.map(({ name, icon }) => (
                    <li key={name}>
                      <TechnologyItem name={name} icon={icon} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
