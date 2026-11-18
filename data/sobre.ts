import { GitBranch, Network } from "lucide-react";
import type { StaticImageData } from "next/image";
import type { ComponentType, SVGProps } from "react";
import { AwsIcon } from "@/components/icons/aws-icon";
import { BootstrapIcon } from "@/components/icons/bootstrap-icon";
import { CssIcon } from "@/components/icons/css-icon";
import { CypressIcon } from "@/components/icons/cypress-icon";
import { FastApiIcon } from "@/components/icons/fastapi-icon";
import { FigmaIcon } from "@/components/icons/figma-icon";
import { GitIcon } from "@/components/icons/git-icon";
import { GitHubIcon } from "@/components/icons/github-icon";
import { HtmlIcon } from "@/components/icons/html-icon";
import { JavaScriptIcon } from "@/components/icons/javascript-icon";
import { JestIcon } from "@/components/icons/jest-icon";
import { MongoDbIcon } from "@/components/icons/mongodb-icon";
import { MysqlIcon } from "@/components/icons/mysql-icon";
import { NextJsIcon } from "@/components/icons/nextjs-icon";
import { NodeJsIcon } from "@/components/icons/nodejs-icon";
import { PostgreSqlIcon } from "@/components/icons/postgresql-icon";
import { PythonIcon } from "@/components/icons/python-icon";
import { ReactIcon } from "@/components/icons/react-icon";
import { TailwindCssIcon } from "@/components/icons/tailwind-css-icon";
import { TypeScriptIcon } from "@/components/icons/typescript-icon";
import reviewSentimentumImage from "../public/projects/sobre/review-sentimentum.jpg";
import ticketFluiImage from "../public/projects/sobre/ticket-flui.jpg";

export type Technology = {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

type TechnologyGroup = {
  id: string;
  title: string;
  technologies: Technology[];
};

export const technologyGroups: TechnologyGroup[] = [
  {
    id: "frontend",
    title: "Front-end",
    technologies: [
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextJsIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "Tailwind CSS", icon: TailwindCssIcon },
      { name: "Bootstrap", icon: BootstrapIcon },
    ],
  },
  {
    id: "backend",
    title: "Back-end",
    technologies: [
      { name: "Node.js", icon: NodeJsIcon },
      { name: "Python", icon: PythonIcon },
      { name: "FastAPI", icon: FastApiIcon },
      { name: "APIs REST", icon: Network },
    ],
  },
  {
    id: "databases",
    title: "Banco de dados",
    technologies: [
      { name: "PostgreSQL", icon: PostgreSqlIcon },
      { name: "MongoDB", icon: MongoDbIcon },
      { name: "MySQL", icon: MysqlIcon },
    ],
  },
  {
    id: "tools",
    title: "Ferramentas e outros conhecimentos",
    technologies: [
      { name: "Git", icon: GitIcon },
      { name: "GitHub", icon: GitHubIcon },
      { name: "Jest", icon: JestIcon },
      { name: "Cypress", icon: CypressIcon },
      { name: "Figma", icon: FigmaIcon },
      { name: "AWS", icon: AwsIcon },
      { name: "CI/CD", icon: GitBranch },
    ],
  },
];

export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  // Use uma captura em 16:9 com pelo menos 1280 × 720 px.
  image?: { src: StaticImageData; alt: string };
  demoUrl?: string;
  githubUrl?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "review-sentimentum",
    title: "Review Sentimentum",
    description:
      "Plataforma Full Stack (FARM Stack) de análise de sentimentos para e-commerce. Processou +53 mil avaliações via Web Scraping e utiliza IA (RoBERTa Fine-Tuned) com 91,5% de acurácia para transformar dados brutos em insights de apoio à decisão.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "MongoDB",
      "Selenium",
      "RoBERTa",
      "Tailwind",
    ],
    image: {
      src: reviewSentimentumImage,
      alt: "Análise de um produto no Review Sentimentum com estatísticas e gráficos de sentimento e confiança da IA.",
    },
    demoUrl: "https://reviewsentimentum.vercel.app/",
    githubUrl: "https://github.com/Wesleyhrl/tcc_sentiment-analysis-ecommerce",
  },
  {
    id: "ticket-flui",
    title: "Ticket Flui",
    description:
      "Sistema Full Stack para gerenciamento de atendimentos, desenvolvido para pequenas equipes de suporte. Centraliza solicitações, distribui demandas automaticamente por menor carga de trabalho e controla o ciclo completo do atendimento com autenticação JWT e controle de permissões por perfil.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "SQLite",
      "Jest",
      "Tailwind",
    ],
    image: {
      src: ticketFluiImage,
      alt: "Painel do Ticket Flui com formulário, indicadores de status e fila de chamados.",
    },
    githubUrl: "https://github.com/Wesleyhrl/ticket-flui",
  },
];
