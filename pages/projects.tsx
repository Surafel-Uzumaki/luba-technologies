"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { projectsData, Project } from "@/data/data";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animate cards on scroll
  useEffect(() => {
    if (!cardRefs.current.length) return;

    cardRefs.current.forEach((el,) => {
      if (el) {
        gsap.from(el, {
          opacity: 0,
          y: 60,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      }
    });
  }, []);

  const displayedProjects = projectsData.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-white" ref={sectionRef}>
      {/* Hero Section */}
      <section
        id="projects"
        className="py-20 px-6 sm:px-8 lg:px-20 text-center relative"
      >
        <h1
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ color: "#033D54" }}
        >
          Our Featured Projects
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Explore some of our most impactful technology solutions designed and
          delivered for global clients.
        </p>
        <div className="mt-6 w-20 h-1 bg-gradient-to-r from-[#033D54] to-[#0a6b8a] mx-auto"></div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-6 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            />
          ))}
        </div>

        {/* See More / Show Less Button */}
        {projectsData.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() =>
                setVisibleCount(visibleCount === 3 ? projectsData.length : 3)
              }
              className="px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 mx-auto transition-transform hover:bg-[#0a6b8a]"
              style={{
                backgroundColor: "#033D54",
                color: "white",
              }}
            >
              {visibleCount === 3 ? "See More Projects" : "Show Less"}
              {visibleCount === 3 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              )}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

// Project Card Component
const ProjectCard = ({
  project,
  ref,
}: {
  project: Project;
  ref?: React.Ref<HTMLDivElement>;
}) => {
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      style={{
        boxShadow: "0 10px 25px rgba(3, 61, 84, 0.1)",
      }}
    >
      <Link href={`/projects/${project.id}`}>
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </Link>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2" style={{ color: "#033D54" }}>
          {project.title}
        </h2>

        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* Highlights / Details Section */}
        <div className="mb-4">
          <h3
            className="text-lg font-semibold mb-2 flex items-center"
            style={{ color: "#033D54" }}
          >
            <span className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            Key Highlights
          </h3>
          <ul className="space-y-2">
            {project.details
              ?.split(". ")
              .slice(0, 3)
              .map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-sm text-gray-700"
                >
                  <span
                    className="inline-block mr-2 mt-1"
                    style={{ color: "#033D54" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                  </span>
                  <span>{point.trim()}.</span>
                </li>
              ))}
          </ul>
        </div>

        {/* View Details Button - Rectangle Style */}
        <Link href={`/projects/${project.id}`}>
          <button
            className="w-full py-3 mt-2 rounded-md font-medium flex items-center justify-center gap-2 transition-transform hover:bg-[#0a6b8a] group"
            style={{
              backgroundColor: "#033D54",
              color: "white",
            }}
          >
            <span>View Full Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                backgroundColor: "#033D54",
                color: "white",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
