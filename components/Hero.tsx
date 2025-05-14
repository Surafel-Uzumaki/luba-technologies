import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

    // Text animation
    gsap.from(textRef.current?.children || [], {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    // Continuous floating animation for tech elements
    const techElements = document.querySelectorAll(".tech-element");
    techElements.forEach((el) => {
      gsap.to(el, {
        y: 20,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: "#033D54" }}
    >
      {/* Animated tech background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="tech-element absolute rounded-full border border-white opacity-10"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Circuit-like lines */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            {[...Array(15)].map((_, i) => (
              <line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1={`${Math.random() * 100}%`}
                x2={`${Math.random() * 100}%`}
                y2={`${Math.random() * 100}%`}
                stroke="white"
                strokeWidth={0.5}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="block">Innovative</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            Tech Solutions
          </span>
        </h1>

        <p className="text-xl text-white opacity-80 mb-8 max-w-2xl mx-auto">
          Building the future with cutting-edge technology and innovative design
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-[#033D54] rounded-full font-medium hover:bg-opacity-90 transition-all">
            Get Started
          </button>
          <button className="px-8 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
