import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import ProcessStep, {
  type PropsProcessStep,
} from "@/components/sections/differential/process-step";
import StepConnections from "@/components/sections/differential/step-connections";
import { BadgeCheck, Compass, MessageCircleMore } from "lucide-react";

const steps: PropsProcessStep[] = [
  {
    title: "Conversa direta",
    text: "Fale diretamente com quem conduz e desenvolve o seu projeto.",
    icon: <MessageCircleMore />,
  },
  {
    title: "Direção alinhada",
    text: "Alinhamos objetivo, escopo e etapas antes de começar a construção.",
    icon: <Compass />,
  },
  {
    title: "Entrega cuidada",
    text: "Testamos a solução antes da publicação e orientamos você sobre o que foi entregue.",
    icon: <BadgeCheck />,
  },
];

const stepOffsets = ["lg:pt-0", "lg:pt-25.5", "lg:pt-51"];

export default function Differential() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="differential-heading"
      className="bg-graphite py-14.5 mt-20 scroll-mt-24 md:mt-24 lg:mt-30"
    >
      <Container>
        <header className="flex flex-col gap-4">
          <Reveal delay={0.15}>
            <h2
              id="differential-heading"
              className="font-display font-semibold text-offwhite text-3xl sm:text-4xl xl:text-5xl max-w-184.25"
            >
              Um projeto claro do primeiro contato à entrega
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-base text-offwhite sm:text-lg lg:text-xl xl:text-2xl xl:leading-[1.1]  max-w-184.25">
              Você participa das decisões importantes e sabe o que está sendo
              construído para o seu negócio.
            </p>
          </Reveal>
        </header>
        <StepConnections>
          <ol className="grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-2">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className={`relative min-w-0 first:before:pointer-events-none first:before:absolute first:before:top-0 first:before:left-6.75 first:before:h-1/2 first:before:w-0.5 first:before:bg-graphite last:after:pointer-events-none last:after:absolute last:after:bottom-0 last:after:left-6.75 last:after:h-1/2 last:after:w-0.5 last:after:bg-graphite lg:before:hidden lg:after:hidden ${stepOffsets[index]}`}
              >
                <Reveal delay={index * 0.12} className="relative z-10">
                  <ProcessStep {...step} />
                </Reveal>
              </li>
            ))}
          </ol>
        </StepConnections>
      </Container>
    </section>
  );
}
