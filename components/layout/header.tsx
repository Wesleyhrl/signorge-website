import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Container } from '@/components/layout/container';
import MenuMobile from '@/components/layout/menu-mobile';

const navigationLinks = [
    { label: 'Serviços', href: '#' },
    { label: 'Projetos', href: '#' },
    { label: 'Diferenciais', href: '#' },
    { label: 'Sobre', href: '#' },
];

const contactHref = '#';

export default function Header() {
    return (
        <header className="sticky top-0 z-60 flex h-20 items-center border-b border-[#E4E4E4] bg-background shadow-[0_4px_14px_rgba(0,0,0,0.06)] lg:relative">
            <Container>
                <nav aria-label="Navegação principal" className="flex items-center justify-between gap-4">
                    <Link
                        href="/"
                        aria-label="Signorge — página inicial"
                        className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4"
                    >
                        <Image
                            src="/logo/signorge-symbol.svg"
                            alt=""
                            width={40}
                            height={40}
                            className="size-10 sm:hidden"
                            loading="eager"
                        />
                        <Image
                            src="/logo/signorge-logo-primary.svg"
                            alt=""
                            width={200}
                            height={43}
                            preload={true}
                            className="hidden h-auto w-42.5 sm:block lg:w-50"
                        />
                    </Link>
                    <div className="hidden items-center gap-4 text-base text-graphite lg:flex">
                        {navigationLinks.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className="inline-flex min-h-11 items-center rounded-md outline-none transition-colors hover:text-signal focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4 motion-reduce:transition-none"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <Link
                            href={contactHref}
                            className="hidden min-h-12 items-center gap-1.25 rounded-xl bg-signal px-4 py-3.5 text-sm font-medium text-offwhite outline-none transition-colors hover:bg-signal/90 focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4 motion-reduce:transition-none sm:inline-flex"
                        >
                            <WhatsAppIcon aria-hidden="true" className="size-4.5" />
                            <span>Entre em Contato</span>
                        </Link>
                        <div className="lg:hidden">
                            <MenuMobile links={navigationLinks} contactHref={contactHref} />
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    );
}
