import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Programs from "../components/Programs/Programs";
import Finance from "../components/Finance/Finance";
import Wellness from "../components/Wellness/Wellness";
import Gallery from "../components/Gallery/Gallery";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import AthmaConnect from "../components/AthmaConnect/AthmaConnect";
import BrahmaMuhurta from "../components/Bhrama/BrahmaMuhurta";
import ThreePillars from "../components/ThreePillars/ThreePillars";
import Wisdom from "../components/Wellness/Wisdom";
import FinancialEducation from "../components/Finance/Finance";
import SocialWall from "../components/SocialWall";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <AthmaConnect />
      <BrahmaMuhurta />
      <ThreePillars />
      <Wisdom />
      <FinancialEducation />
      <Wellness />
      <Gallery />
      <Testimonials />
      <SocialWall />

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default Home;