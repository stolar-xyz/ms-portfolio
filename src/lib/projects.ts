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
    slug: "koncepcja-wizji-produktu-b2c",
    title: "Koncepcja wizji produktu B2C",
    description:
      "Projekt koncepcyjno-researchowy dla InsightX: od silnika B2B do kierunku produktu B2C dla Smart Traderów. Efektem była wizja InfoFi, łącząca dane on-chain, giełdowe i AI w research-ready workspace.",
    image: "/assets/inx/work-inx.png",
    tags: ["UX Design", "Research", "Crypto / DeFi"],
    content:
      "Projekt koncepcyjno-researchowy dla InsightX: od silnika B2B do kierunku produktu B2C dla Smart Traderów. Efektem była wizja InfoFi, łącząca dane on-chain, giełdowe i AI w research-ready workspace.",
  },
  {
    slug: "readyset-aplikacja-do-planowania-wyjazdow",
    title: "ReadySet - aplikacja do planowania wyjazdów",
    description:
      "Aplikacja mobilna do wspólnego planowania wyjazdów. Umożliwia tworzenie planów ze znajomymi, dodawanie spersonalizowanych kategorii i formularzy, wspólne głosowanie na opcję, oraz prowadzenie rozmów w komentarzach przypiętych do konkretnych kategorii",
    image: "/assets/ready-set/work-readyset.png",
    tags: ["UX / UI Design", "Mobile app", "Travel", "End-to-end"],
    content:
      "Aplikacja mobilna do wspólnego planowania wyjazdów. Umożliwia tworzenie planów ze znajomymi, dodawanie spersonalizowanych kategorii i formularzy, wspólne głosowanie na opcję, oraz prowadzenie rozmów w komentarzach przypiętych do konkretnych kategorii",
  },
  {
    slug: "mova-aplikacja-do-nauki-jezykow",
    title: "Mova - aplikacja do nauki języków",
    description:
      "Nowoczesna platforma do nauki języków obcych. Zaprojektowana z myślą o użytkownikach poszukujących skutecznego i angażującego sposobu na rozwijanie umiejętności językowych. Dostępna zarówno w formie aplikacji mobilnej jak i wersji webowej, tak aby użytkownik miał możliwość skorzystania z niej w każdych okolicznościach.",
    image: "/assets/mova/work-mova.png",
    tags: ["UX / UI Design", "Web & Mobile", "Language app"],
    content:
      "Nowoczesna platforma do nauki języków obcych. Zaprojektowana z myślą o użytkownikach poszukujących skutecznego i angażującego sposobu na rozwijanie umiejętności językowych. Dostępna zarówno w formie aplikacji mobilnej jak i wersji webowej.",
  },
  {
    slug: "aurapura-design-system",
    title: "AuraPura - design system",
    description:
      "Projekt AuraPura to nie tylko design strony na trzy różne widoki, ale również pełny design system stworzony na podstawie podanego case study i briefu.",
    image: "/assets/aurapura/work-aurapura.png",
    tags: ["UX / UI Design", "Design system", "E-commerse"],
    content:
      "Projekt AuraPura to nie tylko design strony na trzy różne widoki, ale również pełny design system stworzony na podstawie podanego case study i briefu.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
