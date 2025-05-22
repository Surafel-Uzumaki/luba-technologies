import { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  type NavLink = {
    name: string;
    type: "scroll" | "link";
    id?: string;
    path?: string;
  };

  const navLinks: NavLink[] = useMemo(
    () => [
      { name: "Home", type: "scroll", id: "home" },
      { name: "About", type: "scroll", id: "aboutus" },
      { name: "Services", type: "scroll", id: "services" },
      { name: "Projects", type: "scroll", id: "projects" },
      { name: "Contact", type: "scroll", id: "contactus" },
      // Example of a link type:
      // { name: "Blog", type: "link", path: "/blog" },
    ],
    []
  );

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);

      const sections = navLinks
        .filter((link) => link.type === "scroll" && link.id)
        .map((link) => document.getElementById(link.id!))
        .filter((section): section is HTMLElement => section !== null);

      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
        updateHighlightPosition(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const updateHighlightPosition = (activeId: string) => {
    const activeElement = document.querySelector(
      `[data-id="${activeId}"]`
    ) as HTMLElement;
    if (activeElement && highlightRef.current) {
      gsap.to(highlightRef.current, {
        x: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  };

  const handleNavClick = (link: (typeof navLinks)[0], e: React.MouseEvent) => {
    if (link.type === "scroll" && link.id) {
      e.preventDefault();
      const element = document.getElementById(link.id);
      if (element) {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: element, offsetY: 80 },
          ease: "power3.inOut",
        });
        setIsOpen(false);
        updateHighlightPosition(link.id);
      }
    }
  };

  const isActive = (link: (typeof navLinks)[0]) => {
    if (link.type === "scroll") {
      return activeSection === link.id;
    }
    return router.pathname === link.path;
  };

  return (
    <header
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-[#033D54]/90 backdrop-blur-xl border-b border-slate-700/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="w-full px-3">
        <nav className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative overflow-hidden group">
              <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 bg-clip-text text-transparent transition-all duration-300 group-hover:opacity-80  sm:pl-8 md:pl-8 ">
                Luba   
              </span> 
              <span className="text-2xl sm:text-3xl font-black relative">
                <span className="text-white transition-all duration-300 group-hover:opacity-80 pl-2">
                    Technologies
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div
              ref={highlightRef}
              className="absolute h-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-xl -z-10 transition-all duration-300"
            />
            {navLinks.map((link) =>
              link.type === "link" && link.path ? (
                <Link
                  key={link.path}
                  href={link.path}
                  data-id={link.path}
                  className={`relative px-6 py-2.5 text-[15px] font-semibold tracking-wide transition-all duration-300 rounded-xl 
                    ${
                      isActive(link)
                        ? "text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-lg shadow-purple-500/20"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }
                    before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-purple-500/50 before:via-pink-500/50 before:to-orange-500/50 
                    before:opacity-0 before:transition-opacity hover:before:opacity-20 overflow-hidden group
                  `}
                >
                  <span className="relative z-10 flex items-center">
                    {link.name}
                    <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </span>
                </Link>
              ) : (
                <button
                  key={link.id}
                  data-id={link.id}
                  onClick={(e) => handleNavClick(link, e)}
                  className={`relative px-6 py-2.5 text-[15px] font-semibold tracking-wide transition-all duration-300 rounded-xl 
                    ${
                      isActive(link)
                        ? "text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-lg shadow-purple-500/20"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }
                    before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-purple-500/50 before:via-pink-500/50 before:to-orange-500/50 
                    before:opacity-0 before:transition-opacity hover:before:opacity-20 overflow-hidden group
                  `}
                >
                  <span className="relative z-10 flex items-center">
                    {link.name}
                    <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </span>
                </button>
              )
            )}
          </div>

          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center ml-2"
            aria-label="Toggle menu"
          >
            <div className="w-7 h-6 relative flex flex-col items-end justify-center gap-1.5">
              <span
                className={`block h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transform origin-center transition-all duration-300 ease-in-out ${
                  isOpen ? "w-7 rotate-45 translate-y-[7px]" : "w-7"
                }`}
              />
              <span
                className={`block h-[2px] bg-gradient-to-r from-pink-500 via-orange-500 to-purple-500 transform origin-center transition-all duration-300 ease-in-out ${
                  isOpen ? "w-0 opacity-0" : "w-5"
                }`}
              />
              <span
                className={`block h-[2px] bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 transform origin-center transition-all duration-300 ease-in-out ${
                  isOpen ? "w-7 -rotate-45 -translate-y-[7px]" : "w-7"
                }`}
              />
            </div>
          </button>

        </nav>

        {/* Mobile Navigation */}
        <div
          ref={menuRef}
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 px-2 mt-3 bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-slate-700/50">
            {navLinks.map((link) =>
              link.type === "link" && link.path ? (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block px-4 py-3 text-[15px] font-semibold tracking-wide transition-all duration-300 rounded-xl mb-1 group
                    ${
                      isActive(link)
                        ? "text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                >
                  <span className="relative z-10 flex items-center">
                    {link.name}
                    <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </span>
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={(e) => handleNavClick(link, e)}
                  className={`w-full text-left px-4 py-3 text-[15px] font-semibold tracking-wide transition-all duration-300 rounded-xl mb-1 group
                    ${
                      isActive(link)
                        ? "text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                >
                  <span className="relative z-10 flex items-center">
                    {link.name}
                    <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </span>
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        header {
          animation: slideDown 0.5s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
