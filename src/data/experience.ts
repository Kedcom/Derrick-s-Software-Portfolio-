export type ExperienceType = "work" | "internship" | "freelance" | "education";

export type ExperienceEntry = {
  type: ExperienceType;
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    type: "work",
    role: "Software Engineer",
    org: "Acme Tech",
    period: "2024 — Present",
    bullets: [
      "Built and shipped 4 production features powering 20k+ monthly users.",
      "Reduced API latency by 40% through query optimization and caching.",
      "Mentored 2 junior engineers on modern React patterns.",
    ],
  },
  {
    type: "freelance",
    role: "Full-Stack Developer (Freelance)",
    org: "Independent",
    period: "2023 — Present",
    bullets: [
      "Delivered 8+ web and mobile projects across 3 industries.",
      "End-to-end ownership: design, development, deployment, support.",
    ],
  },
  {
    type: "internship",
    role: "Backend Developer Intern",
    org: "Bright Labs",
    period: "Summer 2023",
    bullets: [
      "Designed REST endpoints for an internal analytics dashboard.",
      "Wrote unit & integration tests, reaching 85% coverage.",
    ],
  },
  {
    type: "education",
    role: " B.Sc. of Applied Computer Science",
    org: "Acadia University",
    period: "2025 – 2028",
    bullets: [
      "Coursework: Algorithms, Databases, Distributed Systems, Mobile Dev.",
    ],
  },
];
