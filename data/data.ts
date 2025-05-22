export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  details?: string;
  link?: string; // New field
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "A Company Profile Website",
    description:
      "A robhust company profile website built with React & CSS. Its Responsive and user-friendly. It has a modern design and is easy to navigate. Allowing users to find information quickly.",
    details:
      "A company profile website built with React and CSS, featuring a modern design and responsive layout. The site includes sections for services, testimonials, and a contact form, ensuring easy navigation and quick access to information.",
    image: "./images/telsem.jpg",
    tags: ["React", "CSS", "JavaScript", "Responsive Design"],
    link: "https://telsem-5553d.web.app/",
  },
  {
    id: 2,
    title: "A Platform For A Marketing Company",
    description:
      "Built with Next.js, Typescript and Tailwind Stripe integration for seamless online showroom for the company.",
    details:
      "A platform for a marketing company built with Next.js and TypeScript, featuring a modern design and responsive layout. The site includes sections for services, testimonials, and a contact form, ensuring easy navigation and quick access to information.",
    image: "./images/grays.jpg",
    tags: ["Next.js", "TailwindCSS", "Typescript", "Formsphere"],
    link: "https://gray-marketing.vercel.app/",
  },
  {
    id: 3,
    title: "... In development (Hamere Noah Furniture)",
    description:
      "Responsive and user-friendly furniture e-commerce website built with Nextjs,TailwindCss and Typescript.",
    details:
      "A responsive and user-friendly furniture e-commerce website built with Next.js, Tailwind CSS, and TypeScript. The site features a modern design, easy navigation, and a seamless shopping experience for users.",
    image: "./images/hamere.jpg",
    tags: ["React", "NextJs", "Tailwind", "UI/UX"],
    link: "https://hm-furniture.vercel.app/",
  },
  {
    id: 4,
    title: "... In development (Yafet properties)",
    description:
      "A responsive online platform for a realstate salesman",
    details:
      "Allowing users to find properties quickly and easily. The platform is built with Nextjs, TypeScript, ensuring a robust and scalable solution for real estate sales. showing properties, managing listings, and facilitating communication between buyers and sellers.",
    image:
      "./images/yafet.jpg", 
    tags: ["AWS", "Express.js", "PostgreSQL", "TypeScript"],
    link: "https://example.com/project4",
  },
];

// teams data

export type teamMembers = {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
};

export const teamMembers = [
  {
    id: 1,
    name: "Mikiyas Taye",
    role: "CEO & Website Developer",
    bio: "",
    expertise: [],
  },
  {
    id: 2,
    name: "Amen Dereje",
    role: "Website Developer",
    bio: "",
    expertise: [],
  },
  {
    id: 3,
    name: "Betselot Bezuayehu",
    role: "Software Developer",
    bio: "",
    expertise: [],
  },
  {
    id: 4,
    name: "Jecoliah Menberu",
    role: "Sales Agent",
    bio: "",
    expertise: [],
  },
  {
    id: 5,
    name: "Bisrat Kifle",
    role: "Graphics Designer and Video Editor",
    bio: "",
    expertise: [],
  },
  {
    id: 6,
    name: "Tesfahun Gibitan",
    role: "3D and VFX Artist",
    bio: "",
    expertise: [],
  },
  {
    id: 7,
    name: "Mikyas Seffi",
    role: "Marketing Consultant",
    bio: "",
    expertise: [],
  },
];

export const teamPageData = {
  title: "Meet Our Team",
  subtitle: "The talented individuals driving innovation at IKIM-TECH",
  cta: {
    title: "Join Our Team",
    description:
      "We're always looking for talented individuals to join our growing team.",
    buttonText: "View Open Positions",
  },
};
