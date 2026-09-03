export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Thoughts", href: "#thoughts" },
  { label: "Experience", href: "#experience" },
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

export type Experience = {
  role: string
  organization: string
  period: string
  evidence: string
  category: "ENGINEERING" | "QUANTITATIVE DEVELOPMENT" | "CROSS-FUNCTIONAL INTERNSHIP"
  state: "incoming" | "current" | "past"
  homepage?: { order: number }
  destination?: string
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Graduate Trainee Engineer — Instrumentation & Control",
    organization: "Engro Powergen Thar Limited (EPTL)",
    period: "2026 — INCOMING",
    evidence:
      "Selected for Engro's graduate training program in Instrumentation & Control at EPTL, with onboarding underway.",
    category: "ENGINEERING",
    state: "incoming",
    homepage: { order: 1 },
  },
  {
    role: "Quantitative Developer",
    organization: "Alpha Labs — Collaborative Project",
    period: "AUG 2025 — MAY 2026",
    evidence:
      "Developed and evaluated rule-based trading models using Python, historical backtesting, forward-testing, and structured performance analysis.",
    category: "QUANTITATIVE DEVELOPMENT",
    state: "past",
    homepage: { order: 2 },
  },
  {
    role: "BSDSOQ Intern",
    organization: "Cowlar Design Studio — Islamabad",
    period: "AUG 2024 — SEP 2024",
    evidence:
      "Contributed to product testing and beta validation while supporting sales presentations, early-stage strategy, and cross-functional coordination.",
    category: "CROSS-FUNCTIONAL INTERNSHIP",
    state: "past",
    homepage: { order: 3 },
  },
]

type CurrentVisual = {
  src: string
  alt: string
}

export type CurrentSignal = {
  id: string
  label: string
  primary: string
  secondary: string
  order: number
  priority: "primary" | "secondary"
  presentation: "book" | "track" | "note" | "exploration" | "statement" | "route"
  visual?: CurrentVisual
  destination?: string
  source?: string
  updatedAt?: string
  integration?: "music"
}

export const CURRENTS: CurrentSignal[] = [
  {
    id: "reading",
    label: "READING",
    primary: "Nexus",
    secondary: "Yuval Noah Harari",
    order: 1,
    priority: "primary",
    presentation: "book",
  },
  {
    id: "attention",
    label: "THINKING ABOUT",
    primary: "Attention as Currency",
    secondary:
      "How attention is created, concentrated, and converted into cultural influence.",
    order: 2,
    priority: "primary",
    presentation: "statement",
  },
  {
    id: "media",
    label: "EXPLORING",
    primary: "AI × Media",
    secondary:
      "Exploring how AI could enable new forms of media production, distribution, and cultural influence.",
    order: 3,
    priority: "primary",
    presentation: "exploration",
  },
  {
    id: "listening",
    label: "LISTENING",
    primary: "Loser",
    secondary: "Tame Impala",
    order: 4,
    priority: "secondary",
    presentation: "track",
    integration: "music",
  },
  {
    id: "building",
    label: "BUILDING",
    primary: "Ustaad AI",
    secondary: "Improving an AI-powered study product for exam preparation.",
    order: 5,
    priority: "secondary",
    presentation: "note",
  },
  {
    id: "between",
    label: "BETWEEN",
    primary: "Islamabad → Thar",
    secondary: "Pakistan",
    order: 6,
    priority: "secondary",
    presentation: "route",
  },
]

export type SignatureStatement = {
  lead: string
  connective: string
  anchor: string
  supporting: string
}

export const SIGNATURE_STATEMENT: SignatureStatement = {
  lead: "BET",
  connective: "BEFORE",
  anchor: "CONSENSUS.",
  supporting: "Make your own bets. Build what survives them.",
}

export type ContactLink = {
  label: string
  value: string
  href: string
  external?: boolean
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Email",
    value: "umairakram2003@outlook.com",
    href: "mailto:umairakram2003@outlook.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/umair-akram-3ba7091b3",
    href: "https://linkedin.com/in/umair-akram-3ba7091b3",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/umairakram313",
    href: "https://github.com/umairakram313",
    external: true,
  },
]
