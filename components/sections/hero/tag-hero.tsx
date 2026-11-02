import type { ReactNode } from "react";

interface TagHeroProps {
  text: string;
  icon: ReactNode;
}

export default function TagHero({ text, icon }: TagHeroProps) {
  return (
    <div className="flex w-max items-center justify-center gap-1 sm:gap-1.5 rounded-xl bg-white px-2 sm:px-3 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      <span className="whitespace-nowrap text-xs sm:text-base">{text}</span>

      <div
        aria-hidden="true"
        className="flex size-4 sm:size-4.5 shrink-0 items-center justify-center text-signal [&>svg]:size-full [&>svg]:stroke-[1.75]"
      >
        {icon}
      </div>
    </div>
  );
}
