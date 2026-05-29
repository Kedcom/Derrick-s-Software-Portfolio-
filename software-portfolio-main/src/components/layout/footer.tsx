import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const quick = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <div className="font-display text-lg font-semibold">{profile.name}</div>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            {profile.tagline}
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold">Quick links</div>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {quick.map((q) => (
              <li key={q.to}>
                <Link
                  to={q.to}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {q.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Connect</div>
          <div className="mt-3 flex items-center gap-2">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            {/* <a
              href={profile.socials.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
            </a> */}
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
