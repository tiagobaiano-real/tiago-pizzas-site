import { cn } from "@/lib/utils";
import { trackOrderClick, whatsappUrl } from "@/lib/site";

type Props = {
  /** Identificador de origem do clique (usado no tracking). */
  origin: string;
  size?: "sm" | "lg";
  className?: string;
  children?: React.ReactNode;
};

/** Botão principal de conversão — abre a conversa no WhatsApp. */
export function OrderButton({ origin, size = "sm", className, children }: Props) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackOrderClick(origin)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        size === "sm" ? "px-5 py-2.5 text-sm" : "px-8 py-4 text-base sm:text-lg",
        className,
      )}
    >
      {children ?? "🍕 Faça seu Pedido"}
    </a>
  );
}
