import { Container } from "@/components/layout/container";
import { ButtonSite } from "@/components/shared/button-site";
import FinalCtaSymbol from "./final-cta-symbol";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative isolate mt-16 bg-graphite text-offwhite md:mt-20 lg:mt-24"
    >
      {/* O recorte fica restrito às decorações, preservando conteúdo e foco. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Grid pontilhado */}
        <div className="absolute inset-0 bg-[url('/decorations/dot-grid-2.svg')] bg-repeat" />

        <div className="absolute inset-0 mx-auto max-w-360 hidden sm:block">
          <div className="absolute top-1/2 right-0 w-[clamp(20rem,50vw,45rem)] max-w-full translate-x-[calc(100%/36)] -translate-y-1/2">
            <FinalCtaSymbol className="block h-auto w-full overflow-visible" />
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Container>
          <div className="mx-auto flex items-center py-16 md:py-20 lg:min-h-130.5 lg:py-24">
            <div className="max-w-160">
              <div className="flex flex-col gap-6 md:gap-4">
                <h2 className="font-display text-3xl leading-tight font-semibold sm:text-4xl xl:text-5xl xl:leading-none">
                  Seu próximo site começa com uma conversa.
                </h2>

                <p className="max-w-150 text-base sm:text-lg lg:text-xl lg:leading-[1.2]">
                  Quer criar um site ou melhorar o que já tem? Conte o que seu
                  negócio precisa. Vamos entender o contexto e definir juntos a
                  solução mais adequada.
                </p>
              </div>
              <ButtonSite
                className="mt-10"
                href="#"
                variant="primary"
                showChevron
              >
                Fale sobre seu projeto
              </ButtonSite>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
