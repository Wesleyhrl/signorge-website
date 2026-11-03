import { Container } from "@/components/layout/container";
import ProcessStep, {
  PropsProcessStep,
} from "@/components/sections/differential/process-step";
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

export default function Differential() {
  return (
    <section className="bg-graphite py-14.5 mt-20 md:mt-24 lg:mt-30">
      <Container>
        <header className="flex flex-col gap-4">
          <h2
            id="services-heading"
            className="font-display font-semibold text-offwhite text-3xl sm:text-4xl xl:text-5xl max-w-184.25"
          >
            Um projeto claro do primeiro contato à entrega
          </h2>
          <p className="text-base text-offwhite sm:text-lg lg:text-xl xl:text-2xl xl:leading-[1.1]">
            Você participa das decisões importantes e sabe o que está sendo
            construído para o seu negócio.
          </p>
        </header>
        <div className="mt-13.5 grid grid-cols-3">
          {steps.map((step) => (
            <ProcessStep
              key={step.title}
              icon={step.icon}
              text={step.text}
              title={step.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
