import { Container } from "@/components/layout/container";

export default function Background() {
  return (
    <section
      id="trajetoria"
      aria-labelledby="background-heading"
      className="mt-16 scroll-mt-24 md:mt-20 lg:mt-24"
    >
      <Container>
        <div className="mx-auto grid max-w-300 gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12">
          <h2
            id="background-heading"
            className="font-display text-3xl leading-tight font-semibold tracking-tight before:mb-4 before:block before:h-0.5 before:w-8 before:rounded-full before:bg-signal sm:text-4xl"
          >
            Minha trajetória
          </h2>
          <div className="max-w-[65ch] space-y-5 text-base leading-relaxed text-slate sm:text-lg">
            <p>
              Sou formado em{" "}
              <strong className="font-medium text-graphite">
                Sistemas de Informação pela PUC Minas
              </strong>{" "}
              e minha trajetória na tecnologia começou na área de suporte
              técnico, onde desenvolvi habilidades de análise, resolução de
              problemas e compreensão de sistemas.
            </p>
            <p>
              Posteriormente, passei a atuar no desenvolvimento web,
              participando de projetos como um MVP para uma startup e um sistema
              de gestão de estoque para uma instituição social.
            </p>
            <p>
              Desde então, venho ampliando meus conhecimentos por meio de
              projetos próprios, explorando diferentes tecnologias e áreas do
              desenvolvimento de software.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
