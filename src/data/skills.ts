import {
  Code2,
  Server,
  Smartphone,
  Database,
  Cloud,
  Wrench,
  HandshakeIcon,
} from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: typeof Code2;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind",
      "jQuery",
      "Next.js",
      ".NET Framework",
      "UI/UX Design"
    ],
  },
  {
    title: "Backend & Data",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "SQL",
      "PHP",
      "Java",
      "C#",
      "C++",
      "OOP"
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      "Android Development",
      "Kotlin",
      "Java",
      "Game Development (Unity)",
      "C#",
      "C++",
      "Jetpack Compose",
    ],
  },
  {
    title: "Cloud / DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Docker",
      "GitHub",
      "Vercel",
      "Git",
      "Apache",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Visual Studio Code",
      "Figma",
      "Wix",
      "Unity",
      "Postman",
      "CodeBlock",
      "Android Studio"
    ],
  },
  {
    title: "Software Engineering",
    icon: Database,
    skills: [
      "System Design",
      "Agile Methodologies",
      "Scrum",
      "Hybrid Methodologies",
      "Waterfall Methodologies",
      "QA Testing",
    ],
  },
  {
    title: "Soft Skills",
    icon: HandshakeIcon,
    skills: [
      "Team Leadership",
      "Communication",
      "Critical Thinking",
      "Attention to Detail",
      "Customer Service",
      "Interpersonal Skills",
      "Problem Solving",
      "Project Management",
      "Time Management",
      "Adaptability",
    ],
  }
];
