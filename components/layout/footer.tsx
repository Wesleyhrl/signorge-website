import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Container } from "@/components/layout/container";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="min-h-55 border-t border-slate/25 bg-graphite pt-10 text-offwhite md:pt-12">
      <Container>
        <div className="lg:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            <div>
              <Image
                src="/logo/signorge-logo-secondary.svg"
                alt="Signorge"
                width={720}
                height={155}
                loading="lazy"
                className="h-auto w-45"
              />
              <p className="text-base leading-4 font-semibold">
                Desenvolvimento Web
              </p>
              <p className="mt-3 text-sm leading-none text-offwhite/70">
                Entendemos o negócio.
                <br />
                Construímos a solução.
              </p>
            </div>

            <div className="flex flex-col items-start gap-1 md:items-end md:pt-1">
              <div className="flex gap-2">
                <a
                  href="#"
                  aria-label="LinkedIn da Signorge"
                >
                  <LinkedInIcon className="size-5.5 hover:text-signal/60"/>
                </a>
                <a
                  href="#"
                  aria-label="WhatsApp da Signorge"
                >
                  <WhatsAppIcon className="size-5.5 text-signal hover:text-signal/60"/>
                </a>
              </div>
              <address className="flex flex-col gap-1 text-sm not-italic">
                <a
                  href="mailto:signorge@gmail.com"
                  className="flex min-h-11 items-center gap-1 rounded-sm outline-none hover:underline focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-graphite md:min-h-5.5"
                >
                  <Mail
                    aria-hidden="true"
                    className="size-5.5 shrink-0 text-signal"
                  />
                  <span className="min-w-0 wrap-anywhere">
                    signorge@gmail.com
                  </span>
                </a>
                <p className="flex items-center gap-1">
                  <MapPin
                    aria-hidden="true"
                    className="size-5.5 shrink-0 text-signal"
                  />
                  <span>Belo Horizonte - MG</span>
                </p>
              </address>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start gap-2 border-t border-slate/15 py-3.5 text-xs leading-4 md:flex-row md:items-center md:justify-between md:gap-4">
            <p>© 2026 Signorge. Todos os direitos reservados.</p>
            <a
              href="#"
              className="inline-flex min-h-11 items-center rounded-sm outline-none hover:underline focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-graphite md:min-h-0"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
