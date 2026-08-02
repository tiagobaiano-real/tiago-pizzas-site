import atum from "@/assets/pizza-atum.png";
import calabresa from "@/assets/pizza-calabresa.png";
import presunto from "@/assets/pizza-presunto.png";
import frango from "@/assets/pizza-frango.png";
import { Reveal } from "./Reveal";

// Vitrine de sabores — imagens temporárias até o envio das fotos reais.
const pizzas = [
  { name: "Calabresa", image: calabresa, desc: "Molho de tomate, mussarela, calabresa, orégano e azeite de oliva." },
  { name: "Atum", image: atum, desc: "Atum, mussarela, orégano e azeite de oliva." },
  { name: "Presunto", image: presunto, desc: "Presunto, molho de tomate, mussarela e azeite de oliva." },
  { name: "Frango", image: frango, desc: "Frango, molho de tomate, mussarela e azeite de oliva." },
];

export function Pizzas() {
  return (
    <section id="pizzas" className="bg-muted/50 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Sabores
          </span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Nossas pizzas</h2>
          <p className="mt-4 text-muted-foreground">
            Massa artesanal e recheios preparados com ingredientes de alta qualidade.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pizzas.map((pizza, i) => (
            <Reveal key={pizza.name} delay={i * 80}>
              <article className="card-lift h-full overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
                <img
                  src={pizza.image}
                  alt={`Pizza brotinho sabor ${pizza.name}`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="text-base font-semibold">{pizza.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pizza.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          {/* Futuramente apontará para a página de cardápio completo */}
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Ver Cardápio Completo
          </a>
        </div>
      </div>
    </section>
  );
}
