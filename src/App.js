import './App.css';
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import AcciocontentSecret from "./sections/AcciocontentSecret";
import Branding from "./sections/Branding";
import GetAQuote from "./sections/GetAQuote";
import Mission from "./sections/Mission";
import Services from "./sections/Services";
import Team from "./sections/Team";
import { Testimonial } from "./sections/Testimonial";
import Vision from "./sections/Vision";
import WeCater from "./sections/WeCater";
import Hero from "./sections/Hero"

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="hero" className="navbar-offset">
        <Hero />
      </section>
      <section id="about" className="navbar-offset">
        <AboutUs />
      </section>
      <section id="vision" className="navbar-offset">
        <Vision />
      </section>
      <section id="mission" className="navbar-offset">
        <Mission />
      </section>
      <section id="services" className="">
        <Services />
      </section>
      <section id="branding" className="">
        <Branding />
      </section>
      <section id="wecater" className="navbar-offset">
        <WeCater />
      </section>
      <section id="acciocontentsecret" className="navbar-offset">
        <AcciocontentSecret />
      </section>
      <section id="getaquote" className="navbar-offset">
        <GetAQuote />
      </section>
      <section id="team" className="navbar-offset">
        <Team />
      </section>
      <section id="testimonials" className="navbar-offset">
        <Testimonial />
      </section>
      <section id="faqs">
        <FAQ />
      </section>
    </div>
  );
}

export default App;
