import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Github, Linkedin, Mail, Phone, ExternalLink, Code2, GraduationCap, Award, Briefcase, Sparkles, Download, ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), pause);
        else setCharIdx(c => c + 1);
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) { setDeleting(false); setWordIdx(i => (i + 1) % words.length); setCharIdx(0); }
        else setCharIdx(c => c - 1);
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);
  return display;
}

function SkillBar({ label, pct, delay = 0 }: { label: string; pct: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => setFilled(true), delay); obs.disconnect(); } }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span className="font-medium text-foreground">{label}</span>
        <span>{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" style={{ width: filled ? `${pct}%` : "0%" }} />
      </div>
    </div>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`back-to-top ${visible ? "visible" : ""}`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5 text-white" />
    </button>
  );
}

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
  const typed = useTypewriter(["Full-Stack Developer", "MERN Stack Engineer", "AI/ML Enthusiast", "Problem Solver"]);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "projects", "skills", "education", "contact"];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.4 }
    );
    sections.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <BackToTop />

      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-bold tracking-tight text-foreground">
            Aravind<span className="text-gradient">.</span>
          </a>
          <div className="hidden gap-8 text-sm text-muted-foreground md:flex">
            {["about","projects","skills","education","contact"].map(s => (
              <a key={s} href={`#${s}`} className={`capitalize transition-colors hover:text-primary ${activeSection === s ? "nav-link-active font-semibold" : ""}`}>{s}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="bg-hero relative flex min-h-screen items-center overflow-hidden">
        {/* Floating orbs */}
        <div className="orb orb-purple" style={{ width: 500, height: 500, top: "-10%", left: "-10%" }} />
        <div className="orb orb-cyan" style={{ width: 400, height: 400, bottom: "5%", right: "-5%" }} />

        <div className="mx-auto w-full max-w-5xl px-6 pt-32">
          <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <Reveal>
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary">Portfolio · 2026</p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
                  Aravind <span className="text-gradient">M</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-4 text-xl font-semibold typewriter-cursor" style={{ minHeight: "2rem" }}>
                  <span className="text-gradient-cyan">{typed}</span>
                </p>
              </Reveal>
              <Reveal delay={280}>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
                  Computer Science engineering student building practical, real-world software with React, Python, and the MERN stack.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.05] hover:shadow-glow"
                  >
                    View Projects <Sparkles className="h-4 w-4" />
                  </a>
                  <a
                    href="/Aravind's_Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/20 hover:scale-[1.03]"
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
                <div className="mt-12 flex items-center gap-6 text-muted-foreground">
                  <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-all hover:text-primary hover:scale-110"><Github className="h-6 w-6" /></a>
                  <a href="https://www.linkedin.com/in/aravind-m-261bb832a/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-all hover:text-primary hover:scale-110"><Linkedin className="h-6 w-6" /></a>
                  <a href="mailto:aravind.m2024cse@sece.ac.in" aria-label="Email" className="transition-all hover:text-primary hover:scale-110"><Mail className="h-6 w-6" /></a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="photo-float shrink-0">
                <div className="photo-ring rounded-full p-1" style={{ background: "linear-gradient(135deg, oklch(0.68 0.28 300), oklch(0.72 0.20 200))" }}>
                  <img
                    src="/Polished Outdoor Formal Portrait.webp"
                    alt="Aravind M"
                    className="h-56 w-56 rounded-full object-cover md:h-72 md:w-72"
                    style={{ border: "3px solid oklch(0.10 0.025 275)" }}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="A builder who ships." icon={Sparkles}>
        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            I'm a B.E. Computer Science student at Sri Eshwar College of Engineering with a passion for full-stack development, AI/ML, and clean problem solving. I've solved <span className="text-gradient font-semibold">1500+ DSA problems</span> across LeetCode and SkillRack, and I love turning real workflows — like student clearance approvals — into thoughtfully engineered software.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { k: "1500+", v: "Problems Solved", icon: "🧩" },
              { k: "4+", v: "Projects Built", icon: "🚀" },
              { k: "8.1", v: "Current CGPA", icon: "🎓" },
            ].map((s) => (
              <div key={s.v} className="card-glow-border rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1">
                <div className="text-3xl mb-2">{s.icon}</div>
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
              <article className="card-glow-border group h-full rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className="mb-3 text-xs font-medium uppercase tracking-widest neon-tag inline-block rounded-full px-3 py-1">{p.tag}</div>
                <h3 className="mb-3 mt-2 flex items-center gap-2 text-2xl font-semibold text-foreground">
                  {p.title}
                  <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-primary" />
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary">{t}</span>
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
              <div className="card-glow-border rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gradient">{cat}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="rounded-md border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/60 hover:text-primary">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Skill proficiency bars */}
        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-gradient">Proficiency</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { label: "React / JavaScript", pct: 85 },
                { label: "Python", pct: 80 },
                { label: "Node.js / Express", pct: 75 },
                { label: "C / C++", pct: 78 },
                { label: "MongoDB / PostgreSQL", pct: 70 },
                { label: "DSA", pct: 88 },
              ].map((s, i) => <SkillBar key={s.label} label={s.label} pct={s.pct} delay={i * 120} />)}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* EDUCATION */}
      <Section id="education" eyebrow="Background" title="Education" icon={GraduationCap}>
        <div className="space-y-4">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 100}>
              <div className="card-glow-border flex flex-col gap-2 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{e.degree}</h3>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="rounded-full px-3 py-1 font-semibold text-sm" style={{ background: "linear-gradient(135deg, oklch(0.68 0.28 300 / 0.2), oklch(0.72 0.20 200 / 0.2))", color: "oklch(0.82 0.20 200)" }}>{e.score}</span>
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
              <div className="card-glow-border flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5">
                <div>
                  <p className="font-medium text-foreground">{c.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.platform}</p>
                </div>
                <span className="neon-tag rounded-full px-2 py-0.5 text-xs font-semibold">{c.year}</span>
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
            <a href="/Aravind's_Resume.pdf" download className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
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
