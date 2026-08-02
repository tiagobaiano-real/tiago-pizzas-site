import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-tiago-pizzas.jpg";
import { INSTAGRAM_URL, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Tiago Pizzas"
            loading="lazy"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="font-display text-base font-semibold">Tiago Pizzas</p>
            <p className="text-xs text-muted-foreground">Sabores que inspiram</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tiago Pizzas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
