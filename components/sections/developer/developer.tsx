import Image from "next/image";
import { Container } from "@/components/layout/container";
import { ButtonSite } from "@/components/shared/button-site";
import { DiamondMarker } from "@/components/shared/diamond-marker";

export default function Developer() {
  return (
    <section
      id="sobre"
      aria-labelledby="developer-heading"
      className="mt-20 scroll-mt-24 pb-4 md:mt-24 lg:mt-30"
    >
      <Container>
        <div className="grid max-w-300 grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_330px] lg:gap-16 xl:gap-33">
          <div className="min-w-0">
            <div className="flex flex-col gap-6 xl:gap-7.5">
              <h2
                id="developer-heading"
                className="font-display text-3xl font-semibold text-graphite sm:text-4xl xl:text-5xl xl:leading-none"
              >
                Por trás da Signorge
              </h2>
              <p className="border-l-2 border-signal py-0.5 pl-3.5 text-xl leading-tight font-medium text-graphite italic sm:text-2xl xl:text-[26px] xl:leading-none">
                Perceber o que importa.
                <br />
                Construir o que faz sentido.
              </p>
              <p className="max-w-[65ch] text-base lg:leading-[1.3] text-slate sm:text-lg">
                Sou Wesley Henrique, desenvolvedor à frente da Signorge. Entendo
                com você o objetivo do negócio, defino o que o site precisa
                comunicar e transformo essas decisões em uma experiência web
                clara para as pessoas que vão usá-la.
              </p>
            </div>
            <ButtonSite
              href="/sobre"
              className="mt-8 max-w-full xl:mt-9.5"
              showChevron
            >
              Conheça minha trajetória
            </ButtonSite>
          </div>

          <figure className="relative w-full max-w-82.5 justify-self-center overflow-hidden rounded-[10px] shadow-[10px_14px_3px_#6670854c] lg:justify-self-end">
            <Image
              src="/developer.png"
              alt="Retrato ilustrado de Wesley Henrique à mesa de trabalho com um notebook."
              width={330}
              height={412}
              sizes="(max-width: 361px) calc(100vw - 32px), 330px"
              loading="lazy"
              className="block h-auto w-full"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex min-h-22.5 flex-col justify-center gap-1.5 bg-linear-to-b from-black/0 via-black/45 to-black/65 px-5 py-5 text-offwhite backdrop-blur-[2px]">
              <div className="flex items-center gap-1.5">
                <DiamondMarker color="forge" className="size-1.5" />
                <span className="text-base leading-none font-bold">
                  Wesley Henrique
                </span>
              </div>
              <span className="text-sm leading-[1.15] font-medium">
                Desenvolvedor Full Stack
              </span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
