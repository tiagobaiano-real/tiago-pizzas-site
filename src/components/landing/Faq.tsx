import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

// Respostas temporárias (placeholder).
const faqs = [
  {
    q: "Como funciona o pedido?",
    a: "Você escolhe os sabores e envia a mensagem pelo WhatsApp. Confirmamos os itens, o valor e o prazo de entrega na mesma conversa.",
  },
  {
    q: "As pizzas são congeladas?",
    a: "As pizzas são pré-assadas e entregues resfriadas ou congeladas, prontas para finalizar quando você quiser.",
  },
  {
    q: "Como preparar?",
    a: "Basta levar ao forno pré-aquecido ou ao micro-ondas.",
  },
  {
    q: "Como sei se a pizza está pronta?",
    a: "Basta observar se os recheios estão devidamente gratinados.",
  },
  {
    q: "Como funciona a entrega?",
    a: "Entregamos na região atendida em dias e horários combinados. A taxa é informada no momento do pedido.",
  },
  {
    q: "Posso escolher os sabores?",
    a: "Sim! De acordo com os sabores disponíveis em nosso cardápio.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-muted/50 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Ajuda
          </span>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Dúvidas frequentes</h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold transition-colors hover:bg-muted/60"
                  >
                    {item.q}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className="grid transition-all duration-300"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
