import Image from "next/image";
import { DiamondMarker } from "@/components/shared/diamond-marker";

export type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  variant?: "default" | "featured";
};

export default function ServiceCard({
  title,
  description,
  image,
  variant = "default",
}: ServiceCardProps) {
  const featured = variant === "featured";

  return (
    <article
      className={`flex min-w-0 flex-col items-center justify-center gap-6 rounded-2xl border border-[#c1c1c1] bg-[#fcfcfc] px-4.5 py-7 shadow-[0_4px_20px_#9f9f9f2b] lg:gap-7.5 ${
        featured
          ? "lg:col-span-3 lg:min-h-64 lg:flex-row lg:py-3.5"
          : "lg:min-h-110"
      }`}
    >
      <div className={`w-full max-w-75 shrink-0 ${featured ? "lg:w-75" : ""}`}>
        <Image
          src={image}
          alt=""
          aria-hidden="true"
          width={400}
          height={300}
          className="block h-auto w-full"
        />
      </div>

      <div className={`w-full min-w-0 ${featured ? "lg:flex-1" : ""}`}>
        <div className="flex items-center gap-2 pl-0.5">
          <DiamondMarker className="size-2 sm:size-3 xl:size-4" color="forge" />
          <h3 className="text-xl leading-tight font-semibold text-graphite xl:text-[26px]">
            {title}
          </h3>
        </div>
        <p className="mt-3 text-base leading-snug text-slate xl:text-xl xl:leading-[1.15]">
          {description}
        </p>
      </div>
    </article>
  );
}
