import { Container } from "@/components/layout/container";
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
      aria-labelledby="differential-heading"
      className="bg-graphite py-14.5 mt-20 md:mt-24 lg:mt-30"
    >
      <Container>
        <header className="flex flex-col gap-4">
          <h2
            id="differential-heading"
            className="font-display font-semibold text-offwhite text-3xl sm:text-4xl xl:text-5xl max-w-184.25"
          >
            Um projeto claro do primeiro contato à entrega
          </h2>
          <p className="text-base text-offwhite sm:text-lg lg:text-xl xl:text-2xl xl:leading-[1.1]  max-w-184.25">
            Você participa das decisões importantes e sabe o que está sendo
            construído para o seu negócio.
          </p>
        </header>
        <div className="relative mt-13.5">
          <StepConnections
            orientation="horizontal"
            className="absolute top-10.75 left-[calc((100%-1rem)/6)] hidden h-51.5 w-[calc((100%+0.5rem)*2/3)] lg:block"
          />
          <StepConnections
            orientation="vertical"
            className="absolute top-0 left-6.75 h-full w-0.5 lg:hidden"
          />
          <ol className="grid grid-cols-1 gap-14 lg:grid-cols-3 lg:gap-2">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className={`relative min-w-0 first:before:pointer-events-none first:before:absolute first:before:top-0 first:before:left-6.75 first:before:h-1/2 first:before:w-0.5 first:before:bg-graphite last:after:pointer-events-none last:after:absolute last:after:bottom-0 last:after:left-6.75 last:after:h-1/2 last:after:w-0.5 last:after:bg-graphite lg:before:hidden lg:after:hidden ${stepOffsets[index]}`}
              >
                <ProcessStep {...step} />
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
