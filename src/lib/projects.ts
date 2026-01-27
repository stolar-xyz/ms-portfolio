export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  content: string;
  links?: {
    live?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with cart functionality, user authentication, and payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    content: "Built a full-featured e-commerce platform with product catalog, shopping cart, secure checkout, and order management. Implemented real-time inventory updates and integrated multiple payment providers.",
    links: {
      live: "https://example.com",
      github: "https://github.com/example/ecommerce"
    }
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=450&fit=crop",
    tags: ["TypeScript", "Next.js", "Prisma", "WebSocket"],
    content: "Developed a Kanban-style task manager with drag-and-drop functionality, real-time collaboration features, and customizable workflows. Supports team workspaces with role-based permissions.",
    links: {
      live: "https://example.com",
      github: "https://github.com/example/tasks"
    }
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description: "An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    content: "Created an AI content assistant that generates high-quality text content using GPT models. Features include tone adjustment, SEO optimization, and multi-language support.",
    links: {
      github: "https://github.com/example/ai-writer"
    }
  },
  {
    slug: "fitness-tracker",
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracking application with workout logging, progress charts, and goal setting.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=450&fit=crop",
    tags: ["React Native", "Firebase", "Chart.js", "TypeScript"],
    content: "Built a cross-platform mobile app for tracking workouts, nutrition, and fitness goals. Includes exercise library, custom workout builder, and detailed analytics dashboard.",
    links: {
      live: "https://example.com"
    }
  },
  {
    slug: "portfolio-template",
    title: "Portfolio Template",
    description: "A clean and modern portfolio template built with Astro and View Transitions for smooth navigation.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop",
    tags: ["Astro", "View Transitions", "Tailwind CSS", "React"],
    content: "This very template you're viewing! Features smooth page transitions, dark/light mode toggle, and fully responsive design. Built with performance and accessibility in mind.",
    links: {
      github: "https://github.com/example/portfolio"
    }
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with forecasts, interactive maps, and severe weather alerts.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=450&fit=crop",
    tags: ["Vue.js", "D3.js", "Weather API", "Mapbox"],
    content: "Developed an interactive weather application with 7-day forecasts, radar maps, and location-based alerts. Features include saved locations, weather widgets, and data visualization.",
    links: {
      live: "https://example.com",
      github: "https://github.com/example/weather"
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
