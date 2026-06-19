import Navbar from "../components/Navbar/Navbar";
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
import SocicialEducation from "../components/Finance/Finance";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <AthmaConnect/>
      <BrahmaMuhurta/>
      <ThreePillars/>
      <Wisdom/>
      {/* <Services />
      <Programs /> */}
      <FinancialEducation/>
      <Wellness />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;