import Hero from "@/components/Hero";
import AboutUs from "./aboutus";
import TestimonialPage from "./testimonial";
import ContactUs from "./contactus";
import Services from "./services";
import Projects from "./projects";
//

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <TestimonialPage />
      <ContactUs />
      <Services />
      <Projects />
    </>
  );
}
