"use client";

import { A11y, Navigation, Mousewheel, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";

import { projects } from "@/data/projects";
import ProjectCard from "./project-card";

import styles from "./projects-carousel.module.css";

export default function ProjectsCarousel() {
  return (
    <Swiper
      className={`mt-7 ${styles.carousel} overflow-x-clip! overflow-y-visible!`}
      modules={[A11y, Navigation, Mousewheel, FreeMode]}
      freeMode={{
        enabled: true,
        sticky: true,
      }}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1
      }}
      slidesPerView="auto"
      centeredSlides
      spaceBetween={24}
      breakpoints={{
        1024: { spaceBetween: 70 },
      }}
      navigation
      speed={600}
      focusableElements="input, select, option, textarea, video, label"
    >
      {projects.map((project, index) => (
        <SwiperSlide
          key={project.id}
          className={`max-w-[min(90%,496px)] py-3 ${
            index % 2 === 1 ? "lg:pt-9" : ""
          }`}
        >
          <ProjectCard {...project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
