import Image from "next/image";
import { Expand, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  title,
  category,
  description,
  thumbnail,
  thumbnailAlt,
  fullImage,
  fullImageAlt,
}: Project) {
  return (
    <Dialog>
      <article className="relative w-full max-w-124 overflow-hidden rounded-lg bg-graphite shadow-[0_2px_12px_#00000029]">
        <Image
          src={thumbnail}
          alt={thumbnailAlt}
          sizes="(max-width: 527px) calc(100vw - 32px), 496px"
          loading="lazy"
          className="block h-auto w-full"
        />

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-linear-to-b from-black/0 to-black/70 px-5 pt-8 pb-5 text-offwhite">
          <div className="flex min-w-0 flex-col items-start gap-2">
            <span className="rounded-full bg-forge px-2.5 py-1 text-sm leading-[1.1] font-medium">
              {category}
            </span>
            <h3 className="font-display text-2xl leading-none font-semibold">
              {title}
            </h3>
            <p className="text-xs leading-tight">{description}</p>
          </div>
          <Expand aria-hidden="true" className="size-6 shrink-0" />
        </div>
        <DialogTrigger
          type="button"
          aria-label={`Ver projeto ${title}`}
          className="absolute inset-0 cursor-pointer rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-inset"
        />
      </article>
      <DialogContent
        showCloseButton={false}
        className="flex max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-275 flex-col gap-0 overflow-hidden p-0 sm:max-w-275"
      >
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-border px-4 py-3">
          <DialogTitle className="min-w-0 font-display font-semibold wrap-anywhere">
            {title}
          </DialogTitle>
          <DialogClose
            aria-label="Fechar projeto"
            render={
              <Button
                variant="ghost"
                size="icon"
                className="size-11 cursor-pointer motion-reduce:transition-none"
              />
            }
          >
            <X aria-hidden="true" className="size-5" />
          </DialogClose>
        </header>
        <DialogDescription className="sr-only">
          Visualização completa do projeto {title}. Role para ver toda a imagem.
        </DialogDescription>
        <div
          role="region"
          aria-label={`Imagem completa de ${title}`}
          tabIndex={0}
          className="min-h-0 overflow-y-auto overscroll-contain outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-inset"
        >
          <Image
            src={fullImage}
            alt={fullImageAlt}
            sizes="(max-width: 1132px) calc(100vw - 32px), 1100px"
            loading="eager"
            placeholder="blur"
            className="block h-auto w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
