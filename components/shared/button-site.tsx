import type { ComponentProps } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "cn";

const variants = {
  primary: "border-signal bg-signal text-offwhite hover:bg-signal/90",
  outline: "border-signal text-signal hover:bg-signal/10",
};

export type ButtonSiteProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  showChevron?: boolean;
};

export function ButtonSite({
  children,
  href,
  className,
  variant = "primary",
  showChevron = false,
  ...props
}: ButtonSiteProps) {
  const classes = cn(
    "inline-flex max-w-full items-center justify-center gap-1.25 rounded-xl border px-5 py-4 font-sans text-base font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 motion-reduce:transition-none",
    variants[variant],
    className,
  );

  const content = (
    <>
      {children}
      {showChevron && (
        <ChevronRight
          aria-hidden="true"
          className="size-3.5 shrink-0"
          strokeWidth={3}
        />
      )}
    </>
  );

  if (typeof href === "string" && href.startsWith("#")) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
