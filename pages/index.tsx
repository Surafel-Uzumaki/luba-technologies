import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "./aboutus";
import TestimonialPage from "./testimonial";
import ContactUs from "./contactus";
import Services from "./services";
import Projects from "./projects";
import Footer from "@/components/Footer";
//

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <TestimonialPage />
      <ContactUs />
      <Footer />
    </>
  );
}
