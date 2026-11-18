import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/container";

export default function Signorge() {
  return (
    <section
      aria-labelledby="signorge-heading"
      className="mt-20 bg-graphite py-17 text-offwhite md:mt-24 lg:mt-30"
    >
      <Container>
        <div className="mx-auto grid max-w-300 gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/signorge-symbol.svg"
              alt=""
              width={48}
              height={48}
              className="size-10 shrink-0 sm:size-12"
            />
            <h2
              id="signorge-heading"
              className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
            >
              A Signorge
            </h2>
          </div>
          <div className="max-w-[65ch] space-y-4 text-base leading-relaxed text-offwhite/85">
            <p>
              A Signorge é um estúdio de desenvolvimento web que criei para
              transformar necessidades de negócios em soluções digitais.
            </p>
            <p>
              Sou responsável pelo planejamento, design e desenvolvimento do
              projeto, aplicando meus conhecimentos técnicos e explorando
              diferentes etapas da criação de produtos web.
            </p>
            <Link
              href="/"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium text-offwhite underline decoration-offwhite/40 underline-offset-4 transition-colors outline-none hover:decoration-offwhite focus-visible:ring-2 focus-visible:ring-offwhite focus-visible:ring-offset-4 focus-visible:ring-offset-graphite motion-reduce:transition-none"
            >
              Conheça a Signorge
              <ArrowUpRight aria-hidden="true" className="size-4 text-forge" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
