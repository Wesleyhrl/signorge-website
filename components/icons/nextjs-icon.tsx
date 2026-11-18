import type { SVGProps } from "react";

export function NextJsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 128 128"
      aria-hidden="true"
      {...props}
    >
      <circle cx="64" cy="64" r="64" />
      <path
        fill="url(#nextjs-0)"
        d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
      />
      <path fill="url(#nextjs-1)" d="M81.778 38.4h8.533v51.2h-8.533z" />
      <defs>
        <linearGradient
          id="nextjs-0"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
          gradientTransform="scale(.71111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="nextjs-1"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
          gradientTransform="scale(.71111)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
