import type { ReactNode } from "react";

export type PropsProcessStep = {
  title: string;
  text: string;
  icon: ReactNode;
};

export default function ProcessStep({ text, title, icon }: PropsProcessStep) {
  return (
    <div className="relative z-10 flex w-full items-center gap-4 lg:mx-auto lg:min-h-57.25 lg:max-w-102.75 lg:flex-col lg:items-center lg:gap-3.75 lg:py-4">
      <div
        aria-hidden="true"
        className="flex size-14 shrink-0 items-center justify-center rounded-full bg-signal text-offwhite"
      >
        <div className="[&>svg]:size-full size-7.5">{icon}</div>
      </div>
      <div className="flex min-w-0 flex-col items-start gap-3 text-offwhite lg:items-center lg:py-2">
        <h3 className="text-xl font-semibold lg:text-2xl">{title}</h3>
        <p className="text-base leading-[1.15] lg:text-center lg:text-xl">
          {text}
        </p>
      </div>
    </div>
  );
}
