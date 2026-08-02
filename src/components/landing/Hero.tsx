import heroImage from "@/assets/hero-pizzas.jpg";
import logo from "@/assets/logo-tiago-pizzas.jpg";
import { OrderButton } from "./OrderButton";

/** Seção principal — foco total na conversão. */
export function Hero() {
  return (
    <section id="inicio" className="surface-ink relative overflow-hidden pt-28 pb-20 sm:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        <div>
          
          <h1 className="font-display text-4xl leading-[1.1] font-semibold sm:text-5xl lg:text-[3.4rem]">
            Pizzas Brotinho Artesanais{" "}
            <span className="text-gradient-warm">para Assar Quando Você Quiser</span>
          </h1>
          <p className="mt-5 text-lg font-medium opacity-90 sm:text-xl">
          Escolha seus sabores favoritos e receba 
          pizzas brotinho artesanais no conforto da sua casa.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed opacity-70">
            Finalize no forno ou no micro-ondas. 
            Maior praticidade para o seu dia, sem abrir mão da qualidade.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <OrderButton origin="hero" size="lg" />
            <a
              href="#pizzas"
              className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white/10"
            >
              Ver sabores
            </a>
          </div>

          <p className="mt-5 text-sm opacity-60">
            Atendimento rápido pelo WhatsApp • Produção artesanal • Entrega local
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/15 blur-3xl" aria-hidden />
          <img
            src={heroImage}
            alt="Pizzas brotinho artesanais sobre tábua de madeira"
            width={1200}
            height={1200}
            className="relative w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
          />
        </div>
      </div>
    </section>
  );
}
