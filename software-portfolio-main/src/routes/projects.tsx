import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Derrick Ejinkeonye" },
      {
        name: "description",
        content:
          "Selected projects across React, Node.js, PHP, Kotlin, and C# — filterable by technology.",
      },
      { property: "og:title", content: "Projects — Derrick Ejinkeonye" },
      {
        property: "og:description",
        content:
          "Browse my full project portfolio with live demos and source code.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const allTech = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const [filter, setFilter] = useState<string>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.tech.includes(filter)),
    [filter]
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-sm font-medium text-primary">Projects</p>
        <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          Things I've built
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Filter by technology to find relevant work.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 flex flex-wrap gap-2">
          {allTech.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                filter === t
                  ? "border-primary bg-primary text-primary-foreground shadow-elegant"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div
        layout
        className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">
          No projects match this filter yet.
        </p>
      )}
    </div>
  );
}
