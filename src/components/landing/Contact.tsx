import { Clock, Instagram, MapPin, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL } from "@/lib/site";
import { OrderButton } from "./OrderButton";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="surface-ink rounded-3xl px-7 py-14 text-center shadow-[var(--shadow-lift)] sm:px-14">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Pronto para pedir?
            </h2>
            <p className="mx-auto mt-4 max-w-xl opacity-75">
              Fale com a gente pelo WhatsApp e monte sua seleção de pizzas brotinho.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <OrderButton origin="contato" size="lg" />
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white/10"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>

            <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
              {[
                { icon: Clock, title: "Horário de atendimento", text: "Seg a Dom, 09h às 21h" },
                { icon: MapPin, title: "Região atendida", text: "Salvador - Bahia" },
                { icon: MessageCircle, title: "Pedidos", text: "Somente pelo WhatsApp" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white/5 p-5">
                  <item.icon className="h-5 w-5 opacity-80" />
                  <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm opacity-70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
