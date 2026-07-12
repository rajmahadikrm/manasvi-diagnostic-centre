import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Services from "../components/sections/Services";

import Gallery from "../components/sections/Gallery";
import Machine from "../components/sections/Machine";
import WorkingHours from "../components/sections/WorkingHours";
import Contact from "../components/sections/Contact";
import FloatingButtons from "../components/sections/FloatingButtons";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <WhyChooseUs />

      <Services />

      {/* Facilities */}

      {/* Process */}


      <Gallery />


      <Contact />

      <FloatingButtons />

      <Footer />
    </>
  );
}

export default Home;