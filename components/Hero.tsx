import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // Background animation
    gsap.fromTo(
      heroRef.current,
      { backgroundColor: "#033D54" },
      {
        backgroundColor: "#02283a",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Text animation with split lines
    const splitText = textRef.current?.children || [];
    gsap.from(splitText, {
      y: 100,
      opacity: 0,
      rotateX: -45,
      stagger: 0.1,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.5,
    });

    // Continuous floating animation for tech elements
    const techElements = document.querySelectorAll(".tech-element");
    techElements.forEach((el) => {
      gsap.to(el, {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Animate circuit lines
    const lines = document.querySelectorAll(".circuit-line");
    lines.forEach((line) => {
      gsap.from(line, {
        strokeDashoffset: 1000,
        duration: "random(1.5, 3)",
        delay: "random(0, 2)",
        ease: "none",
        repeat: -1,
      });
    });
  }, []);

  const handleGetStarted = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: "#aboutus",
      ease: "power3.inOut",
    });
  };

  return (
    <div
      id="home"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#033D54" }}
    >
      {/* Animated tech background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="tech-element absolute rounded-full border border-white opacity-10"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Circuit-like lines */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            {[...Array(20)].map((_, i) => (
              <line
                key={i}
                className="circuit-line"
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="white"
                strokeWidth={0.5}
                strokeDasharray="5,5"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 text-center px-4">
        <h1 className="mb-8">
          <span className="block text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 [text-shadow:_0_4px_20px_rgba(0,0,0,0.3)]">
            Transforming Ideas
          </span>
          <span className="block text-4xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent [text-shadow:_0_4px_20px_rgba(0,0,0,0.1)]">
            Into Digital Reality
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium tracking-wide">
          Elevate your business with our innovative solutions and cutting-edge
          technology expertise
        </p>

        <button
          onClick={handleGetStarted}
          className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white
            bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600
            hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700
            rounded-md border border-white/10 shadow-lg transition-colors duration-200"
        >
          <span className="flex items-center">
            Get Started
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
