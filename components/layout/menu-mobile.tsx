"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

type MenuMobileProps = {
    links: ReadonlyArray<{ label: string; href: string }>;
    contactHref: string;
};

export default function MenuMobile({ links, contactHref }: MenuMobileProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const desktop = window.matchMedia("(min-width: 1024px)");
        const closeOnDesktop = () => {
            if (desktop.matches) setOpen(false);
        };

        desktop.addEventListener("change", closeOnDesktop);
        return () => desktop.removeEventListener("change", closeOnDesktop);
    }, []);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
                aria-label="Abrir menu"
                render={
                    <Button
                        variant="ghost"
                        size="icon"
                        className="size-12 rounded-xl text-signal transition-colors hover:bg-offwhite hover:text-signal focus-visible:ring-signal/40 aria-expanded:bg-offwhite aria-expanded:text-signal motion-reduce:transition-none"
                    />
                }
            >
                {open ? <X aria-hidden="true" className="size-6"></X>: <Menu aria-hidden="true" className="size-6" /> }
                
                
            </SheetTrigger>

            <SheetContent
                side="top"
                showCloseButton={false}
                overlayClassName="top-20 motion-reduce:transition-none motion-reduce:duration-0"
                className="max-h-[calc(100dvh-5rem)] gap-0 overflow-y-auto overscroll-contain rounded-b-3xl border-border bg-background shadow-[0_16px_32px_-16px_rgba(12,17,29,0.2)] data-[side=top]:top-20 motion-reduce:transition-none motion-reduce:duration-0"
            >
                <Container>
                    <div className="py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:py-6">
                        <nav aria-label="Navegação mobile">
                            <ul className="divide-y divide-border">
                                {links.map(({ label, href }) => (
                                    <li key={label}>
                                        <SheetClose
                                            nativeButton={false}
                                            render={<Link href={href} />}
                                            className="group flex min-h-16 items-center justify-between gap-4 rounded-xl px-3 py-4 font-display text-lg font-medium text-graphite outline-none transition-colors hover:bg-offwhite hover:text-signal focus-visible:bg-offwhite focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal motion-reduce:transition-none"
                                        >
                                            {label}
                                           
                                        </SheetClose>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="flex justify-center">
                        <SheetClose
                            nativeButton={false}
                            render={<Link href={contactHref} />}
                            className="mt-5 flex min-h-12 w-max items-center justify-center gap-2 rounded-xl bg-signal px-4 py-3.5 text-sm font-medium text-offwhite outline-none transition-colors hover:bg-signal/90 focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4 motion-reduce:transition-none sm:hidden"
                        >
                            <WhatsAppIcon aria-hidden="true" className="size-4.5" />
                            <span>Entre em Contato</span>
                        </SheetClose>
                        </div>
                    </div>
                </Container>
            </SheetContent>
        </Sheet>
    );
}
