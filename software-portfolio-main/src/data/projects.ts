export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string; // gradient class fallback if no image
  featured?: boolean;
};

// Replace the GitHub/demo URLs and descriptions with your real projects.
export const projects: Project[] = [
  {
    id: "p1",
    title: "TaskFlow — SaaS Dashboard",
    description:
      "Realtime team task management with role-based permissions, charts, and a polished design system.",
    tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    github: "https://github.com/yourusername/taskflow",
    demo: "https://example.com",
    image: "from-blue-500 to-indigo-600",
    featured: true,
  },
  {
    id: "p2",
    title: "QuickAPI — REST Backend",
    description:
      "Production-grade REST API with JWT auth, rate limiting, and OpenAPI docs. Used by 3 client apps.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/yourusername/quickapi",
    demo: "https://example.com",
    image: "from-cyan-500 to-blue-600",
    featured: true,
  },
  {
    id: "p3",
    title: "NoteJet — Android App",
    description:
      "Material You note-taking app with offline-first sync, biometric lock, and rich text editing.",
    tech: ["Kotlin", "Jetpack Compose", "SQLite"],
    github: "https://github.com/yourusername/notejet",
    demo: "https://example.com",
    image: "from-indigo-500 to-purple-600",
    featured: true,
  },
  {
    id: "p4",
    title: "Invoicely — PHP Web App",
    description:
      "Small-business invoicing platform with PDF generation, recurring billing, and a client portal.",
    tech: ["PHP", "Laravel", "MySQL"],
    github: "https://github.com/yourusername/invoicely",
    demo: "https://example.com",
    image: "from-sky-500 to-blue-700",
  },
  {
    id: "p5",
    title: "WinTools — C# Desktop Suite",
    description:
      "Windows desktop utility for batch file operations, system monitoring, and quick automation scripts.",
    tech: ["C#", ".NET", "WPF"],
    github: "https://github.com/yourusername/wintools",
    demo: "https://example.com",
    image: "from-blue-600 to-slate-700",
  },
  {
    id: "p6",
    title: "Pixel Portfolio Kit",
    description:
      "Open-source UI component library for portfolios — accessible, themeable, and fully responsive.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/yourusername/pixel-kit",
    demo: "https://example.com",
    image: "from-violet-500 to-blue-600",
  },
];
