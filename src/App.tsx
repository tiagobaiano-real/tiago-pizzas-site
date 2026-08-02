import { Header } from "./components/landing/Header";
import { Hero } from "./components/landing/Hero";
import { HowItWorks } from "./components/landing/HowItWorks";
import { Pizzas } from "./components/landing/Pizzas";
import { About } from "./components/landing/About";
import { Faq } from "./components/landing/Faq";
import { Contact } from "./components/landing/Contact";
import { Footer } from "./components/landing/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />
        <HowItWorks />
        <Pizzas />
        <About />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;