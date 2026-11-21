"use client";

import {
  animate,
  inView,
  motion,
  useMotionValue,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useId, useRef, type ReactNode } from "react";

const horizontalStart =
  "M0 0H196C209.255 0 220 10.745 220 24V78C220 91.255 230.745 102 244 102H435";
const horizontalEnd =
  "H634C647.255 102 658 112.745 658 126V180C658 193.255 668.745 204 682 204H870";
const verticalPath = "M1 0V100";

const connections = {
  horizontal: {
    bounds: [0, -1, 870, 206],
    paths: [horizontalStart, `M435 102${horizontalEnd}`],
    fullPath: horizontalStart + horizontalEnd,
    staticHighlight: "M81 0H181.5",
    highlightLength: 0.09,
    className:
      "absolute top-10.75 left-[calc((100%-1rem)/6)] hidden h-51.5 w-[calc((100%+0.5rem)*2/3)] lg:block",
  },
  vertical: {
    bounds: [0, 0, 2, 100],
    paths: [verticalPath],
    fullPath: verticalPath,
    staticHighlight: "M1 20V32",
    highlightLength: 0.12,
    className: "absolute top-0 left-6.75 h-full w-0.5 lg:hidden",
  },
};

export default function StepConnections({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const drawProgress = useMotionValue(0);
  const loopProgress = useMotionValue(0);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = false;
    let drawAnimation: ReturnType<typeof animate> | undefined;
    let loopAnimation: ReturnType<typeof animate> | undefined;

    function playLoop() {
      if (!isVisible || reducedMotion.matches || drawProgress.get() < 1) return;

      if (loopAnimation) {
        loopAnimation.play();
      } else {
        loopAnimation = animate(loopProgress, [0, 1], {
          duration: 3.5,
          ease: "linear",
          repeat: Infinity,
        });
      }
    }

    const stopObserving = inView(target, () => {
      isVisible = true;
      if (reducedMotion.matches) {
        drawProgress.jump(1);
      } else if (!drawAnimation && drawProgress.get() < 1) {
        drawAnimation = animate(drawProgress, 1, {
          delay: 0.8,
          duration: 1,
          ease: "linear",
          onComplete: playLoop,
        });
      } else {
        playLoop();
      }

      return () => {
        isVisible = false;
        loopAnimation?.pause();
      };
    });

    function updateMotionPreference() {
      if (reducedMotion.matches) {
        if (drawAnimation) {
          drawAnimation.stop();
          drawProgress.jump(1);
        }
        loopAnimation?.pause();
      } else {
        playLoop();
      }
    }

    reducedMotion.addEventListener("change", updateMotionPreference);
    return () => {
      isVisible = false;
      stopObserving();
      reducedMotion.removeEventListener("change", updateMotionPreference);
      drawAnimation?.stop();
      loopAnimation?.stop();
    };
  }, [drawProgress, loopProgress]);

  return (
    <div ref={ref} className="relative mt-13.5">
      <ConnectionSvg
        orientation="horizontal"
        drawProgress={drawProgress}
        loopProgress={loopProgress}
      />
      <ConnectionSvg
        orientation="vertical"
        drawProgress={drawProgress}
        loopProgress={loopProgress}
      />
      {children}
    </div>
  );
}

function ConnectionSvg({
  orientation,
  drawProgress,
  loopProgress,
}: {
  orientation: keyof typeof connections;
  drawProgress: MotionValue<number>;
  loopProgress: MotionValue<number>;
}) {
  const id = useId();
  const {
    bounds,
    paths,
    fullPath,
    staticHighlight,
    highlightLength,
    className,
  } = connections[orientation];
  const [x, y, width, height] = bounds;
  const maskBounds = { x, y, width, height };
  const pathOffset = useTransform(loopProgress, [0, 1], [-highlightLength, 1]);

  return (
    <svg
      viewBox={bounds.join(" ")}
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none text-slate ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Calibrate dashes in viewBox units while the original strokes keep their screen width. */}
        <mask id={`${id}-draw`} maskUnits="userSpaceOnUse" {...maskBounds}>
          <motion.path
            d={fullPath}
            stroke="white"
            strokeWidth="4"
            style={{ pathLength: drawProgress }}
          />
        </mask>
        <mask id={`${id}-loop`} maskUnits="userSpaceOnUse" {...maskBounds}>
          <motion.path
            d={fullPath}
            stroke="white"
            strokeWidth="4"
            initial={{ pathLength: highlightLength }}
            style={{ pathOffset }}
          />
        </mask>
      </defs>
      <g mask={`url(#${id}-draw)`} className="motion-reduce:[mask:none]">
        {paths.map((path) => (
          <path
            key={path}
            d={path}
            opacity="0.45"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>
      <path
        d={fullPath}
        strokeWidth="1.7"
        vectorEffect="non-scaling-stroke"
        mask={`url(#${id}-loop)`}
        className="motion-reduce:hidden"
      />
      <path
        d={staticHighlight}
        strokeWidth="1.7"
        vectorEffect="non-scaling-stroke"
        className="hidden motion-reduce:inline"
      />
    </svg>
  );
}
