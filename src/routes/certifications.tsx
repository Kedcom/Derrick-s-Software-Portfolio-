import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/reveal";
import { certifications } from "@/data/certifications";
import { Award, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Derrick Ejinkeonye" },
      {
        name: "description",
        content:
          "Professional certifications and achievements in software engineering and cloud.",
      },
      { property: "og:title", content: "Certifications — Derrick Ejinkeonye" },
      {
        property: "og:description",
        content: "Verified credentials from Meta, AWS, Google, and more.",
      },
    ],
  }),
  component: CertsPage,
});

function CertsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-sm font-medium text-primary">Certifications</p>
        <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          Credentials & achievements
        </h1>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.05}>
            <a
              href={c.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="group glass block h-full rounded-2xl p-6 shadow-elegant transition-shadow hover:shadow-glow"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <Award className="h-5 w-5" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <h2 className="mt-4 font-display text-base font-semibold">
                {c.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              <p className="mt-3 text-xs text-muted-foreground">{c.date}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
