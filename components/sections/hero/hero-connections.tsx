import { useId, type SVGProps } from "react";
import styles from "./hero.module.css";

const diamondPath =
  "M205.678 311.178C204.897 310.397 204.897 309.131 205.678 308.35L216.991 297.036C217.772 296.255 219.039 296.255 219.82 297.036L231.133 308.35C231.914 309.131 231.914 310.397 231.133 311.178L219.82 322.492C219.039 323.273 217.772 323.273 216.991 322.492L205.678 311.178Z";

const connections = [
  {
    name: "objetivos",
    d: "M0.737305 153.231C0.737305 153.231 8.36898 194.703 37.2568 217.122C66.1447 239.541 151.183 224.126 180.257 246.122C209.33 268.119 218.757 303.622 218.757 303.622",
    cx: 75.2578,
    cy: 228.622,
    duration: "4.1s",
    begin: "-1.6s",
  },
  {
    name: "contexto",
    d: "M55.8773 0.916805C55.8773 0.916805 40.2274 58.4281 56.3951 92.4153C84.665 151.843 177.637 163.164 206.696 233.567C219.984 265.76 219.598 304.495 219.598 304.495",
    cx: 49.2578,
    cy: 41.622,
    duration: "4.9s",
    begin: "-0.6s",
  },
  {
    name: "oportunidades",
    d: "M254.926 96.2919C254.926 96.2919 263.661 128.635 260.264 149.622C254.521 185.099 228.782 215.788 222.764 253.122C219.481 273.487 219.598 303.495 219.598 303.495",
    cx: 240.264,
    cy: 203.622,
    duration: "3.2s",
    begin: "-1.7s",
  },
  {
    name: "publico",
    d: "M392.121 42.0146C392.121 42.0146 390.381 84.7133 374.764 112.622C344.824 166.127 272.248 188.831 240.764 245.622C225.414 273.309 218.264 305.622 218.264 305.622",
    cx: 341.264,
    cy: 151.622,
    duration: "4.6s",
    begin: "-2.8s",
  },
  {
    name: "necessidades",
    d: "M449.764 223.122C449.764 223.122 430.554 257.048 404.764 266.622C378.973 276.196 304.188 252.146 278.264 259.622C252.339 267.098 218.264 305.122 218.264 305.122",
    cx: 266.264,
    cy: 264.622,
    duration: "3.7s",
    begin: "-3s",
  },
];

export default function HeroConnections(props: SVGProps<SVGSVGElement>) {
  const id = useId();
  return (
    <svg
      width="451"
      height="381"
      viewBox="0 0 451 381"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className={styles.dashedLine}
        d="M218.264 316.622V380.622"
        stroke="var(--color-forge)"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      {connections.map(({ name, d, cx, cy, duration, begin }) => {
        const pathId = `${id}-${name}`;
        return (
          <g key={name} fill="var(--color-signal)">
            <path
              id={pathId}
              d={d}
              fill="none"
              stroke="var(--color-signal)"
              strokeWidth="1.5"
            />
            <circle className={styles.staticDot} cx={cx} cy={cy} r="4" />
            <circle className={styles.movingDot} r="4">
              <animateMotion
                dur={duration}
                begin={begin}
                repeatCount="indefinite"
                calcMode="paced"
              >
                <mpath href={`#${pathId}`} />
              </animateMotion>
            </circle>
          </g>
        );
      })}
      <path
        className={styles.diamondRipple}
        d={diamondPath}
        stroke="var(--color-forge)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
        opacity="0"
      />
      <path d={diamondPath} fill="var(--color-forge)" />
    </svg>
  );
}
