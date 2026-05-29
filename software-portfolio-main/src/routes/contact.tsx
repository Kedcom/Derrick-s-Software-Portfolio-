import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { profile } from "@/data/profile";
import { toast } from "sonner";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Derrick Ejinkeonye" },
      {
        name: "description",
        content:
          "Get in touch about freelance projects, full-time roles, or collaborations.",
      },
      { property: "og:title", content: "Contact — Derrick Ejinkeonye" },
      {
        property: "og:description",
        content: "Send me a message — I respond within 24 hours.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(10, "Message is too short").max(2000),
});

type FormErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function ContactPage() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      subject: String(form.get("subject") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    const result = schema.safeParse(data);
    if (!result.success) {
      const next: FormErrors = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as keyof FormErrors;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      setSubmitting(false);
      toast.error("Please fix the errors and try again.");
      return;
    }

    setErrors({});
    const body = `Hi ${profile.firstName},\n\n${result.data.message}\n\n— ${result.data.name} (${result.data.email})`;
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(
      result.data.subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    toast.success("Opening your email client…");
    setSubmitting(false);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <Reveal>
        <p className="text-sm font-medium text-primary">Contact</p>
        <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          Let's talk
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Have an idea, role, or project? Drop a message and I'll get back to
          you within 24 hours.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
        <Reveal delay={0.05}>
          <form
            onSubmit={onSubmit}
            className="glass space-y-5 rounded-2xl p-6 shadow-elegant sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" autoComplete="name" required />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required />
              {errors.subject && (
                <p className="text-xs text-destructive">{errors.subject}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={6} required />
              {errors.message && (
                <p className="text-xs text-destructive">{errors.message}</p>
              )}
            </div>
            <Button type="submit" size="lg" disabled={submitting} className="w-full sm:w-auto">
              <Send className="mr-1 h-4 w-4" />
              {submitting ? "Sending…" : "Send message"}
            </Button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="glass space-y-5 rounded-2xl p-6 shadow-elegant">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Email
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="mt-1 block break-all text-sm font-medium hover:text-primary"
              >
                {profile.email}
              </a>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Location
              </div>
              <p className="mt-1 text-sm">{profile.location}</p>
            </div>
            <div className="border-t border-border pt-5">
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Elsewhere
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-accent"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-accent"
                >
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
                {/* <a
                  href={profile.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-accent"
                >
                  <Twitter className="h-3.5 w-3.5" /> Twitter / X
                </a> */}
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-accent"
                >
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </div>
            </div>
          </aside>
        </Reveal>
      </div>
    </div>
  );
}
