import type { ReactNode } from "react";
import { cn } from "cn";
import * as motion from "motion/react-client";

type RevealProps = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  distance = 20,
  className,
}: RevealProps) {
  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }[direction];

  return (
    <motion.div
      className={cn(
        "motion-reduce:opacity-100! motion-reduce:transform-none!",
        className,
      )}
      initial={{ opacity: 0, ...offset }}
      whileInView={
        direction === "none" ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
