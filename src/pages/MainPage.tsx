import Hero from "../components/hero/Hero";
import Clients from "../components/clients/Clients";
import Functions from "../components/functions/Functions";
import Feautures from "../components/features/Features";
import Benefits from "../components/benefits/Benefits";
import Footer from "../common/Footer";
import Services from "../components/services/Services";

export default function MainPage() {
  return (
    <>
      <section id="hero" className="anchor-section section-spacing">
        <Hero />
      </section>

      <section className="section-spacing">
        <Clients />
      </section>

      <section className="section-spacing">
        <Functions />
      </section>

      <section className="section-spacing">
        <Feautures />
      </section>

      <section id="benefits" className="section-spacing">
        <Benefits />
      </section>

      <section id="pricing" className="anchor-section section-spacing">
        <Services />
      </section>

      <Footer />
    </>
  );
}

