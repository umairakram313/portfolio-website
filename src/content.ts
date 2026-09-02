export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Thoughts", href: "#thoughts" },
]

export const PROJECTS = [
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
]

export const THOUGHTS = [
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
]

export const EXPERIENCES = [
  {
    role: "Robotics Research Assistant",
    org: "NUST CEME Lab",
    period: "Jan 2024 — May 2025",
    note: "Contributed to autonomous ground vehicle research; focus on sensor fusion and localization in GPS-denied environments.",
  },
  {
    role: "Engineering Intern",
    org: "Industrial Systems — [Company Placeholder]",
    period: "Summer 2023",
    note: "Supported predictive maintenance pipeline design and embedded sensor integration on shop-floor hardware.",
  },
  {
    role: "Lead — Robotics Society",
    org: "NUST",
    period: "2022 — 2024",
    note: "Organized inter-university competitions, workshops, and built a community of 80+ members across engineering disciplines.",
  },
]

export const CURRENTS = [
  { label: "Reading", value: "The Body Keeps the Score — Bessel van der Kolk" },
  { label: "Exploring", value: "Probabilistic Robotics, Thrun et al." },
  { label: "Listening", value: "Nils Frahm — All Melody" },
  { label: "Location", value: "Rawalpindi, Pakistan" },
]

export const CONTACT_LINKS = [
  {
    label: "Email",
    value: "umair@example.com",
    href: "mailto:umair@example.com",
  },
  { label: "LinkedIn", value: "/in/umairakram", href: "#" },
  { label: "GitHub", value: "github.com/umairakram", href: "#" },
  { label: "Résumé", value: "Download PDF", href: "#" },
]
