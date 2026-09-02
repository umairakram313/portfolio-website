export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Thoughts", href: "#thoughts" },
]

export const PROJECTS = [
  {
    index: "01",
    title: "Modular Self-Reconfigurable Robots",
    period: "2024–2025",
    type: "Final Year Design Project",
    technologies: ["ESP32", "C/C++", "MQTT", "SolidWorks", "UWB"],
    description:
      "A modular robotics system designed around physically reconfigurable robotic units, including system architecture, hardware integration, firmware coordination and inter-module communication.",
    repositories: [
      {
        label: "View repository",
        href: "https://github.com/umairakram313/MSRR_FYDP_Firmware_ESP32_IDF",
      },
    ],
    artifact: "/images/projects/01-msrr-physical-prototype.png",
    artifactAlt:
      "Physical prototypes of cylindrical modular self-reconfigurable robot units on a workbench",
    artifactLabel: "FIG. 01 / PHYSICAL PROTOTYPE",
    artifactVariant: "msrr",
  },
  {
    index: "02",
    title: "Plantation Robot",
    period: "2023–2024",
    type: "Embedded Robotics",
    technologies: ["ATmega2560", "C++", "IR Sensors", "Servo", "DC Motors"],
    description:
      "A line-following mobile plantation robot with IR sensing, motor control and a servo-driven lifting mechanism for coordinated navigation and task execution.",
    repositories: [
      {
        label: "View repository",
        href: "https://github.com/umairakram313/Plantation-Robot-Arduino-Code",
      },
    ],
    artifact: "/images/projects/02-plantation-robot-prototype.png",
    artifactAlt:
      "Tall white plantation robot prototype with exposed sensors and wiring on a blue workbench",
    artifactLabel: "FIG. 02 / ROBOT PROTOTYPE",
    artifactVariant: "plantation",
  },
  {
    index: "03",
    title: "Cricket Match Management System",
    period: "2022–2023",
    type: "C++ Software System",
    technologies: ["C++", "OOP", "Data Structures"],
    description:
      "A C++ cricket match-management application supporting ball-by-ball scoring, structured match records and player/team performance analysis.",
    repositories: [
      {
        label: "View repository",
        href: "https://github.com/umairakram313/Cricket-Match-Management-System",
      },
    ],
    artifact: "/images/projects/03-cricket-match-management-terminal.png",
    artifactAlt:
      "Terminal output from the Cricket Match Management System showing batting selection and ball-by-ball scoring",
    artifactLabel: "FIG. 03 / PROGRAM OUTPUT",
    artifactVariant: "terminal",
  },
  {
    index: "04",
    title: "Water Level Monitoring System",
    period: "2023",
    type: "Embedded Monitoring & Control",
    technologies: ["ESP32", "C/C++", "Ultrasonic Sensor", "LCD", "Blynk"],
    description:
      "An ESP32-based monitoring and pump-control system using ultrasonic depth sensing, overflow protection, LCD feedback and cloud monitoring.",
    repositories: [
      {
        label: "Original firmware",
        href: "https://github.com/umairakram313/Water_Management_System_ESP32_Original_Arduino_Firmware",
      },
      {
        label: "Later ESP-IDF port",
        href: "https://github.com/umairakram313/Water_Management_System_ESP32_Updated_ESPIDF_Firmware",
      },
    ],
    artifact: "/images/projects/04-water-level-monitoring-bench.png",
    artifactAlt:
      "ESP32 water-level monitoring prototype with breadboards, wiring and an illuminated LCD",
    artifactLabel: "FIG. 04 / EMBEDDED BENCH",
    artifactVariant: "water",
  },
] as const

export type Project = typeof PROJECTS[number]

type ThoughtVisual = {
  src: string
  alt: string
}

export type Thought = {
  number: string
  title: string
  status: "IN PROGRESS" | "PUBLISHED"
  categories: string[]
  excerpt: string
  homepage?: {
    role: "featured" | "secondary"
    order: number
  }
  visual?: ThoughtVisual
  slug?: string
  publishedAt?: string
}

export const THOUGHTS: Thought[] = [
  {
    number: "01",
    title: "Do We All Stand for Humanity?",
    status: "IN PROGRESS",
    categories: ["SOCIETY", "ETHICS", "IDENTITY"],
    excerpt:
      "If our opposition to suffering changes depending on who is suffering, what exactly are we standing for?",
    homepage: { role: "featured", order: 1 },
  },
  {
    number: "02",
    title: "Not All Men. Not All Women. Not All Anything.",
    status: "IN PROGRESS",
    categories: ["SOCIETY", "GENERALIZATION", "INDIVIDUALITY"],
    excerpt:
      "A pattern about a group—even a powerful one—is not automatically a truth about every individual inside it.",
    homepage: { role: "secondary", order: 2 },
  },
  {
    number: "03",
    title: "A Year Inside Trading",
    status: "IN PROGRESS",
    categories: ["MARKETS", "EXPERIENCE", "SYSTEMS"],
    excerpt:
      "I entered trading curious about what actually works. Nearly a year later, the reality looked considerably different from the industry surrounding it.",
    homepage: { role: "secondary", order: 3 },
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
