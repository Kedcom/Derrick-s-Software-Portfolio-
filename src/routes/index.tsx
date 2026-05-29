import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { ProjectCard } from "@/components/sections/project-card";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Derrick Ejinkeonye — Software Engineer" },
      {
        name: "description",
        content:
          "Software Engineer crafting premium web, mobile, and backend products. Explore featured projects and get in touch.",
      },
      { property: "og:title", content: "Derrick Ejinkeonye — Software Engineer" },
      {
        property: "og:description",
        content:
          "Featured projects, skills, and experience of a full-stack software engineer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      {/* What I build */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            What I build
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            From idea to production — across the stack.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.slice(0, 6).map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.title} delay={i * 0.05}>
                <div className="glass h-full rounded-2xl p-5 shadow-elegant">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="font-display font-semibold">{cat.title}</div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {cat.skills.slice(0, 4).join(" · ")}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Featured projects
              </h2>
              <p className="mt-2 text-muted-foreground">
                A selection of recent work I'm proud of.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link to="/projects">
                All projects <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Button asChild variant="outline">
            <Link to="/projects">
              All projects <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-8 text-center shadow-elegant sm:p-12">
            <div className="absolute -inset-1 -z-10 bg-hero-radial" />
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              I'm available for freelance work and full-time roles. Let's build
              something great together.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Start a conversation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/projects">See more work</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
