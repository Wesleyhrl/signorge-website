import { Container } from "@/components/layout/container";
import ServiceCard, { type ServiceCardProps } from "./service-card";
import { Reveal } from "@/components/motion/reveal";

const services: ServiceCardProps[] = [
  {
    title: "Landing Pages",
    description:
      "Para apresentar um serviço, oferta ou campanha de forma direta, clara e focada.",
    image: "/landing-pages-refinado.svg",
  },
  {
    title: "Sites Institucionais",
    description:
      "Para organizar a presença da empresa, comunicar seus serviços e transmitir profissionalismo e confiança.",
    image: "/sites-institucionais-refinado.svg",
  },
  {
    title: "Experiências Web",
    description:
      "Para ampliar ou atualizar sua presença digital com páginas comerciais, blogs, portais e reformulações.",
    image: "/experiencias-web-refinado.svg",
  },
  {
    title: "Software sob medida",
    description:
      "Quando a necessidade vai além de um site, desenvolvemos sistemas, dashboards, portais, integrações e automações adaptados à realidade do negócio.",
    image: "/software-sob-medida.svg",
    variant: "featured",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="scroll-mt-24"
    >
      <Container>
        <div className="mx-auto max-w-275">
          <header className="mx-auto flex max-w-250 flex-col gap-4 text-center">
            <Reveal delay={0.15}>
              <h2
                id="services-heading"
                className="font-display font-semibold text-graphite text-3xl sm:text-4xl xl:text-5xl"
              >
                Do entendimento à solução web
              </h2>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-base text-slate sm:text-lg lg:text-xl xl:text-2xl xl:leading-[1.1]">
                Uma boa solução começa pelo contexto: o que seu negócio precisa,
                o que seu público procura e como a presença digital pode ajudar.
                A partir desse entendimento, desenvolvemos a solução adequada
                para cada necessidade.
              </p>
            </Reveal>
          </header>

          <div className="mt-15 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-11 xl:gap-x-15">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 0.1 + 0.15}
                className={
                  service.variant === "featured" ? "grid lg:col-span-3" : "grid"
                }
              >
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <p className="mt-11 text-center text-base leading-none font-semibold text-slate sm:text-lg lg:mt-12 xl:text-2xl">
              Cada negócio tem uma necessidade diferente.
              <br />A solução começa por entendê-la.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
