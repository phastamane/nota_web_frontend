import Hero from "../components/hero/Hero";
import Clients from "../components/clients/Clients";
import Functions from "../components/functions/Functions";
import Feautures from "../components/features/Features";
import Benefits from "../components/benefits/Benefits";
import Tarifs from "../components/tarifs/Tarifs";
import Footer from "../common/footer/Footer";

export default function MainPage() {
  return (
    <>
      <section id="hero" className="anchor-section">
        <Hero />
      </section>
      <Clients />
      <Functions />
      <Feautures />
      <section id="benefits">
        <Benefits />
      </section>
      <section id="pricing" className="anchor-section">
        <Tarifs />
      </section>
      <Footer />
    </>
  );
}
