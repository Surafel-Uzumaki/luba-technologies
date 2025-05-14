import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";

const TeamsPage = () => {
  const teamRefs = useRef<(HTMLDivElement | null)[]>([]);
  const floatingShapes = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Floating background shapes animation
    floatingShapes.current.forEach((shape, i) => {
      if (!shape) return;

      gsap.to(shape, {
        x: i % 2 === 0 ? 20 : -20,
        y: i % 3 === 0 ? 20 : -20,
        duration: 8 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    // Team card animations
    teamRefs.current.forEach((card, i) => {
      if (!card) return;

      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Hover animation
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          duration: 0.3,
        });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Our Team | IKIM-TECH</title>
        <meta
          name="description"
          content="Meet the talented team behind IKIM-TECH"
        />
      </Head>

      <div className="min-h-screen bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
          {/* Floating background shapes */}
          {[...Array(12)].map((_, i) => (
            <svg
              key={i}
              ref={(el) => {
                floatingShapes.current[i] = el;
              }}
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
              {i % 4 === 0 ? (
                <circle cx="50" cy="50" r="40" fill="currentColor" />
              ) : i % 4 === 1 ? (
                <rect
                  x="10"
                  y="10"
                  width="80"
                  height="80"
                  fill="currentColor"
                />
              ) : i % 4 === 2 ? (
                <polygon points="50,5 90,90 10,90" fill="currentColor" />
              ) : (
                <path
                  d="M50,5 L90,90 L10,90 Z M50,50 L10,5 L90,5 Z"
                  fill="currentColor"
                />
              )}
            </svg>
          ))}

          <div className="text-center relative z-10">
            <h1
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ color: "#033D54" }}
            >
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#033D54] to-[#0a6b8a]">
                Team
              </span>
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "#033D54" }}
            >
              The talented individuals driving innovation at IKIM-TECH
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "CEO & Founder",
                bio: "Visionary leader with 15+ years in tech innovation",
                expertise: [
                  "Strategic Planning",
                  "Business Development",
                  "Leadership",
                ],
              },
              {
                name: "Maria Garcia",
                role: "CTO",
                bio: "Tech architect specializing in scalable solutions",
                expertise: ["System Architecture", "Cloud Computing", "DevOps"],
              },
              {
                name: "Sam Wilson",
                role: "Lead Developer",
                bio: "Full-stack wizard with a passion for clean code",
                expertise: ["JavaScript", "React", "Node.js"],
              },
              {
                name: "Taylor Smith",
                role: "UX Designer",
                bio: "Creating intuitive user experiences",
                expertise: ["UI/UX Design", "User Research", "Prototyping"],
              },
              {
                name: "Jordan Lee",
                role: "DevOps Engineer",
                bio: "Cloud infrastructure specialist",
                expertise: ["AWS", "Docker", "CI/CD"],
              },
              {
                name: "Casey Kim",
                role: "Product Manager",
                bio: "Bridging business and technology",
                expertise: [
                  "Agile Methodologies",
                  "Product Strategy",
                  "Market Analysis",
                ],
              },
            ].map((member, index) => (
              <div
                key={index}
                ref={(el) => {
                  teamRefs.current[index] = el;
                }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl border border-gray-100"
              >
                <div className="h-48 bg-[#033D54] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%">
                      <pattern
                        id={`team-pattern-${index}`}
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="10" cy="10" r="1" fill="white" />
                      </pattern>
                      <rect
                        width="100%"
                        height="100%"
                        fill={`url(#team-pattern-${index})`}
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-white bg-opacity-20 border-2 border-white border-opacity-30"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold mb-1"
                    style={{ color: "#033D54" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-lg mb-3" style={{ color: "#0a6b8a" }}>
                    {member.role}
                  </p>
                  <p className="mb-4" style={{ color: "#033D54" }}>
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100"
                        style={{ color: "#033D54" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#033D54] text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-xl mb-8 opacity-90">
              We're always looking for talented individuals to join our growing
              team.
            </p>
            <button className="px-8 py-3 bg-white text-[#033D54] rounded-full font-medium hover:bg-opacity-90 transition-all">
              View Open Positions
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamsPage;
