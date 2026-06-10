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

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Programs />
      <Finance />
      <Wellness />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;