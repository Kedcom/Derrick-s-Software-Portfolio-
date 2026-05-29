import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/reveal";
import { experiences, type ExperienceType } from "@/data/experience";
import { Briefcase, GraduationCap, Sparkles, Code } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Derrick Ejinkeonye" },
      {
        name: "description",
        content:
          "Work, internship, freelance, and education timeline of a full-stack software engineer.",
      },
      { property: "og:title", content: "Experience — Derrick Ejinkeonye" },
      {
        property: "og:description",
        content:
          "A timeline of my professional and educational journey.",
      },
    ],
  }),
  component: ExperiencePage,
});

const typeMeta: Record<
  ExperienceType,
  { label: string; icon: typeof Briefcase; color: string }
> = {
  work: { label: "Work", icon: Briefcase, color: "bg-primary" },
  internship: { label: "Internship", icon: Sparkles, color: "bg-chart-2" },
  freelance: { label: "Freelance", icon: Code, color: "bg-chart-4" },
  education: { label: "Education", icon: GraduationCap, color: "bg-chart-3" },
};

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-sm font-medium text-primary">Experience</p>
        <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          A timeline of my work
        </h1>
      </Reveal>

      <div className="relative mt-12">
        <div
          aria-hidden
          className="absolute bottom-0 left-4 top-0 w-px bg-border sm:left-1/2"
        />
        <ul className="space-y-10">
          {experiences.map((e, i) => {
            const meta = typeMeta[e.type];
            const Icon = meta.icon;
            const isRight = i % 2 === 1;
            return (
              <li key={i} className="relative">
                <div
                  className={cn(
                    "absolute left-4 top-1.5 -translate-x-1/2 sm:left-1/2",
                    "flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-background",
                    meta.color
                  )}
                >
                  <Icon className="h-3 w-3 text-primary-foreground" />
                </div>

                <Reveal delay={i * 0.04}>
                  <div
                    className={cn(
                      "ml-12 sm:ml-0 sm:w-[calc(50%-2rem)]",
                      isRight ? "sm:ml-auto sm:pl-8" : "sm:pr-8"
                    )}
                  >
                    <div className="glass rounded-2xl p-5 shadow-elegant">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-primary-foreground",
                            meta.color
                          )}
                        >
                          {meta.label}
                        </span>
                        <span className="text-muted-foreground">{e.period}</span>
                      </div>
                      <h3 className="mt-2 font-display text-lg font-semibold">
                        {e.role}
                      </h3>
                      <div className="text-sm text-muted-foreground">{e.org}</div>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                        {e.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
