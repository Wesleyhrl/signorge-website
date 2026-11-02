import type { ComponentProps } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "cn";

const variants = {
  primary: "border-signal bg-signal text-offwhite hover:bg-signal/90",
  outline: "border-signal text-signal hover:bg-signal/10",
} as const;

export type ButtonSiteProps = ComponentProps<"button"> & {
  variant?: keyof typeof variants;
  showChevron?: boolean;
};

export function ButtonSite({
  children,
  className,
  variant = "primary",
  showChevron = variant === "primary",
  type = "button",
  ...props
}: ButtonSiteProps) {
  return (
    <button
      type={type}
      className={cn(
        "w-max flex justify-center items-center gap-1.25 rounded-xl border px-5 py-4 font-sans text-base font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none cursor-pointer",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
      {showChevron && (
        <ChevronRight aria-hidden="true" className="size-3.5" strokeWidth={3} />
      )}
    </button>
  );
}
