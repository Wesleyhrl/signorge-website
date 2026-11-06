import type { SVGProps } from "react";

export default function FinalCtaSymbol(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={720}
      height={522}
      viewBox="0 0 720 522"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#final-cta-symbol-clip)">
        <g
          stroke="white"
          strokeWidth={56}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={0.04}
        >
          <g data-part="left-curve">
            <path d="M348.91 -13.4379L169.931 211.663C106.761 291.111 121.521 367.683 181.107 415.06C244.003 465.069 315.908 435.793 379.077 356.345L400.134 329.863" />
          </g>
          <g data-part="right-curve">
            <path d="M414.023 557.029L593.002 331.928C656.172 252.48 641.412 175.908 581.826 128.531C518.93 78.522 447.025 107.799 383.856 187.246L362.799 213.729" />
          </g>
        </g>
        <g data-part="center-mark">
          <path
            d="M393.716 244.858L363.462 248.311C357.893 248.947 353.893 253.977 354.529 259.546L357.982 289.8C358.618 295.37 363.648 299.369 369.218 298.733L399.471 295.28C405.041 294.645 409.04 289.614 408.405 284.045L404.952 253.791C404.316 248.222 399.286 244.222 393.716 244.858Z"
            fill="white"
            fillOpacity={0.04}
          />
        </g>
      </g>
      <defs>
        <clipPath id="final-cta-symbol-clip">
          <rect
            width={580}
            height={513.542}
            fill="white"
            transform="translate(0 338.985) rotate(-51.5116)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
