import { ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { GitHubIcon } from "@/components/icons/github-icon";
import { Container } from "@/components/layout/container";

const linkClassName =
  "inline-flex min-h-11 items-center gap-2 rounded-sm font-medium text-graphite underline-offset-4 transition-colors outline-none hover:text-signal hover:underline focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4 motion-reduce:transition-none";

const externalLinks = {
  linkedin: "https://www.linkedin.com/in/wesleyhrl/",
  github: "https://github.com/Wesleyhrl",
};

export default function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-heading"
      className="mt-20 scroll-mt-24 pb-16 md:mt-24 md:pb-20 lg:mt-30 lg:pb-24"
    >
      <Container>
        <div className="mx-auto max-w-300">
          <h2
            id="contact-heading"
            className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl"
          >
            Onde me encontrar
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-slate sm:text-lg">
            Estou aberto a oportunidades profissionais, novos desafios e
            colaborações na área de desenvolvimento de software.
          </p>
          <ul className="mt-8 grid w-fit grid-cols-2 gap-x-5 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-8">
            <li>
              <a
                href={externalLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                <LinkedInIcon aria-hidden="true" className="size-5 shrink-0" />
                LinkedIn
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 shrink-0 text-slate"
                />
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
            <li>
              <a
                href={externalLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                <GitHubIcon aria-hidden="true" className="size-5 shrink-0" />
                GitHub
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 shrink-0 text-slate"
                />
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
