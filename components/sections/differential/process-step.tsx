import { ReactNode } from "react";

export type PropsProcessStep = {
  title: string;
  text: string;
  icon: ReactNode;
};

export default function ProcessStep({ text, title, icon }: PropsProcessStep) {
  return (
    <div className="flex flex-col items-center gap-3.75 py-4 max-w-102.75 min-h-57.25">
      <div className="flex items-center justify-center rounded-full size-14 bg-signal text-offwhite">
        <div className="[&>svg]:size-full size-7.5">{icon}</div>
      </div>
      <div className="flex flex-col items-center gap-3 py-2 text-offwhite">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-xl leading-[1.15] text-center">{text}</p>
      </div>
    </div>
  );
}
