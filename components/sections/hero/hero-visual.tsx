import HeroConnections from "@/components/sections/hero/hero-connections";
import TagHero from "@/components/sections/hero/tag-hero";
import {
  ScanSearch,
  Target,
  ChartNoAxesColumnIncreasing,
  ClipboardList,
  UserGroup,
} from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./hero.module.css";

const tagHeroBase = "absolute z-10 -translate-x-1/2 -translate-y-full";

const heroTags = [
  {
    text: "Contexto",
    icon: <ScanSearch />,
    position: "left-[12%] top-[3%]",
  },
  {
    text: "Objetivos",
    icon: <Target />,
    position: "left-[6%] sm:left-[2%] top-[42%]",
  },
  {
    text: "Oportunidades",
    icon: <ChartNoAxesColumnIncreasing />,
    position: "left-[56%] top-[25%]",
  },
  {
    text: "Público",
    icon: <UserGroup />,
    position: "left-[88%] top-[15%]",
  },
  {
    text: "Necessidades",
    icon: <ClipboardList />,
    position: "left-[88%] sm:left-[91%] top-[60%]",
  },
];

export default function HeroVisual() {
  return (
    <div className="flex flex-col justify-center items-center p-5 lg:p-0 lg:px-2 pb-16 md:pb-20 lg:pb-24">
      <div className="relative w-full max-w-112.75 ">
        <div className="relative z-0 w-full">
          {heroTags.map((tag, index) => (
            <div
              key={tag.text}
              className={`${tagHeroBase} ${tag.position}`}
              style={{ "--tag-glow-delay": `${-index}s` } as CSSProperties}
            >
              <TagHero text={tag.text} icon={tag.icon} />
            </div>
          ))}
          <HeroConnections
            className="block w-full h-auto px-2 md:px-0 "
            aria-hidden="true"
            focusable="false"
          />
        </div>
        <div className="relative z-20 mt-[-9%]">
          <div aria-hidden="true" className={styles.mockupGlow} />
          <motion.div
            className="relative z-10 motion-reduce:transform-none!"
            initial={false}
            animate={{ y: 0, rotate: 0 }}
            whileInView={{
              y: [0, -8, 0],
              rotate: [0, 0.5, 0],
              transition: {
                duration: 4.4,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <Image
              src="/mockup-website.png"
              alt="Ilustração de um site"
              width={420}
              height={439}
              className="mx-auto block h-auto w-[93%]"
              preload
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
