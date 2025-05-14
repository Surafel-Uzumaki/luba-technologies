import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import Link from "next/link";
import { FaCheckCircle, FaPalette, FaUsers, FaComments } from "react-icons/fa";

// Ensure types are correctly recognized for GSAP plugins
declare module "gsap" {
  interface TweenVars {
    scrollTrigger?: ScrollTrigger.Vars;
  }
}

const AboutUs = () => {
  // Refs with proper typing
  const elements = useRef<HTMLDivElement[]>([]);
  const floatingShapes = useRef<SVGSVGElement[]>([]);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);

  // Function to add element references
  const addToElements = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      elements.current[index] = el;
    }
  };

  const addToFloatingShapes = (el: SVGSVGElement | null, index: number) => {
    if (el) {
      floatingShapes.current[index] = el;
    }
  };

  useEffect(() => {
    // Register GSAP plugin
    gsap.registerPlugin(ScrollTrigger);

    // Floating background shapes animation
    floatingShapes.current.forEach((shape, i) => {
      if (!shape) return;

      gsap.to(shape, {
        y: i % 2 === 0 ? 20 : -20,
        duration: 5 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Section animations
    elements.current.forEach((el, i) => {
      if (!el) return;

      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Text wave animation for the hero
    gsap.to(".wave-text span", {
      y: -10,
      duration: 2,
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Why Choose Us cards animation
    const cards = document.querySelectorAll(".why-choose-card");
    cards.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        rotation: 5,
        duration: 0.8,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Card hover effect
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>About Us | IKIM-TECH</title>
        <meta
          name="description"
          content="Learn about IKIM-TECH and our mission to deliver innovative tech solutions"
        />
      </Head>
      <div className="min-h-screen bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
          {/* Floating background shapes */}
          {[...Array(8)].map((_, i) => (
            <svg
              key={i}
              ref={(el) => addToFloatingShapes(el, i)}
              className={`absolute opacity-10 ${
                i % 2 === 0 ? "text-[#033D54]" : "text-[#0a6b8a]"
              }`}
              width={Math.random() * 100 + 50}
              height={Math.random() * 100 + 50}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              viewBox="0 0 100 100"
            >
              {i % 3 === 0 ? (
                <circle cx="50" cy="50" r="40" fill="currentColor" />
              ) : i % 3 === 1 ? (
                <rect
                  x="10"
                  y="10"
                  width="80"
                  height="80"
                  fill="currentColor"
                />
              ) : (
                <polygon points="50,5 90,90 10,90" fill="currentColor" />
              )}
            </svg>
          ))}
          <div
            ref={(el) => addToElements(el, 0)}
            className="text-center relative z-10"
          >
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 wave-text"
              style={{ color: "#033D54" }}
            >
              {"About IKIM-TECH".split("").map((char, i) => (
                <span key={i} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto mb-8"
              style={{ color: "#033D54" }}
              ref={(el) => addToElements(el, 1)}
            >
              Pioneering technology solutions with innovation at our core
            </p>
            <div
              className="w-24 h-2 bg-gradient-to-r from-[#033D54] to-[#0a6b8a] mx-auto rounded-full"
              ref={(el) => addToElements(el, 2)}
            ></div>
          </div>
        </section>

        {/* Why Choose Us Section */}

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div
              className="grid md:grid-cols-2 gap-12 items-center"
              ref={(el) => addToElements(el, 3)}
            >
              <div>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ color: "#033D54" }}
                >
                  Our Mission
                </h2>
                <p className="text-lg mb-6" style={{ color: "#033D54" }}>
                  To empower businesses through cutting-edge technology
                  solutions that drive growth, efficiency, and innovation.
                </p>
                <div className="space-y-6">
                  {[
                    "Deliver exceptional value to our clients",
                    "Foster a culture of continuous innovation",
                    "Build sustainable technology solutions",
                    "Maintain the highest ethical standards",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start group"
                      ref={(el) => addToElements(el, 4 + index)}
                    >
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#033D54] flex items-center justify-center mr-4 transition-all group-hover:bg-[#0a6b8a]">
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-lg" style={{ color: "#033D54" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-96">
                <div className="absolute inset-0 bg-[#033D54] rounded-xl overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%">
                      {[...Array(50)].map((_, i) => (
                        <circle
                          key={i}
                          cx={`${Math.random() * 100}%`}
                          cy={`${Math.random() * 100}%`}
                          r={Math.random() * 3 + 1}
                          fill="white"
                        />
                      ))}
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div
                      className="absolute inset-0 border-4 border-white border-opacity-30 rounded-full animate-spin-slow"
                      style={{ animationDirection: "reverse" }}
                    ></div>
                    <div className="absolute inset-4 border-4 border-white border-opacity-30 rounded-full animate-spin-medium"></div>
                    <div className="absolute inset-8 flex items-center justify-center">
                      <div className="h-32 w-32 rounded-full bg-white bg-opacity-10 flex items-center justify-center">
                        <svg
                          className="h-16 w-16 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16" ref={whyChooseUsRef}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#033D54] to-[#0a6b8a]">
                Why Choose Us
              </h2>
              <p className="text-xl text-[#033D54] max-w-3xl mx-auto">
                At IKIM Tech, we combine innovation, expertise, and dedication
                to deliver exceptional results. Here's why we stand out:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FaCheckCircle,
                  title: "Quality",
                  description:
                    "Delivering excellence in every project with uncompromising quality standards",
                },
                {
                  icon: FaPalette,
                  title: "Creative",
                  description:
                    "Innovative solutions that push boundaries and set new industry standards",
                },
                {
                  icon: FaUsers,
                  title: "Designers",
                  description:
                    "Expert team of designers crafting beautiful and functional experiences",
                },
                {
                  icon: FaComments,
                  title: "Free Consultation",
                  description:
                    "Comprehensive consultation to understand your unique needs",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="why-choose-card bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative group"
                >
                  {/* Card background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#033D54]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon container with gradient background */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#033D54] to-[#0a6b8a] flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-[#033D54] group-hover:translate-x-2 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#033D54]/80">{item.description}</p>

                  {/* Decorative corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br from-[#033D54]/10 to-transparent transform rotate-45 translate-x-4 translate-y-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16" ref={(el) => addToElements(el, 8)}>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#033D54" }}
            >
              Our Journey
            </h2>
            <p
              className="text-xl max-w-2xl mx-auto"
              style={{ color: "#033D54" }}
            >
              Milestones that shaped our company
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-1 bg-[#033D54] bg-opacity-20 transform -translate-x-1/2"></div>
            {[
              {
                year: "2010",
                title: "Company Founded",
                description: "Started in a small office with 3 team members",
              },
              {
                year: "2014",
                title: "First Major Client",
                description: "Secured partnership with Fortune 500 company",
              },
              {
                year: "2018",
                title: "Expanded Globally",
                description: "Opened offices in 3 new countries",
              },
              {
                year: "2022",
                title: "Tech Award Winner",
                description: "Recognized as industry leader in innovation",
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => addToElements(el, 9 + index)}
                className={`mb-6 w-full flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 p-6 rounded-lg ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="bg-white p-8 shadow-lg rounded-lg relative">
                    <div
                      className={`absolute top-8 w-4 h-4 rounded-full bg-[#033D54] ${
                        index % 2 === 0
                          ? "-right-2 md:-right-8"
                          : "-left-2 md:-left-8"
                      }`}
                    ></div>
                    <div
                      className="text-sm font-bold mb-1"
                      style={{ color: "#0a6b8a" }}
                    >
                      {item.year}
                    </div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "#033D54" }}
                    >
                      {item.title}
                    </h3>
                    <p style={{ color: "#033D54" }}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-4 sm:px-6 lg:px-8 bg-white">
          <div
            className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            ref={(el) => addToElements(el, 13)}
          >
            {[
              { value: 50, label: "Projects Completed" },
              { value: 100, label: "Client Satisfaction" },
              { value: 15, label: "Years Experience" },
              { value: 24, label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: "#033D54" }}
                >
                  <Counter target={stat.value} />+
                </div>
                <div
                  className="text-lg opacity-80"
                  style={{ color: "#033D54" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div ref={(el) => addToElements(el, 14)}>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: "#033D54" }}
            >
              Want to meet the people behind our success?
            </h2>
            <Link href="/teams">
              <button className="px-8 py-3 bg-[#033D54] text-white rounded-full font-medium hover:bg-[#0a6b8a] transition-all">
                Meet Our Team
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

// Counter component for stats animation
interface CounterProps {
  target: number;
}

const Counter = ({ target }: CounterProps) => {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!counterRef.current) return;

    gsap.to(counterRef.current, {
      innerText: target,
      duration: 6,
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: counterRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, [target]);

  return <span ref={counterRef}>0</span>;
};

export default AboutUs;
