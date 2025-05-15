import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const shapeRefs = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    // Footer entrance animation
    gsap.from(footerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Floating shapes animation
    shapeRefs.current.forEach((shape, i) => {
      if (!shape) return;

      gsap.to(shape, {
        y: i % 2 === 0 ? -10 : 10,
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden pt-16 pb-8"
      style={{ backgroundColor: "#033D54" }}
    >
      {/* Floating decorative shapes */}
      {[...Array(6)].map((_, i) => (
        <svg
          key={i}
          ref={(el) => {
            shapeRefs.current[i] = el;
          }}
          className={`absolute opacity-20 ${
            i % 2 === 0 ? "text-white" : "text-[#0a6b8a]"
          }`}
          width={Math.random() * 80 + 40}
          height={Math.random() * 80 + 40}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 30}%`,
          }}
          viewBox="0 0 100 100"
        >
          {i % 3 === 0 ? (
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          ) : i % 3 === 1 ? (
            <rect x="10" y="10" width="80" height="80" fill="currentColor" />
          ) : (
            <path d="M50,5 L90,90 L10,90 Z" fill="currentColor" />
          )}
        </svg>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">IKIM-TECH</h3>
            <p className="text-white opacity-80">
              Innovating technology solutions for a better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Aboutus", "Projects", "Contact"].map((item) => {
                // Map item to route path
                const hrefMap: { [key: string]: string } = {
                  Home: "/",
                  Aboutus: "/aboutus",
                  Projects: "/projects",
                  Contact: "/contact",
                };
                return (
                  <li key={item}>
                    <Link
                      href={hrefMap[item]}
                      id={`${item.toLowerCase()}`}
                      className="text-white opacity-80 hover:opacity-100 hover:underline transition-all duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <address className="not-italic space-y-2">
              <p className="text-white opacity-80">Bole Road</p>
              <p className="text-white opacity-80">Addis Ababa</p>
              <p className="text-white opacity-80">Ethiopia</p>
              <Link
                href="mailto:info@ikim.tech"
                className="block text-white hover:text-[#0a6b8a] transition-colors duration-300"
              >
                info@ikim.tech
              </Link>
              <Link
                href="tel:+1234567890"
                className="block text-white hover:text-[#0a6b8a] transition-colors duration-300"
              >
                +1 (234) 567-890
              </Link>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 my-8"></div>

        {/* Copyright - Centered */}
        <div className="text-center">
          <p className="text-white opacity-80 text-sm">
            &copy; 2025 IKIM-TECH. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-white p-3 rounded-full shadow-lg hover:bg-[#033D54] hover:text-white transition-all duration-300 group"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 text-[#033D54] group-hover:text-white transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
