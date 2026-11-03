import type { SVGProps } from "react";

type StepConnectionsProps = SVGProps<SVGSVGElement> & {
  orientation: "horizontal" | "vertical";
};

export default function StepConnections({
  orientation,
  className,
  ...props
}: StepConnectionsProps) {
  const horizontal = orientation === "horizontal";

  return (
    <svg
      viewBox={horizontal ? "0 -1 870 206" : "0 0 2 100"}
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none text-slate ${className ?? ""}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {horizontal ? (
        <>
          <path
            d="M0 0H196C209.255 0 220 10.745 220 24V78C220 91.255 230.745 102 244 102H435"
            opacity="0.45"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M435 102H634C647.255 102 658 112.745 658 126V180C658 193.255 668.745 204 682 204H870"
            opacity="0.45"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M81 0H181.5"
            strokeWidth="1.7"
            vectorEffect="non-scaling-stroke"
          />
        </>
      ) : (
        <>
          <path d="M1 0V100" opacity="0.45" vectorEffect="non-scaling-stroke" />
          <path
            d="M1 20V32"
            strokeWidth="1.7"
            vectorEffect="non-scaling-stroke"
          />
        </>
      )}
    </svg>
  );
}
