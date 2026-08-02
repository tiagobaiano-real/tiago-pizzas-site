/**
 * Configuração central da landing page.
 * Altere aqui os links e textos institucionais — nenhum componente
 * possui dados fixos, o que facilita futuras manutenções.
 */

// Número no formato internacional, sem espaços ou símbolos.
export const WHATSAPP_NUMBER = "557198443264"; // TODO: substituir pelo número real

export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da Tiago Pizzas e gostaria de conhecer o cardápio e fazer um pedido. 🍕";

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const INSTAGRAM_URL = "https://www.instagram.com/tiagopizzasba/"; // TODO: perfil oficial

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Nossas Pizzas", href: "#pizzas" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Dúvidas Frequentes", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

/**
 * Ponto único de disparo de eventos de marketing.
 * Estrutura pronta para Google Analytics / GTM / Meta Pixel:
 * basta adicionar os scripts no head e os eventos passam a ser enviados.
 */
export function trackOrderClick(location: string) {
  const w = window as typeof window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };
  w.dataLayer?.push({ event: "click_pedido_whatsapp", origem: location });
  w.gtag?.("event", "click_pedido_whatsapp", { origem: location });
  w.fbq?.("track", "Contact", { origem: location });
}
