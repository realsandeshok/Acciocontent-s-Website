import './App.css';
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import AcciocontentSecret from "./sections/AcciocontentSecret";
import Branding from "./sections/Branding";
import GetAQuote from "./sections/GetAQuote";
import Services from "./sections/Services";
import Team from "./sections/Team";
import { Testimonial } from "./sections/Testimonial";
import WeCater from "./sections/WeCater";
import Hero from "./sections/Hero"
import Footer from './components/Footer';
import OurPurpose from './sections/OurPurpose';
import Download from './components/Download';
// import ScheduleMeeting from './sections/ScheduleMeeting';

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
      <section id="ourpurpose" className="navbar-offset">
        <OurPurpose />
      </section>
      <section id="services" className="navbar-offset">
        <Services />
      </section>
      <section id="branding" className="navbar-offset">
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
      <Download />
      {/* <section id="schedulemeeting">
        <ScheduleMeeting />
      </section> */}
      <Footer />
    </div>
  );
}

export default App;
