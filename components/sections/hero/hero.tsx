import Image from 'next/image';
import styles from './hero.module.css';
import { DiamondMarker } from '@/components/shared/diamond-marker';
import { Container } from '@/components/layout/container';
import { ButtonSite } from '@/components/shared/button-site';
import TagHero from '@/components/sections/hero/tag-hero';
import HeroConnections from '@/components/sections/hero/hero-connections';
import { ChartNoAxesColumnIncreasing, ClipboardList, ScanSearch, Target, UserGroup } from 'lucide-react';


export default function Hero() {
    return (
        <section className="relative min-h-107.75 overflow-hidden">
            {/* Glows decorativos */}
            <div
                aria-hidden="true"
                className={`${styles.glows} pointer-events-none absolute inset-x-0 top-15 h-107.75`}
            />
            {/* Background de pontos */}
            <div
                aria-hidden="true"
                className=" pointer-events-none absolute inset-x-0 top-0 h-107.75 bg-[url('/decorations/dot-grid.svg')] bg-repeat-x opacity-[0.42]"
            />
            {/* Conteúdo da Hero */}
            <div className="pt-20 relative z-10">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mt-20">
                        <div>
                            <div className='flex gap-2 items-center mb-6.5'> <DiamondMarker color='signal' size={8} /> <span className='text-slate'>Desenvolvimento Web</span></div>
                            <div className='flex flex-col gap-10'>
                                <div>
                                    <h1 className='text-5xl font-display font-semibold'>Seu negócio não precisa de mais um site.
                                        <br />Precisa da solução certa. <br />
                                        <span className="text-signal">Lading Page</span>
                                    </h1>
                                </div>
                                <p className='text-2xl text-slate l'>Entendemos seu contexto, seu público e seus objetivos para construir uma solução web alinhada às necessidades do seu negócio.</p>
                                <div className='flex flex-col  sm:flex-row  gap-4 items-center'>
                                    <ButtonSite variant='primary' >Fale Sobre seu Projeto</ButtonSite>
                                    <ButtonSite variant='outline'>Ver Projetos</ButtonSite>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center ">
                            <div className="">
                                <TagHero text='Contexto' icon={<ScanSearch />} />
                                <TagHero text='Objetivos' icon={<Target />} />
                                <TagHero text='Oportunidades' icon={<ChartNoAxesColumnIncreasing />} />
                                <TagHero text='Necessidades' icon={<ClipboardList />} />
                                <TagHero text='Público' icon={<UserGroup />} />
                                <HeroConnections
                                    className="w-112.75 h-auto"
                                    aria-hidden="true"
                                    focusable="false"
                                />
                            </div>
                            <Image
                                src="/mockup-website.png"
                                alt="Ilustração de um site"
                                width={420}
                                height={439}
                                className="w-105 h-auto mt-15"
                                preload
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}
