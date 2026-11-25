import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { studioCard } from "@/data/site";

const title = "Política de Privacidade";
const description =
  "Conheça o tratamento de dados pessoais no site e no atendimento da Signorge, o canal de privacidade e seus direitos pela LGPD.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/politica-de-privacidade" },
  openGraph: {
    type: "website",
    siteName: "Signorge",
    locale: "pt_BR",
    url: "/politica-de-privacidade",
    images: [studioCard],
  },
  twitter: {
    card: "summary_large_image",
    images: [studioCard],
  },
};

const privacyEmail = "contato.signorge@gmail.com";
const sectionTitleClassName =
  "font-display text-xl leading-tight font-semibold text-graphite sm:text-2xl";
const linkClassName =
  "rounded-sm font-medium wrap-anywhere text-graphite underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2";

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-16 sm:pt-38 sm:pb-24">
        <Container>
          <article className="mx-auto max-w-[65ch] text-base leading-relaxed text-slate sm:text-lg">
            <header className="space-y-4">
              <h1 className="font-display text-3xl leading-tight font-semibold tracking-tight text-graphite sm:text-4xl lg:text-5xl">
                Política de Privacidade
              </h1>
              <p className="text-sm font-medium">
                atualizada em <time dateTime="2026-11-25">25/11/2026</time>
              </p>
              <p>
                Esta política explica como os dados pessoais são tratados na
                navegação no site da Signorge e no atendimento por WhatsApp e
                e-mail. Ela também informa como exercer os direitos previstos na
                Lei Geral de Proteção de Dados Pessoais (LGPD, Lei nº
                13.709/2018).
              </p>
            </header>

            <div className="mt-8 space-y-8 border-t border-border pt-8 sm:mt-10 sm:space-y-10 sm:pt-10">
              <section className="space-y-3">
                <h2 className={sectionTitleClassName}>
                  Responsável pelo tratamento de dados
                </h2>
                <p>
                  Signorge é a marca comercial de Wesley Henrique de Lima,
                  profissional autônomo que atua como pessoa física e é o
                  controlador dos dados pessoais abrangidos por esta política.
                </p>
                <p>
                  Como agente de tratamento de pequeno porte, o controlador está
                  dispensado de indicar encarregado pelo art. 11 da Resolução
                  CD/ANPD nº 2/2022. Para dúvidas sobre privacidade ou
                  solicitações sobre seus dados, escreva para{" "}
                  <a href={`mailto:${privacyEmail}`} className={linkClassName}>
                    {privacyEmail}
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className={sectionTitleClassName}>
                  Dados pessoais tratados
                </h2>
                <p>
                  A navegação é aberta, sem cadastro, e o site não tem
                  formulário de contato. Quando você escreve por WhatsApp ou
                  e-mail, a Signorge pode tratar seu nome, telefone, endereço de
                  e-mail e informações do projeto necessárias para atender à
                  solicitação.
                </p>
                <p>
                  Os dados técnicos que a hospedagem pode registrar durante a
                  navegação ainda estão em verificação.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className={sectionTitleClassName}>
                  Finalidades e bases legais
                </h2>
                <p>
                  Os dados serão usados para responder a solicitações, preparar
                  orçamentos e propostas, contratar e prestar serviços e
                  oferecer suporte aos clientes. O art. 7º, V, da LGPD se aplica
                  quando os dados são necessários para atender a um pedido seu
                  antes de um contrato que você pretende firmar ou para executar
                  um contrato do qual você seja parte.
                </p>
                <p>
                  Para responder a contatos gerais, inclusive de representantes
                  de empresas, a Signorge utiliza o legítimo interesse (art. 7º,
                  IX, da LGPD). A finalidade é atender à solicitação recebida,
                  usando apenas os dados necessários para compreender o pedido e
                  responder. Esse uso corresponde à expectativa de quem inicia o
                  contato. A limitação ao atendimento, o acesso restrito ao
                  controlador e os direitos descritos nesta política ajudam a
                  proteger as pessoas envolvidas. Quando o tratamento for
                  exigido por uma obrigação legal ou regulatória, aplica-se o
                  art. 7º, II, da LGPD.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className={sectionTitleClassName}>
                  Cookies e tecnologias de rastreamento
                </h2>
                <p>
                  A aplicação do site não usa cookies, armazenamento persistente
                  no navegador nem ferramentas de rastreamento. O uso dessas
                  tecnologias pela hospedagem em produção ainda está em
                  verificação.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className={sectionTitleClassName}>
                  Compartilhamento e serviços de terceiros
                </h2>
                <p>
                  WhatsApp Business e Gmail serão usados para trocar mensagens
                  de atendimento. O site também contém links para LinkedIn,
                  GitHub e uma demonstração externa de projeto. Ao acessar esses
                  serviços, você pode consultar seus avisos de privacidade para
                  saber como cada plataforma trata dados pessoais.
                </p>
                <p>
                  WhatsApp Business e Gmail podem processar ou armazenar dados
                  fora do Brasil. O WhatsApp informa que suas operações incluem
                  os Estados Unidos e outros países. Para as transferências de
                  informações de contato abrangidas pelos termos do WhatsApp
                  Business, o adendo global incorpora as cláusulas-padrão
                  contratuais aprovadas pela ANPD. O Google informa que utiliza
                  mecanismos de transferência, como decisões de adequação e,
                  quando necessário, cláusulas-padrão contratuais aprovadas pela
                  ANPD. Essas cláusulas estabelecem obrigações de proteção dos
                  dados e respeito aos direitos dos titulares. Mais informações
                  estão disponíveis no{" "}
                  <a
                    href="https://www.whatsapp.com/legal/brazil-privacy-notice?lang=pt"
                    className={linkClassName}
                  >
                    aviso de privacidade do WhatsApp para o Brasil
                  </a>
                  , no{" "}
                  <a
                    href="https://www.whatsapp.com/legal/DTA?lang=pt_br"
                    className={linkClassName}
                  >
                    adendo global do WhatsApp Business
                  </a>{" "}
                  e nas{" "}
                  <a
                    href="https://policies.google.com/privacy/frameworks?hl=pt-BR"
                    className={linkClassName}
                  >
                    estruturas de transferência de dados do Google
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className={sectionTitleClassName}>
                  Armazenamento e segurança
                </h2>
                <p>
                  As mensagens de atendimento ficam principalmente no WhatsApp
                  Business e no Gmail. Quando necessário, informações do projeto
                  também podem ser mantidas em arquivos no computador do
                  controlador. Na Signorge, o acesso a esses registros é
                  restrito ao controlador.
                </p>
                <p>
                  Os dados serão conservados pelo tempo necessário ao
                  atendimento e à execução dos serviços ou enquanto sua
                  conservação for permitida ou exigida por lei. Quando não
                  houver mais necessidade nem fundamento legal para
                  conservá-los, serão excluídos dos registros mantidos pela
                  Signorge.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className={sectionTitleClassName}>Seus direitos</h2>
                <p>
                  Conforme o caso, você pode exercer os seguintes direitos
                  previstos na LGPD.
                </p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Confirmação do tratamento, acesso e correção dos dados.
                  </li>
                  <li>
                    Anonimização, bloqueio ou eliminação de dados
                    desnecessários, excessivos ou tratados em desacordo com a
                    lei.
                  </li>
                  <li>
                    Portabilidade dos dados nas condições previstas na LGPD e
                    informação sobre as entidades com as quais os dados foram
                    compartilhados.
                  </li>
                  <li>
                    Informações sobre a possibilidade de recusar o consentimento
                    e suas consequências, revogação do consentimento e
                    eliminação de dados tratados com essa base, observadas as
                    exceções legais.
                  </li>
                  <li>
                    Oposição ao tratamento realizado sem consentimento quando
                    houver descumprimento da LGPD.
                  </li>
                  <li>
                    Revisão de decisões tomadas exclusivamente por tratamento
                    automatizado que afetem seus interesses, quando houver.
                  </li>
                </ul>
                <p>
                  Você pode enviar sua solicitação gratuitamente para{" "}
                  <a href={`mailto:${privacyEmail}`} className={linkClassName}>
                    {privacyEmail}
                  </a>
                  .
                </p>
                <p>
                  Se a sua solicitação não for resolvida pelo controlador, você
                  pode{" "}
                  <a
                    href="https://www.gov.br/anpd/pt-br/canais_atendimento/cidadao-titular-de-dados/denuncia-peticao-de-titular-referente-lgpd"
                    className={linkClassName}
                  >
                    apresentar uma petição à ANPD
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3">
                <h2 className={sectionTitleClassName}>
                  Alterações nesta política
                </h2>
                <p>
                  Esta política pode ser atualizada quando mudarem as
                  funcionalidades do site, as atividades da Signorge ou os
                  requisitos legais aplicáveis. A versão atualizada e sua data
                  de revisão ficarão disponíveis nesta página.
                </p>
              </section>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
