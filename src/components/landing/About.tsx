import fotoCasal from "@/assets/tiago-marta.png";
import { Reveal } from "./Reveal";

const highlights = [
  "Negócio familiar",
  "Produção artesanal",
  "Ingredientes selecionados",
  "Atendimento próximo",
];

export function About() {
  return (
    <section id="quem-somos" className="py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="h-full w-full rounded-2xl object-cover object-top">
            <img
              src={fotoCasal}
              alt="Tiago e Marta"
              loading="lazy"
              width={7000}
              height={7000}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Quem somos
          </span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Sabores que inspiram, feitos em família
          </h2>
          {/* Texto temporário (placeholder) */}
          <p className="mt-5 leading-relaxed text-muted-foreground">
          A Tiago Pizzas nasceu da união da nossa paixão por alimentos artesanais e do desejo de oferecer 
          praticidade sem abrir mão do sabor. Unimos nossa experiência na panificação e confeitaria para criar 
          pizzas brotinho que podem ser finalizadas na hora que você quiser.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
          Cada pizza é preparada com cuidado, utilizando ingredientes selecionados e produção em pequenos 
          lotes. Nosso compromisso é oferecer qualidade, atendimento próximo e uma experiência que faça 
          nossos clientes voltarem sempre.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium"
              >
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
