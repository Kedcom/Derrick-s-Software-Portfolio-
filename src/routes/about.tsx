import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/profile";
import { GraduationCap, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Derrick Ejinkeonye" },
      {
        name: "description",
        content:
          "Software engineer with experience across web, mobile, backend, and databases. Learn more about my background.",
      },
      { property: "og:title", content: "About — Derrick Ejinkeonye" },
      {
        property: "og:description",
        content:
          "Background, education, and the kinds of problems I love solving.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-sm font-medium text-primary">About</p>
        <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          Engineer, builder, lifelong learner
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm a software engineer focused on building products people actually
            enjoy using. My work spans REST APIs in PHP and Node.js, modern web
            apps in React and Next.js, native Android apps with Kotlin and
            Jetpack Compose, and C# desktop tooling.
          </p>
          <p>
            I care deeply about craft — clean architecture, accessible UI, and
            measurable performance. I enjoy collaborating with designers,
            shipping fast, and iterating based on real feedback.
          </p>
          <p>Location: {profile.location.toLowerCase()}.</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="glass rounded-2xl p-6 shadow-elegant">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="font-display font-semibold">Education</div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              B.Sc. of Applied Computer Science, Computer Science — Acadia University
              <br />
              2025 – 2028
            </p>
          </div>

          <div className="glass rounded-2xl p-6 shadow-elegant">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="font-display font-semibold">Currently learning</div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Distributed systems, Rust, edge runtimes, and great product design.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
