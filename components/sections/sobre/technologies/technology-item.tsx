import type { Technology } from "@/data/sobre";

export default function TechnologyItem({ name, icon: Icon }: Technology) {
  return (
    <span className="flex items-center gap-2.5 rounded-lg border border-border bg-offwhite px-3 py-1.5 text-sm leading-6 text-graphite">
      <Icon aria-hidden="true" focusable="false" className="size-6 shrink-0" />
      <span>{name}</span>
    </span>
  );
}
