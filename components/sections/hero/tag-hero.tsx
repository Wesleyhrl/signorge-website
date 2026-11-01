import type { ReactNode } from "react";

interface TagHeroProps {
    text: string;
    icon: ReactNode;

}

export default function TagHero({text, icon}:TagHeroProps) {
    return (
        <div className="flex items-center justify-center gap-1.5 w-max bg-white rounded-xl px-3 py-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <span className="text-base">{text}</span>
            <div className="flex size-4.5 shrink-0 items-center justify-center text-signal [&>svg]:size-full [&>svg]:stroke-[1.75]">{icon}</div>
        </div>
    );
}