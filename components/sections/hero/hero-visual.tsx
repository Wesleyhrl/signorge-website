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

export default function HeroVisual() {
  return (
    <div className="flex flex-col justify-center items-center p-5 lg:p-0 lg:px-2  pb-12 md:pb-16 lg:pb-20">
      <div className="relative w-full max-w-112.75 ">
        <div className="relative z-0 w-full">
          <div className="absolute z-10 left-[12%] top-[3%] -translate-x-1/2 -translate-y-full">
            <TagHero text="Contexto" icon={<ScanSearch />} />
          </div>
          <div className="absolute z-10 left-[6%] sm:left-[2%] top-[42%] -translate-x-1/2 -translate-y-full">
            <TagHero text="Objetivos" icon={<Target />} />
          </div>

          <div className="absolute z-10 left-[56%] top-[25%] -translate-x-1/2 -translate-y-full">
            <TagHero
              text="Oportunidades"
              icon={<ChartNoAxesColumnIncreasing />}
            />
          </div>
          <div className="absolute z-10 left-[88%] top-[15%] -translate-x-1/2 -translate-y-full">
            <TagHero text="Público" icon={<UserGroup />} />
          </div>

          <div className="absolute z-10 left-[88%] sm:left-[91%] top-[60%] -translate-x-1/2 -translate-y-full">
            <TagHero text="Necessidades" icon={<ClipboardList />} />
          </div>

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
