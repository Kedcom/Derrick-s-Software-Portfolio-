import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/reveal";
import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Derrick Ejinkeonye" },
      {
        name: "description",
        content:
          "Frontend, backend, mobile, databases, cloud, and tooling I use to ship products.",
      },
      { property: "og:title", content: "Skills — Derrick Ejinkeonye" },
      {
        property: "og:description",
        content:
          "Categorized overview of the technologies I work with daily.",
      },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-sm font-medium text-primary">Skills</p>
        <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          Technologies I work with
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A practical toolkit refined through real projects — not just buzzwords.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <Reveal key={cat.title} delay={i * 0.05}>
              <div className="glass h-full rounded-2xl p-6 shadow-elegant transition-shadow hover:shadow-glow">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-display text-lg font-semibold">
                    {cat.title}
                  </h2>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <Badge
                      key={s}
                      variant="secondary"
                      className="bg-accent text-accent-foreground"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
