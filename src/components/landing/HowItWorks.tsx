import { ListChecks, MessageCircle, Truck, Flame, Heart } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { icon: ListChecks, title: "Escolha seus sabores", text: "Monte sua seleção com os sabores preferidos da casa." },
  { icon: MessageCircle, title: "Faça seu pedido pelo WhatsApp", text: "Atendimento direto, rápido e sem complicação." },
  { icon: Truck, title: "Receba as pizzas em casa", text: "Entregamos prontas para você guardar e usar quando quiser." },
  { icon: Flame, title: "Finalize no forno ou micro-ondas", text: "Poucos minutos e a pizza fica quentinha e saborosa." },
  { icon: Heart, title: "Aproveite quando quiser", text: "Praticidade para qualquer dia, sem perder o sabor artesanal." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Simples assim
          </span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Como funciona</h2>
          <p className="mt-4 text-muted-foreground">
            Cinco passos entre o seu pedido e uma pizza artesanal quentinha na mesa.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <li className="card-lift h-full list-none rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="mt-5 block text-xs font-semibold text-muted-foreground">
                  Passo {i + 1}
                </span>
                <h3 className="mt-1 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
