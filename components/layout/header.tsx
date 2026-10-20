import Image from 'next/image';
import Link from 'next/link';
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Container } from './container';

export default function Header() {

    return (
        <header className="flex h-20 items-center border-b border-[#E4E4E4] shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
            <Container>
                <nav className="flex  items-center justify-between">
                    <Link href={"/"} className='inline-flex'>
                        <Image
                            src="logo/signorge-logo-primary.svg"
                            alt="Signorge"
                            width={200}
                            height={43}
                            preload={true}
                            className="h-auto w-35 md:w-42.5 lg:w-50"
                        />
                    </Link>
                    <div className='flex gap-4 text-graphite text-base'>
                        <Link href={"#"}>Serviços</Link>
                        <Link href={"#"}>Projetos</Link>
                        <Link href={"#"}>Diferenciais</Link>
                        <Link href={"#"}>Sobre</Link>
                    </div>
                    <Link href={"#"} className="bg-signal text-offwhite px-4 py-3.5 rounded-xl font-medium text-sm">
                        <div className="flex gap-1.25 items-center">
                            <WhatsAppIcon className="size-4.5" />
                            <span>Entre em Contato</span>
                        </div>
                    </Link>
                </nav>
            </Container>
        </header>
    );
}
