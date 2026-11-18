import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons/github-icon";
import type { PortfolioProject } from "@/data/sobre";

type PortfolioProjectCardProps = {
  project: PortfolioProject;
};

export default function PortfolioProjectCard({
  project,
}: PortfolioProjectCardProps) {
  const { id, title, description, technologies, image, demoUrl, githubUrl } =
    project;

  return (
    <article
      aria-labelledby={`${id}-heading`}
      className="flex min-w-0 flex-col rounded-2xl border border-border bg-background shadow-sm"
    >
      {image && (
        <div className="relative aspect-video shrink-0 overflow-hidden rounded-t-2xl border-b border-border bg-offwhite">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            loading="lazy"
            sizes="(min-width: 1264px) 582px, (min-width: 1024px) calc(50vw - 50px), (min-width: 768px) calc(50vw - 38px), (min-width: 640px) calc(100vw - 50px), calc(100vw - 34px)"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3
          id={`${id}-heading`}
          className="font-display text-xl leading-tight font-semibold tracking-tight wrap-anywhere sm:text-2xl"
        >
          {title}
        </h3>
        <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-slate">
          {description}
        </p>
        <ul aria-label="Tecnologias" className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md bg-offwhite px-2.5 py-1 text-xs leading-5 text-graphite"
            >
              {technology}
            </li>
          ))}
        </ul>
        {(demoUrl || githubUrl) && (
          <div className="mt-auto flex flex-wrap gap-x-6 gap-y-1 pt-4">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium text-graphite underline-offset-4 transition-colors outline-none hover:text-signal hover:underline focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4 motion-reduce:transition-none"
              >
                Visualizar projeto
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 text-signal"
                />
                <span className="sr-only"> — {title} (abre em nova aba)</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-medium text-graphite underline-offset-4 transition-colors outline-none hover:text-signal hover:underline focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4 motion-reduce:transition-none"
              >
                <GitHubIcon aria-hidden="true" className="size-5" />
                GitHub
                <ArrowUpRight aria-hidden="true" className="size-4" />
                <span className="sr-only"> — {title} (abre em nova aba)</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
