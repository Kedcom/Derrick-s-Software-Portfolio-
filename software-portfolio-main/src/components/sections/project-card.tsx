"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-elegant"
    >
      <div
        className={`relative aspect-[16/9] w-full bg-gradient-to-br ${project.image}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {project.featured && (
          <Badge className="absolute left-3 top-3 gap-1 bg-background/90 text-foreground hover:bg-background">
            <Star className="h-3 w-3 fill-primary text-primary" /> Featured
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="text-xs font-normal">
              {t}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Github className="h-3.5 w-3.5" /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Live demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
