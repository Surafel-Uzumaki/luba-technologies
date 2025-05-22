import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "./aboutus";
import TestimonialPage from "./testimonial";
import ContactUs from "./contactus";
import Services from "./services";
import Projects from "./projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Luba Technologies — Lighting Up the Future with Technology
        </title>
        <meta
          name="description"
          content="Luba Technologies builds modern digital platforms that add value and income to businesses of all sizes. Let technology light your path to success."
        />
        <meta
          name="keywords"
          content="Luba Technologies, tech company, software development, web apps, mobile apps, startups, business platforms"
        />
        <meta name="author" content="Luba Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />

        {/* Open Graph tags for social media previews */}
        <meta property="og:title" content="Luba Technologies" />
        <meta
          property="og:description"
          content="We don't just build platforms — we build partnerships, like family."
        />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luba Technologies" />
        <meta
          name="twitter:description"
          content="Luba Technologies helps businesses grow with powerful and beautiful technology."
        />
        <meta name="twitter:image" content="/favicon.png" />
      </Head>

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
