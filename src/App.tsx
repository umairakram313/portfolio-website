import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Thoughts", href: "#thoughts" },
];

const PROJECTS = [
  {
    index: "01",
    title: "Autonomous Terrain Navigator",
    category: "Robotics / Control Systems",
    year: "2024",
    tags: ["ROS2", "SLAM", "Embedded C++"],
    excerpt:
      "A ground robot capable of mapping and traversing unstructured outdoor terrain using sensor fusion and adaptive path planning.",
  },
  {
    index: "02",
    title: "Haptic Feedback Exoskeleton Glove",
    category: "Human–Machine Interface",
    year: "2023",
    tags: ["Arduino", "PWM", "Flex Sensors"],
    excerpt:
      "Wearable system translating grip force readings into proportional haptic cues—designed for teleoperation applications.",
  },
  {
    index: "03",
    title: "ML-Driven Predictive Maintenance",
    category: "Industrial IoT",
    year: "2024",
    tags: ["Python", "TensorFlow", "MQTT"],
    excerpt:
      "Vibration signature classification pipeline deployed on edge hardware for real-time bearing fault detection.",
  },
  {
    index: "04",
    title: "Quadruped Gait Optimizer",
    category: "Biomechanics / Simulation",
    year: "2023",
    tags: ["MATLAB", "Simulink", "Genetic Algorithm"],
    excerpt:
      "Evolutionary optimization of legged locomotion gaits across varied terrain gradients, benchmarked in simulation.",
  },
];

const THOUGHTS = [
  {
    date: "Aug 2026",
    title: "On the gap between simulation and the physical world",
    excerpt:
      "Every model is a compression. The question is which losses matter—and which silences are acceptable.",
  },
  {
    date: "Jun 2026",
    title: "What robotics taught me about uncertainty",
    excerpt:
      "A system that knows what it doesn't know is worth more than one that confidently hallucinates solid ground.",
  },
];

const CURRENTS = [
  { label: "Reading", value: "The Body Keeps the Score — Bessel van der Kolk" },
  { label: "Exploring", value: "Probabilistic Robotics, Thrun et al." },
  { label: "Listening", value: "Nils Frahm — All Melody" },
  { label: "Location", value: "Rawalpindi, Pakistan" },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-full bg-[#0d0c0b] text-[#ede8e0]">
      {/* ── Navigation ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0c0b]/90 backdrop-blur-sm">
        <div className="rule" />
        <nav className="max-w-[1320px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#"
            className="font-display text-[15px] font-light tracking-[0.02em] text-[#ede8e0] hover:text-[#c8402a] transition-colors duration-200"
          >
            Umair Akram
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="nav-link font-mono-label text-[11px] tracking-[0.12em] uppercase text-[#7a7168] "
              >
                {l.label}
              </a>
            ))}
            <a
              href="#"
              className="font-mono-label text-[11px] tracking-[0.12em] uppercase border border-[#2a2723] px-4 py-1.5 text-[#a89e93] hover:border-[#c8402a] hover:text-[#ede8e0] transition-all duration-200"
            >
              Résumé ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#7a7168] hover:text-[#ede8e0] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-[5px] w-5">
              <span
                className={`block h-px bg-current transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px bg-current transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
              />
            </div>
          </button>
        </nav>
        <div className="rule" />

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d0c0b] border-b border-[#2a2723]">
            <div className="max-w-[1320px] mx-auto px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono-label text-[11px] tracking-[0.12em] uppercase text-[#7a7168] hover:text-[#ede8e0] transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#"
                className="font-mono-label text-[11px] tracking-[0.12em] uppercase text-[#7a7168] hover:text-[#ede8e0] transition-colors"
              >
                Résumé ↗
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── Hero / Opening ── */}
      <section className="pt-[120px] pb-0 max-w-[1320px] mx-auto px-6 md:px-10">
        {/* Top annotation row */}
        <div className="anim-fade-in flex items-center justify-between mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <span className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-[#7a7168]">
              Est. 2001
            </span>
            <span className="w-12 h-px bg-[#2a2723] inline-block" />
            <span className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-[#7a7168]">
              Rawalpindi, PK
            </span>
          </div>
          <span className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-[#7a7168]">
            v1.0 — 2026
          </span>
        </div>

        {/* Asymmetric hero grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Left: large display */}
          <div className="md:col-span-9">
            <div className="anim-fade-up delay-100">
              <h1 className="font-display font-light text-[clamp(52px,8vw,108px)] leading-[0.92] tracking-[-0.02em] text-[#ede8e0]">
                Umair
                <br />
                <em className="text-[#c8402a] not-italic">Akram.</em>
              </h1>
            </div>

            <div className="anim-fade-up delay-300 mt-7 max-w-[520px]">
              <p className="font-display font-light italic text-[19px] md:text-[22px] leading-[1.4] text-[#a89e93]">
                Mechatronics engineer. Systems thinker. Maker of things that
                move, sense, and decide.
              </p>
            </div>

            <div className="anim-fade-up delay-400 mt-5 max-w-[460px]">
              <p className="text-[15px] leading-[1.7] text-[#7a7168] font-light">
                Graduate of NUST, Islamabad — where I spent four years at the
                intersection of mechanical design, embedded systems, and machine
                intelligence. Now looking for problems that matter.
              </p>
            </div>

            <div className="anim-fade-up delay-500 mt-8 flex items-center gap-6">
              <a
                href="#projects"
                className="font-mono-label text-[11px] tracking-[0.12em] uppercase text-[#ede8e0] border-b border-[#ede8e0] pb-px hover:text-[#c8402a] hover:border-[#c8402a] transition-colors duration-200"
              >
                Selected Work ↓
              </a>
              <a
                href="mailto:umair@example.com"
                className="font-mono-label text-[11px] tracking-[0.12em] uppercase text-[#7a7168] hover:text-[#ede8e0] transition-colors duration-200"
              >
                Get in Touch →
              </a>
            </div>
          </div>

          {/* Right: credential block */}
          <div className="md:col-span-3 flex md:flex-col md:justify-end md:items-end pb-4 mt-10 md:mt-0">
            <div className="anim-fade-in delay-600 md:text-right space-y-2">
              <div className="rule-accent w-8 ml-auto hidden md:block mb-4" />
              <p className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-[#7a7168]">
                Degree
              </p>
              <p className="font-display text-[13px] font-light text-[#a89e93]">
                BE Mechatronics
              </p>
              <p className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-[#7a7168] pt-2">
                Institution
              </p>
              <p className="font-display text-[13px] font-light text-[#a89e93]">
                NUST, Islamabad
              </p>
              <p className="font-mono-label text-[10px] tracking-[0.15em] uppercase text-[#7a7168] pt-2">
                Class of
              </p>
              <p className="font-display text-[13px] font-light text-[#a89e93]">
                2025
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal rule with tick marks */}
        <div className="anim-fade-in delay-700 mt-16 md:mt-20 flex items-center gap-4">
          <span className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-[#3a3632]">
            §001
          </span>
          <div className="flex-1 rule" />
          <span className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-[#3a3632]">
            Work
          </span>
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section id="projects" className="max-w-[1320px] mx-auto px-6 md:px-10 pt-14 pb-0">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display font-light text-[28px] md:text-[36px] tracking-[-0.01em] text-[#ede8e0]">
            Selected Projects
          </h2>
          <a
            href="#"
            className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-[#7a7168] hover:text-[#ede8e0] transition-colors hidden md:block"
          >
            All Projects →
          </a>
        </div>

        <div>
          {PROJECTS.map((p, i) => (
            <div
              key={p.index}
              className="project-row group py-6 cursor-pointer"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start">
                {/* Index */}
                <div className="md:col-span-1 hidden md:block">
                  <span className="proj-index font-mono-label text-[11px] tracking-[0.12em] text-[#3a3632] transition-colors duration-200">
                    {p.index}
                  </span>
                </div>

                {/* Title + excerpt */}
                <div className="md:col-span-6">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="proj-index font-mono-label text-[10px] text-[#3a3632] md:hidden transition-colors duration-200">
                      {p.index}
                    </span>
                    <h3 className="font-display font-light text-[18px] md:text-[22px] tracking-[-0.01em] text-[#ede8e0] group-hover:text-[#c8402a] transition-colors duration-200">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-[14px] text-[#7a7168] font-light leading-[1.6] max-w-[480px] mt-1">
                    {p.excerpt}
                  </p>
                </div>

                {/* Category */}
                <div className="md:col-span-3">
                  <p className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-[#7a7168] mb-2">
                    {p.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono-label text-[9px] tracking-[0.1em] uppercase text-[#3a3632] border border-[#2a2723] px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Year + arrow */}
                <div className="md:col-span-2 hidden md:flex items-start justify-end pt-1">
                  <span className="font-mono-label text-[11px] text-[#3a3632] group-hover:text-[#7a7168] transition-colors">
                    {p.year}
                  </span>
                  <span className="ml-4 text-[#3a3632] group-hover:text-[#c8402a] transition-all duration-200 group-hover:translate-x-1 inline-block transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section divider */}
        <div className="mt-12 flex items-center gap-4">
          <span className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-[#3a3632]">
            §002
          </span>
          <div className="flex-1 rule" />
          <span className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-[#3a3632]">
            Thought
          </span>
        </div>
      </section>

      {/* ── Thoughts / Journal ── */}
      <section id="thoughts" className="max-w-[1320px] mx-auto px-6 md:px-10 pt-14 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          {/* Label col */}
          <div className="md:col-span-3">
            <h2 className="font-display font-light text-[28px] md:text-[36px] tracking-[-0.01em] text-[#ede8e0]">
              Thoughts
            </h2>
            <p className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-[#7a7168] mt-3">
              Notes on work, systems, and the world
            </p>
            <a
              href="#"
              className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-[#7a7168] hover:text-[#ede8e0] transition-colors block mt-8"
            >
              All Writing →
            </a>
          </div>

          {/* Thought entries */}
          <div className="md:col-span-9 space-y-0">
            {THOUGHTS.map((t, i) => (
              <div
                key={i}
                className="py-7 border-t border-[#2a2723] hover:border-[#c8402a] transition-colors duration-200 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  {/* Accent mark */}
                  <div className="thought-mark w-0.5 h-auto self-stretch mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  <div>
                    <p className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-[#7a7168] mb-2">
                      {t.date}
                    </p>
                    <h3 className="font-display font-light text-[19px] md:text-[23px] tracking-[-0.01em] text-[#ede8e0] group-hover:text-[#c8402a] transition-colors duration-200 mb-2">
                      {t.title}
                    </h3>
                    <p className="text-[14px] font-light text-[#7a7168] leading-[1.7] max-w-[600px] italic">
                      "{t.excerpt}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section divider */}
        <div className="mt-14 flex items-center gap-4">
          <span className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-[#3a3632]">
            §003
          </span>
          <div className="flex-1 rule" />
          <span className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-[#3a3632]">
            Experience
          </span>
        </div>
      </section>

      {/* ── Experience Signal ── */}
      <section id="experience" className="max-w-[1320px] mx-auto px-6 md:px-10 pt-14 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <h2 className="font-display font-light text-[28px] md:text-[36px] tracking-[-0.01em] text-[#ede8e0]">
              Experience
            </h2>
            <a
              href="#"
              className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-[#7a7168] hover:text-[#ede8e0] transition-colors block mt-8"
            >
              Full Résumé ↗
            </a>
          </div>

          <div className="md:col-span-9">
            {/* Experience entries — placeholder structure */}
            {[
              {
                role: "Robotics Research Assistant",
                org: "NUST CEME Lab",
                period: "Jan 2024 — May 2025",
                note:
                  "Contributed to autonomous ground vehicle research; focus on sensor fusion and localization in GPS-denied environments.",
              },
              {
                role: "Engineering Intern",
                org: "Industrial Systems — [Company Placeholder]",
                period: "Summer 2023",
                note:
                  "Supported predictive maintenance pipeline design and embedded sensor integration on shop-floor hardware.",
              },
              {
                role: "Lead — Robotics Society",
                org: "NUST",
                period: "2022 — 2024",
                note:
                  "Organized inter-university competitions, workshops, and built a community of 80+ members across engineering disciplines.",
              },
            ].map((e, i) => (
              <div
                key={i}
                className="py-6 border-t border-[#2a2723] grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6"
              >
                <div className="md:col-span-2">
                  <p className="font-display font-light text-[17px] text-[#ede8e0] mb-0.5">
                    {e.role}
                  </p>
                  <p className="font-mono-label text-[10px] tracking-[0.1em] uppercase text-[#c8402a] mb-2">
                    {e.org}
                  </p>
                  <p className="text-[13px] text-[#7a7168] font-light leading-[1.6]">
                    {e.note}
                  </p>
                </div>
                <div className="md:text-right">
                  <span className="font-mono-label text-[10px] tracking-[0.1em] uppercase text-[#3a3632]">
                    {e.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section divider */}
        <div className="mt-14 flex items-center gap-4">
          <span className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-[#3a3632]">
            §004
          </span>
          <div className="flex-1 rule" />
          <span className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-[#3a3632]">
            Currently
          </span>
        </div>
      </section>

      {/* ── Currently / Interests ── */}
      <section className="max-w-[1320px] mx-auto px-6 md:px-10 pt-14 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <h2 className="font-display font-light text-[28px] md:text-[36px] tracking-[-0.01em] text-[#ede8e0]">
              Currently
            </h2>
            <p className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-[#7a7168] mt-3">
              What's on the desk
            </p>
          </div>

          <div className="md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {CURRENTS.map((c, i) => (
                <div
                  key={i}
                  className="py-5 border-t border-[#2a2723] pr-8"
                >
                  <p className="font-mono-label text-[9px] tracking-[0.15em] uppercase text-[#c8402a] mb-1">
                    {c.label}
                  </p>
                  <p className="font-display font-light text-[15px] text-[#a89e93] italic">
                    {c.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="mt-10 border-t-2 border-[#c8402a] pt-6 max-w-[540px]">
              <p className="font-display font-light italic text-[20px] md:text-[24px] leading-[1.4] text-[#ede8e0]">
                "The best systems are built by people who understand both the
                equations and the material."
              </p>
              <p className="font-mono-label text-[10px] tracking-[0.12em] uppercase text-[#7a7168] mt-4">
                — On engineering intuition
              </p>
            </div>
          </div>
        </div>

        {/* Section divider */}
        <div className="mt-14 flex items-center gap-4">
          <span className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-[#3a3632]">
            §005
          </span>
          <div className="flex-1 rule" />
          <span className="font-mono-label text-[9px] tracking-[0.2em] uppercase text-[#3a3632]">
            Contact
          </span>
        </div>
      </section>

      {/* ── Footer / Contact ── */}
      <footer className="max-w-[1320px] mx-auto px-6 md:px-10 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left: identity */}
          <div className="md:col-span-5">
            <p className="font-display font-light text-[clamp(32px,5vw,52px)] leading-[1.0] tracking-[-0.02em] text-[#ede8e0] mb-4">
              Let's build
              <br />
              something
              <br />
              <em className="text-[#c8402a]">worth making.</em>
            </p>
            <p className="text-[13px] font-light text-[#7a7168] mt-6">
              Open to full-time roles, research collaborations,
              <br className="hidden md:block" /> and interesting conversations.
            </p>
          </div>

          {/* Right: links */}
          <div className="md:col-span-7 md:flex md:flex-col md:justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {[
                { label: "Email", value: "umair@example.com", href: "mailto:umair@example.com" },
                { label: "LinkedIn", value: "/in/umairakram", href: "#" },
                { label: "GitHub", value: "github.com/umairakram", href: "#" },
                { label: "Résumé", value: "Download PDF", href: "#" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="py-5 border-t border-[#2a2723] hover:border-[#c8402a] transition-colors duration-200 group block"
                >
                  <p className="font-mono-label text-[9px] tracking-[0.15em] uppercase text-[#7a7168] mb-1">
                    {l.label}
                  </p>
                  <p className="font-display font-light text-[15px] text-[#a89e93] group-hover:text-[#ede8e0] transition-colors duration-200">
                    {l.value} →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-5 rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono-label text-[9px] tracking-[0.15em] uppercase text-[#3a3632]">
            © 2026 Umair Akram — Rawalpindi, Pakistan
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono-label text-[9px] tracking-[0.15em] uppercase text-[#3a3632]">
              Mechatronics × Systems × Engineering
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
