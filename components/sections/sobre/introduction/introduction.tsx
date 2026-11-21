import Image from "next/image";
import { Container } from "@/components/layout/container";
import { DiamondMarker } from "@/components/shared/diamond-marker";
import portrait from "@/public/developer.png";
import { Reveal } from "@/components/motion/reveal";

export default function Introduction() {
  return (
    <section aria-labelledby="introduction-heading" className="pt-38">
      <Container>
        <div className="mx-auto grid max-w-300 items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_338px] lg:gap-16">
          <Reveal delay={0.15}>
          <div className="min-w-0">
            <p className="mb-4 flex items-center gap-2 text-sm font-medium text-slate">
              <DiamondMarker color="forge" />
              Sobre o desenvolvedor
            </p>
            <h1
              id="introduction-heading"
              className="font-display text-4xl leading-[1.1] font-semibold tracking-tight text-graphite sm:text-5xl xl:text-6xl"
            >
              Wesley Henrique
            </h1>
            <p className="mt-3 font-display text-xl font-medium text-signal sm:text-2xl">
              Desenvolvedor Full Stack
            </p>
            <div className="mt-6 max-w-[65ch] space-y-4 text-base leading-relaxed text-slate sm:mt-7 sm:text-lg">
              <p>
                Sou desenvolvedor web com experiência na construção de
                interfaces e aplicações utilizando tecnologias como React,
                Next.js, TypeScript, Node.js e Python.
              </p>
              <p>
                Tenho interesse em criar soluções funcionais, bem estruturadas e
                com atenção à experiência do usuário, desde a interface até as
                integrações e funcionalidades da aplicação.
              </p>
            </div>
          </div>
          </Reveal>
          <Reveal direction="left" delay={0.15}>
          <figure className="w-full max-w-84.5 justify-self-center lg:justify-self-end">
            <Image
              src={portrait}
              alt="Retrato ilustrado de Wesley Henrique à mesa de trabalho com um notebook."
              sizes="(max-width: 369px) calc(100vw - 40px), 330px"
              loading="eager"
              className="h-auto w-full rounded-2xl shadow-[10px_14px_3px_#6670854c]"
            />
          </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
