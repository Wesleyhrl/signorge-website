"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const services = [
  "Site Institucional",
  "Landing Page",
  "Página de Vendas",
  "Catálogo Digital",
  "Site de Agendamento",
  "Sistema sob medida",
];

export function AnimatedServiceText() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <span className="block text-signal" aria-hidden="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={services[index]}
          className="inline-block"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          {services[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
