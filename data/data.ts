export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  details?: string;
};

export const projectsData: Project[] = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description:
      "A robust dashboard integrating real-time data visualization and machine learning insights for enterprise clients.",
    details:
      "This project involved creating an AI-powered analytics dashboard using React, TypeScript, D3.js, and Node.js. The system allows users to visualize complex datasets in real time and apply predictive models directly within the interface.",
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80 ",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-stack solution built with Next.js and Stripe integration for seamless online shopping experiences.",
    details:
      "A scalable e-commerce platform developed using Next.js for SSR performance, TailwindCSS for styling, MongoDB as the database, and GraphQL for API handling. Stripe was integrated for secure payments.",
    image:
      "https://images.unsplash.com/photo-1603398938378-3b3ea3be998c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80 ",
    tags: ["Next.js", "TailwindCSS", "MongoDB", "GraphQL"],
  },
  {
    id: 3,
    title: "Mobile Fitness Tracking App",
    description:
      "Cross-platform mobile app tracking workouts, nutrition, and progress using React Native and Firebase.",
    details:
      "Built with React Native for cross-platform support and Firebase for backend services including authentication, storage, and real-time updates. The app supports daily workout logging, diet tracking, and goal setting.",
    image:
      "https://images.unsplash.com/photo-1611423784840-532e1c8abfee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80 ",
    tags: ["React Native", "Firebase", "Redux", "UI/UX"],
  },
  {
    id: 4,
    title: "Cloud-Based CRM System",
    description:
      "Customizable customer relationship management tool built with AWS cloud services and scalable architecture.",
    details:
      "A fully customizable CRM system deployed on AWS infrastructure with microservices architecture. It includes modules for sales tracking, customer support, reporting, and user roles management.",
    image:
      "https://images.unsplash.com/photo-1611974789855-8-80dc6e7d792e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80 ",
    tags: ["AWS", "Express.js", "PostgreSQL", "TypeScript"],
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
    description: "We're always looking for talented individuals to join our growing team.",
    buttonText: "View Open Positions"
  }
};