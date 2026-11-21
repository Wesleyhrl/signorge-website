import type { StaticImageData } from "next/image";
import cybercogniThumbnail from "@/public/projects/mini-cybercogni.webp";
import cybercogniFullImage from "@/public/projects/cybercogni.webp";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: StaticImageData;
  thumbnailAlt: string;
  fullImage: StaticImageData;
  fullImageAlt: string;
};

export const projects: Project[] = [
  {
    id: "cybercogni",
    title: "CYBERCOGNI",
    category: "Landing Page",
    description:
      "Estrutura comercial para apresentar um serviço de IA e direcionar o visitante ao contato.",
    thumbnail: cybercogniThumbnail,
    thumbnailAlt:
      "Prévia da página da Cybercogni, com fundo escuro e mão robótica.",
    fullImage: cybercogniFullImage,
    fullImageAlt:
      "Página escura com uma mão robótica e a chamada: Atendimento perfeito. Zero fila de espera.",
  },
  {
    id: "cybercogni-2",
    title: "CYBERCOGNI",
    category: "Landing Page",
    description:
      "Estrutura comercial para apresentar um serviço de IA e direcionar o visitante ao contato.",
    thumbnail: cybercogniThumbnail,
    thumbnailAlt:
      "Prévia da página da Cybercogni, com fundo escuro e mão robótica.",
    fullImage: cybercogniFullImage,
    fullImageAlt:
      "Página escura com uma mão robótica e a chamada: Atendimento perfeito. Zero fila de espera.",
  },
  {
    id: "cybercogni-3",
    title: "CYBERCOGNI",
    category: "Landing Page",
    description:
      "Estrutura comercial para apresentar um serviço de IA e direcionar o visitante ao contato.",
    thumbnail: cybercogniThumbnail,
    thumbnailAlt:
      "Prévia da página da Cybercogni, com fundo escuro e mão robótica.",
    fullImage: cybercogniFullImage,
    fullImageAlt:
      "Página escura com uma mão robótica e a chamada: Atendimento perfeito. Zero fila de espera.",
  },
  {
    id: "cybercogni-4",
    title: "CYBERCOGNI",
    category: "Landing Page",
    description:
      "Estrutura comercial para apresentar um serviço de IA e direcionar o visitante ao contato.",
    thumbnail: cybercogniThumbnail,
    thumbnailAlt:
      "Prévia da página da Cybercogni, com fundo escuro e mão robótica.",
    fullImage: cybercogniFullImage,
    fullImageAlt:
      "Página escura com uma mão robótica e a chamada: Atendimento perfeito. Zero fila de espera.",
  },
];
