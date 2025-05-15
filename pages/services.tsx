import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Custom SVG Icons
const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const services = [
  {
    title: "Web Development",
    description:
      "Build user-friendly websites that work seamlessly on all devices. Create intuitive designs that enhance user experience and engagement.",
    icon: "code",
    color: "from-[#033D54] to-[#022534]",
  },
  {
    title: "Mobile App Development",
    description:
      "Custom iOS and Android applications tailored to your business needs, along with efficient cross-platform solutions.",
    icon: "phone",
    color: "from-[#033D54] to-[#022534]",
  },
  {
    title: "UI/UX Design",
    description:
      "Emphasizing user-centric design to create intuitive interfaces, along with prototyping and wireframing to visualize and test concepts.",
    icon: "design",
    color: "from-[#033D54] to-[#022534]",
  },
  {
    title: "Web Hosting",
    description:
      "Ensures that your website is accessible to users, allowing businesses and individuals to establish their online presence easily.",
    icon: "server",
    color: "from-[#033D54] to-[#022534]",
  },
  {
    title: "Graphics Design",
    description:
      "Creating logos, branding assets, and digital visuals for websites and social media by merging artistic flair with technical expertise.",
    icon: "palette",
    color: "from-[#033D54] to-[#022534]",
  },
  {
    title: "Printing",
    description:
      "Our printing design service specializes in creating high-quality graphics for print media like brochures, business cards, and posters.",
    icon: "print",
    color: "from-[#033D54] to-[#022534]",
  },
  {
    title: "3D Designing",
    description:
      "Offers innovative solutions for creating detailed three-dimensional models and visualizations. Whether for product design, architectural visualization, or animation.",
    icon: "cube",
    color: "from-[#033D54] to-[#022534]",
  },
  {
    title: "Video Editing",
    description:
      "Transforms raw footage into polished, engaging content. We specialize in creating captivating videos for promotional materials, social media, events, and more.",
    icon: "video",
    color: "from-[#033D54] to-[#022534]",
  },
  {
    title: "Market Consultancy",
    description:
      "Expert analysis and strategic insights to help businesses understand market trends, identify opportunities, and make data-driven decisions for growth and success.",
    icon: "chart",
    color: "from-[#033D54] to-[#022534]",
  },
];

// Particle animation component
const getRandomParticles = (count: number) => {
  // Use a fixed size if window is not defined (SSR)
  const width = typeof window !== "undefined" ? window.innerWidth : 1440;
  const height = typeof window !== "undefined" ? window.innerHeight : 800;
  return Array.from({ length: count }, () => ({
    initialX: Math.random() * width,
    initialY: Math.random() * height,
    scale: Math.random() * 0.5 + 0.5,
    animX: [
      Math.random() * width,
      Math.random() * width,
      Math.random() * width,
    ],
    animY: [
      Math.random() * height,
      Math.random() * height,
      Math.random() * height,
    ],
    opacity: [0.1, 0.3, 0.1],
    duration: Math.random() * 20 + 20,
    width: Math.random() * 20 + 10,
    height: Math.random() * 20 + 10,
  }));
};

const ParticleField = () => {
  const particles = React.useMemo(() => getRandomParticles(50), []);
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#033D54]/10"
          initial={{
            x: p.initialX,
            y: p.initialY,
            scale: p.scale,
          }}
          animate={{
            x: p.animX,
            y: p.animY,
            opacity: p.opacity,
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: p.width,
            height: p.height,
          }}
        />
      ))}
    </div>
  );
};

// Enhanced wave background
const EnhancedWaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 1440 800"
        className="w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="wave-gradient-1"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop offset="0%" stopColor="#033D54" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#022534" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#033D54" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient
            id="wave-gradient-2"
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
          >
            <stop offset="0%" stopColor="#022534" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#033D54" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#022534" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,400 C150,500 350,300 500,400 C650,500 850,700 1000,700 C1150,700 1300,500 1440,400 L1440,800 L0,800 Z"
          fill="url(#wave-gradient-1)"
          animate={{
            d: [
              "M0,400 C150,500 350,300 500,400 C650,500 850,700 1000,700 C1150,700 1300,500 1440,400 L1440,800 L0,800 Z",
              "M0,400 C150,300 350,500 500,400 C650,300 850,100 1000,200 C1150,300 1300,500 1440,400 L1440,800 L0,800 Z",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M0,450 C150,550 350,350 500,450 C650,550 850,750 1000,750 C1150,750 1300,550 1440,450 L1440,800 L0,800 Z"
          fill="url(#wave-gradient-2)"
          animate={{
            d: [
              "M0,450 C150,550 350,350 500,450 C650,550 850,750 1000,750 C1150,750 1300,550 1440,450 L1440,800 L0,800 Z",
              "M0,450 C150,350 350,550 500,450 C650,350 850,150 1000,250 C1150,350 1300,550 1440,450 L1440,800 L0,800 Z",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </svg>
    </div>
  );
};

// Gradient Mesh Background
const GradientMesh = () => {
  return (
    <div className="absolute inset-0">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #033D54 0%, transparent 50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, #022534 0%, transparent 50%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

const Services = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2.2,
          spacing: 24,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 2.8,
          spacing: 32,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3.5,
          spacing: 40,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 4,
          spacing: 48,
        },
      },
    },
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-white py-32 overflow-hidden"
    >
      {/* Premium Background Animations */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <GradientMesh />
        <EnhancedWaveBackground />
        <ParticleField />
      </motion.div>

      {/* Enhanced floating grid with blur effect */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:120px_120px]"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#033D54] to-[#022534]">
              Our
            </span>
            <span className="text-[#033D54]"> Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider pb-2">
            {services.map((service, i) => (
              <div key={i} className="keen-slider__slide">
                <ServiceCard service={service} index={i} />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => slider.current?.prev()}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 text-[#033D54] hover:bg-gray-100 hover:text-[#022534] transition backdrop-blur-sm shadow-md border border-gray-200"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 text-[#033D54] hover:bg-gray-100 hover:text-[#022534] transition backdrop-blur-sm shadow-md border border-gray-200"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

type Service = {
  title: string;
  description: string;
  icon: string;
  color: string;
};

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      whileHover={{ y: -10 }}
      className="relative h-full group cursor-pointer mx-1"
    >
      {/* Liquid gradient background */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
      />

      {/* Glass card */}
      <div className="relative h-full bg-white/80 border border-gray-200 rounded-3xl p-8 backdrop-blur-sm overflow-hidden shadow-lg">
        {/* Floating bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#033D54]/10"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                width: Math.random() * 40 + 10,
                height: Math.random() * 40 + 10,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: [0, 0.3, 0],
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Two icons - one white, one colored */}
          <div className="flex items-center gap-4 mb-8">
            {/* White icon with colored background */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-12 h-12 rounded-xl bg-[#033D54] flex items-center justify-center self-start shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 16 16"
              >
                {getIconPath(service.icon)}
              </svg>
            </motion.div>

            {/* Colored icon with white background */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center self-start shadow-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#033D54"
                viewBox="0 0 16 16"
              >
                {getIconPath(service.icon)}
              </svg>
            </motion.div>
          </div>

          <h3 className="text-2xl font-bold text-[#033D54] mb-4">
            {service.title}
          </h3>
          <p className="text-gray-700">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const getIconPath = (icon: string) => {
  switch (icon) {
    case "code":
      return (
        <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
      );
    case "phone":
      return (
        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
      );
    case "design":
      return (
        <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
      );
    case "server":
      return (
        <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z" />
      );
    case "palette":
      return (
        <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      );
    case "print":
      return <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />;
    case "cube":
      return (
        <path d="M7.918 8.414h-.879V7.342h.838l.041-1.072H7.38V5.398h.918l.062-1.083H7.34V3.443h.78l.069-1.12H6.33L6.262 3.443H5.88l.069-1.12H4.089l.069 1.12h.479v.872H3.818l.041 1.083h.818v.872H3.859l.041 1.072h.717v1.073h-.879V14h.879v-3.318h.68V14h.879V8.414h-.68z" />
      );
    case "video":
      return (
        <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.429z" />
      );
    case "chart":
      return (
        <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z" />
      );
    default:
      return null;
  }
};

export default Services;
