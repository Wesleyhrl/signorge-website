import type { StaticImageData } from "next/image";
import claraThumbnail from "@/public/projects/mini-clara.webp";
import claraFullImage from "@/public/projects/clara.webp";
import nexotechThumbnail from "@/public/projects/mini-nexotech.webp";
import nexotechFullImage from "@/public/projects/nexotech.webp";
import cleanlarThumbnail from "@/public/projects/mini-cleanlar.webp";
import cleanlarFullImage from "@/public/projects/cleanlar.webp";
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
    id: "clara",
    title: "CLARA",
    category: "Landing Page",
    description:
      "Página para apresentar bolos e doces artesanais e facilitar encomendas.",
    thumbnail: claraThumbnail,
    thumbnailAlt:
      "Prévia da página da Confeitaria da Clara, com um bolo de morango.",
    fullImage: claraFullImage,
    fullImageAlt:
      "Página da Confeitaria da Clara com bolos, doces e informações para encomendas.",
  },
  {
    id: "nexotech",
    title: "NEXOTECH",
    category: "Landing Page",
    description:
      "Página para apresentar serviços de informática e receber pedidos de orçamento.",
    thumbnail: nexotechThumbnail,
    thumbnailAlt:
      "Prévia da página da NexoTech, com a imagem de um computador aberto.",
    fullImage: nexotechFullImage,
    fullImageAlt:
      "Página da NexoTech com serviços de montagem, manutenção e suporte de computadores.",
  },
  {
    id: "cleanlar",
    title: "CLEANLAR",
    category: "Landing Page",
    description:
      "Página para apresentar a higienização de estofados e facilitar pedidos de orçamento.",
    thumbnail: cleanlarThumbnail,
    thumbnailAlt: "Prévia da página da CleanLar, com a imagem de um sofá.",
    fullImage: cleanlarFullImage,
    fullImageAlt:
      "Página da CleanLar com serviços de higienização de estofados e exemplo de antes e depois.",
  },
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
];
