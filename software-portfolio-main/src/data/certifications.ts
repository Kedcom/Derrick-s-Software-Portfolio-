export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
};

export const certifications: Certification[] = [
  {
    title: "Meta Front-End Developer",
    issuer: "Meta · Coursera",
    date: "2024",
    credentialUrl: "https://example.com",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://example.com",
  },
  {
    title: "Associate Android Developer",
    issuer: "Google",
    date: "2023",
    credentialUrl: "https://example.com",
  },
  {
    title: "PostgreSQL for Developers",
    issuer: "LinuxFoundation",
    date: "2023",
    credentialUrl: "https://example.com",
  },
];
