import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Github, Linkedin, Mail, Phone, ExternalLink, Code2, GraduationCap, Award, Briefcase, Sparkles, Download } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aravind M — Full-Stack Developer Portfolio" },
      { name: "description", content: "Portfolio of Aravind M, a Computer Science engineering student and full-stack developer skilled in React, Python, and the MERN stack." },
      { property: "og:title", content: "Aravind M — Full-Stack Developer Portfolio" },
      { property: "og:description", content: "Portfolio of Aravind M, a Computer Science engineering student and full-stack developer skilled in React, Python, and the MERN stack." },
    ],
  }),
  component: Index,
});

const projects = [
  {
    title: "NoDueZ",
    tag: "Full-Stack",
    desc: "Digital No-Due Clearance System automating student exam hall ticket approvals. Students submit requests, departments verify and approve, with real-time status tracking.",
    stack: ["React.js", "PostgreSQL", "Node.js", "Auth"],
  },
  {
    title: "EmoVision",
    tag: "AI / Computer Vision",
    desc: "Python emotion recognizer that detects facial expressions from images and live video using deep learning, with emotion distribution analytics over time.",
    stack: ["Python", "OpenCV", "TensorFlow", "Django", "MongoDB"],
  },
  {
    title: "AutoParts Hub",
    tag: "MERN Full-Stack",
    desc: "Marketplace to search and purchase used automobile spare parts. REST APIs tested with Postman; MongoDB manages inventory and seller details.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Snake & Ladder",
    tag: "Python · Game Logic",
    desc: "Classic Snake and Ladder simulation in Python with dice rolls, turn management, and clean functional decomposition.",
    stack: ["Python", "OOP", "Logic"],
  },
];

const skills = {
  Programming: ["C", "C++", "Python", "Java"],
  "Core Concepts": ["DSA", "OOP", "AI/ML", "DBMS", "PowerBI"],
  "Web Technologies": ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
  Tools: ["VS Code", "IntelliJ", "Git", "GitHub", "Jupyter", "Canva", "Power BI"],
};

const certifications = [
  { name: "Mastering Data Structures Using C and C++", platform: "Udemy", year: "2025" },
  { name: "Web Designer (Beginner to Intermediate)", platform: "Udemy", year: "2025" },
  { name: "Python for Beginners", platform: "Udemy", year: "2025" },
  { name: "Web Development", platform: "Udemy", year: "2026" },
];

const education = [
  { school: "Sri Eshwar College of Engineering", degree: "B.E Computer Science Engineering", score: "CGPA: 8.1", years: "2024 – 2028" },
  { school: "R G Matric Higher Secondary School", degree: "HSC", score: "86%", years: "2022 – 2024" },
  { school: "R G Matric Higher Secondary School", degree: "SSLC", score: "74.4%", years: "2021 – 2022" },
];

function Section({ id, eyebrow, title, icon: Icon, children }: { id: string; eyebrow: string; title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <section id={id} className="relative mx-auto w-full max-w-5xl px-6 py-24 md:py-32">
      <Reveal>
        <div className="mb-12">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            <Icon className="h-4 w-4" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">{title}</h2>
          <div className="mt-4 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
        </div>
      </Reveal>
      {children}
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-semibold tracking-tight text-foreground">
            Aravind<span className="text-primary">.</span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-primary">About</a>
            <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
            <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
            <a href="#education" className="transition-colors hover:text-primary">Education</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="bg-hero relative flex min-h-screen items-center overflow-hidden">
        <div className="mx-auto w-full max-w-5xl px-6 pt-32">
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">Portfolio · 2026</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              Aravind <span className="text-gradient">M</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Computer Science engineering student and full-stack developer building practical, real-world software with React, Python, and the MERN stack.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
              >
                View Projects <Sparkles className="h-4 w-4" />
              </a>
              <a
                href="/Aravind_s_Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Download Resume <Download className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Get in Touch
              </a>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-16 flex items-center gap-6 text-muted-foreground">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-primary"><Github className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/in/aravind-m-261bb832a/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="A builder who ships." icon={Sparkles}>
        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            I'm a B.E. Computer Science student at Sri Eshwar College of Engineering with a passion for full-stack development, AI/ML, and clean problem solving. I've solved <span className="text-primary font-semibold">1500+ DSA problems</span> across LeetCode and SkillRack, and I love turning real workflows — like student clearance approvals — into thoughtfully engineered software.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { k: "1500+", v: "Problems Solved" },
              { k: "4+", v: "Projects Built" },
              { k: "8.1", v: "Current CGPA" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="text-3xl font-bold text-gradient">{s.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Selected Work" title="Projects" icon={Briefcase}>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
                <div className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">{p.tag}</div>
                <h3 className="mb-3 flex items-center gap-2 text-2xl font-semibold text-foreground">
                  {p.title}
                  <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-secondary-foreground">{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Toolkit" title="Skills & Stack" icon={Code2}>
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([cat, items], i) => (
            <Reveal key={cat} delay={i * 80}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">{cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="rounded-md border border-border bg-background/40 px-3 py-1.5 text-sm text-foreground">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" eyebrow="Background" title="Education" icon={GraduationCap}>
        <div className="space-y-4">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 100}>
              <div className="flex flex-col gap-2 rounded-2xl border border-border bg-card p-6 shadow-card md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{e.degree}</h3>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="rounded-full bg-primary/15 px-3 py-1 font-medium text-primary">{e.score}</span>
                  <span className="text-muted-foreground">{e.years}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mb-6 mt-16 flex items-center gap-2 text-2xl font-bold text-foreground">
            <Award className="h-5 w-5 text-primary" /> Certifications
          </h3>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <div className="flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
                <div>
                  <p className="font-medium text-foreground">{c.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.platform}</p>
                </div>
                <span className="text-xs text-primary">{c.year}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's build something." icon={Mail}>
        <Reveal>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Open to internships, collaborations, and interesting full-stack problems. The fastest way to reach me is email.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a href="mailto:aravind.m2024cse@sece.ac.in" className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="font-medium text-foreground group-hover:text-primary">aravind.m2024cse@sece.ac.in</div>
              </div>
            </a>
            <a href="tel:+919080425338" className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                <div className="font-medium text-foreground group-hover:text-primary">+91 90804 25338</div>
              </div>
            </a>
            <a href="/Aravind_s_Resume.pdf" download className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
              <Download className="h-6 w-6 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Resume</div>
                <div className="font-medium text-foreground group-hover:text-primary">Download PDF</div>
              </div>
            </a>
          </div>
        </Reveal>
      </Section>

    </main>
  );
}
