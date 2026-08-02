import { useEffect, useState } from "react";
import logo from "@/assets/logo-tiago-pizzas.jpg";
import { NAV_LINKS } from "@/lib/site";
import { OrderButton } from "./OrderButton";

/** Cabeçalho fixo com navegação e CTA principal. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border/60 bg-background/90 backdrop-blur-xl shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#inicio" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="Tiago Pizzas"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            Tiago Pizzas
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <OrderButton origin="header" className="hidden sm:inline-flex" />
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
            </div>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="border-t border-border/60 bg-background/95 px-5 py-4 lg:hidden">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <OrderButton origin="menu-mobile" className="mt-3 w-full sm:hidden" />
        </nav>
      )}
    </header>
  );
}
