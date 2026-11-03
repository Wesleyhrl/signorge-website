import HeroConnections from "@/components/sections/hero/hero-connections";
import TagHero from "@/components/sections/hero/tag-hero";
import {
  ScanSearch,
  Target,
  ChartNoAxesColumnIncreasing,
  ClipboardList,
  UserGroup,
} from "lucide-react";
import Image from "next/image";
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
          {heroTags.map((tag) => (
            <div key={tag.text} className={`${tagHeroBase} ${tag.position}`}>
              <TagHero text={tag.text} icon={tag.icon}></TagHero>
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
          <Image
            src="/mockup-website.png"
            alt="Ilustração de um site"
            width={420}
            height={439}
            className="mx-auto  block w-[93%] h-auto relative z-10"
            preload
          />
        </div>
      </div>
    </div>
  );
}
