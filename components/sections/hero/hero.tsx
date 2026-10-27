import styles from './hero.module.css';

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
                <div>
                    <div><span>Desenvolvimento Web</span></div>
                    <h1>Seu negócio não precisa de mais um site. <br />Precisa da solução certa.</h1>
                    <p>Entendemos seu contexto, seu público e seus objetivos para construir uma solução web alinhada às necessidades do seu negócio.</p>
                </div>
            </div>
        </section>
    );
}
