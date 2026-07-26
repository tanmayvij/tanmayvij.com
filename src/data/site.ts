/**
 * Content for tanmayvij.com — typed, single source of truth for the page.
 * Ported from the design prototype's `window.SITE`.
 * Voice rule: specifics replace adjectives. Confident, never self-flattering.
 *
 * NOTE: several fields still hold realistic placeholder copy pending real
 * content — see the `TODO` comments. The page renders them without any visible
 * "TODO" markers (those were author annotations in the prototype).
 */

export interface Meta {
  eyebrow: string;
  name: string;
  role: string;
  tagline: string;
  positioning: string;
  domain: string;
  email: string;
}

export interface Terminal {
  command: string;
  hint: string;
  response: string[];
}

export interface Pillar {
  tag: string;
  title: string;
  body: string;
  keywords: string[];
}

export interface Proof {
  metric: string;
  label: string;
  problem: string;
  did: string;
  result: string;
}

export interface Cert {
  name: string;
  title: string;
  issuer: string;
  badge: string;
}

export interface Course {
  title: string;
  issuer: string;
}

export interface Background {
  story: string[];
  years: string;
  cert: Cert;
  courses: Course[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Principle {
  n: string;
  text: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Personal {
  body: string[];
  invite: string;
}

export interface Social {
  label: string;
  handle: string;
  href: string;
}

export interface Site {
  meta: Meta;
  terminal: Terminal;
  pillars: Pillar[];
  proof: Proof[];
  background: Background;
  skills: SkillGroup[];
  principles: Principle[];
  testimonials: Testimonial[];
  personal: Personal;
  socials: Social[];
}

export const SITE: Site = {
  meta: {
    eyebrow: "Engineering Leadership · Scaling Teams, Systems & Delivery",
    name: "Tanmay Vij",
    role: "Lead Software Engineer — Architecture-first",
    tagline:
      "I design and build resilient, cloud-native systems — architecture first, hands-on always.",
    positioning:
      "A senior individual contributor by choice: the person who designs the architecture, not just the one who writes the code. I lead teams and set standards in support of that — not instead of it.",
    domain: "tanmayvij.com",
    // TODO: confirm contact address
    email: "hello@tanmayvij.com",
  },

  // The curl/terminal signature element.
  terminal: {
    command: "curl tanmayvij.com/me",
    hint: "# run this in your terminal",
    response: [
      "TANMAY VIJ — Lead Software Engineer",
      "────────────────────────────────────",
      "role     : architect + hands-on IC",
      "focus    : resilient, cloud-native backends",
      "clouds   : aws · azure · gcp",
      "cert     : aws solutions architect — assoc.",
      "ai       : agents, workflows, custom models",
      "status   : open to senior IC roles",
      "",
      "→ resume : tanmayvij.com/resume.pdf",
      "→ email  : hello@tanmayvij.com",
    ],
  },

  // Three pillars — what I do.
  pillars: [
    {
      tag: "01",
      title: "Architecture & Resilient Systems",
      body: "Fault-tolerant, event-driven systems designed from scratch. I lead legacy-to-modern modernizations and turn failure-prone services into high-traffic infrastructure that stays up under load.",
      keywords: [
        "event-driven",
        "fault-tolerant",
        "legacy modernization",
        "microservices",
      ],
    },
    {
      tag: "02",
      title: "Cloud & Infrastructure",
      body: "Fluent across all three major clouds. Networking across cloud, on-prem and hybrid; serverless at scale; security and compliance; and cost — I've cut a client's cloud bill by up to 70%.",
      keywords: ["AWS · Azure · GCP", "networking", "serverless", "cost optimization"],
    },
    {
      tag: "03",
      title: "AI-Native Engineering",
      body: "Agents that kill mundane team work, AI-automated financial workflows, and a working understanding of how LLMs operate under the hood — including running customized models in the cloud.",
      keywords: [
        "agents",
        "workflow automation",
        "LLMs under the hood",
        "custom models",
      ],
    },
  ],

  // Proof of work. Lead with the metric.
  // TODO: replace with real specifics (client/context, timeframe, scale numbers).
  proof: [
    {
      metric: "up to 70%",
      label: "lower AWS spend",
      problem: "A client's cloud bill was scaling faster than its traffic.",
      did: "Re-architected compute and storage, right-sized serverless, and cut idle infrastructure.",
      result: "Reduced monthly AWS spend by up to 70% with no loss of throughput.",
    },
    {
      metric: "99.9%",
      label: "uptime at peak load",
      problem: "Failure-prone microservices buckled whenever traffic spiked.",
      did: "Refactored into Dockerised NestJS services with clean boundaries and back-pressure.",
      result: "Sustained high-traffic production load with 99.9% uptime.",
    },
    {
      metric: "audit-ready",
      label: "data-compliance regime",
      problem: "Infra flaws would have failed a strict geographic data-compliance audit.",
      did: "Closed the gaps, enforced data residency, and hardened access paths.",
      result: "Client passed compliance in a tightly regulated jurisdiction.",
    },
    {
      metric: "at scale",
      label: "serverless data pipeline",
      problem: "A dataset too large for AWS's default service limits.",
      did: "Built a Lambda-native pipeline that designed around the limits instead of fighting them.",
      result: "Processed the full dataset within platform constraints.",
    },
    // TODO: room for 2–3 more flagship projects with metrics.
  ],

  background: {
    story: [
      "Cloud since 16. My career has lived on the backend and the infrastructure beneath it — design the system, then build it.",
      "I've led frontend teams in React and Angular for years, set engineering standards, mentored engineers, and been the customer's point of contact. The through-line has always been architecture.",
    ],
    years: "5+ years",
    cert: {
      name: "AWS Certified",
      title: "Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      badge: "/aws-saa-badge.png",
    },
    courses: [
      {
        title: "Deep Learning Certification, 2020",
        issuer: "OneFourth Labs × IIT Madras",
      },
      {
        title: "AI Hackathon — Winner, 2019",
        issuer: "Facebook (Meta)",
      },
    ],
  },

  skills: [
    { group: "Languages", items: ["TypeScript / JS (Node)", "C# / .NET", "Java", "Python"] },
    { group: "Backend", items: ["NestJS", "Spring Boot", ".NET", "Node frameworks"] },
    { group: "Frontend", items: ["React", "Angular"] },
    { group: "Cloud", items: ["AWS", "Azure", "GCP"] },
    {
      group: "Infra / DevOps",
      items: [
        "Docker",
        "Serverless / Lambda",
        "Networking (cloud · on-prem · hybrid)",
        "CI/CD",
      ],
    },
    {
      group: "Domains",
      items: [
        "Event-driven & microservices",
        "Legacy modernization",
        "Security & compliance",
        "Cost optimization",
        "Applied AI / agents / LLMs",
      ],
    },
  ],

  // Architecture principles (his voice).
  // TODO: Tanmay to confirm / swap in his own genuine principles.
  principles: [
    {
      n: "01",
      text: "Resilience is a design decision, not a feature you bolt on later. Design for the failure mode first, then the happy path.",
    },
    {
      n: "02",
      text: "Reach for microservices when team and domain boundaries demand it — not before. A well-structured monolith beats a distributed mess.",
    },
    {
      n: "03",
      text: "The cheapest infrastructure is the infrastructure you don't run. Every running service is a recurring bill and a thing that can break.",
    },
    {
      n: "04",
      text: "Boring, observable systems win. Cleverness is a liability at 3am — optimise for the engineer on call, not the demo.",
    },
  ],

  // TODO: paste real LinkedIn recommendations + attribution.
  testimonials: [
    {
      quote:
        "Hands down the person you want owning the architecture. Tanmay sees the failure modes before anyone else does, and he ships.",
      name: "[Name]",
      role: "[Role]",
      company: "[Company]",
    },
    {
      quote:
        "He cut our cloud spend dramatically without us ever feeling it in performance. Calm, precise, and genuinely senior.",
      name: "[Name]",
      role: "[Role]",
      company: "[Company]",
    },
    {
      quote:
        "Set the engineering standard for the whole team. The kind of IC who quietly makes everyone around him better.",
      name: "[Name]",
      role: "[Role]",
      company: "[Company]",
    },
  ],

  personal: {
    // TODO: 2–4 genuine interests.
    body: [
      "Beyond the systems: I read widely, follow where the industry is heading, and like taking apart whatever new tech just dropped to see how it actually works.",
    ],
    invite:
      "Always up for a quick chat — whether it's the industry, current affairs, or whatever new tech just dropped.",
  },

  socials: [
    { label: "Email", handle: "hello@tanmayvij.com", href: "mailto:hello@tanmayvij.com" },
    { label: "LinkedIn", handle: "/in/tanmayvij", href: "https://www.linkedin.com/in/tanmayvij" },
    { label: "GitHub", handle: "@tanmayvij", href: "https://github.com/tanmayvij" },
    { label: "X", handle: "@tanmay_vij", href: "https://x.com/tanmay_vij" },
    { label: "Stack Overflow", handle: "tanmay-vij", href: "https://stackoverflow.com/users/3970251/tanmay-vij" },
    { label: "npm", handle: "~tanmayvij", href: "https://www.npmjs.com/~tanmayvij" },
  ],
};

/** Résumé + LinkedIn URLs used by nav & CTAs. */
export const LINKS = {
  resume: "https://resume.tanmayvij.com",
  linkedin: "https://www.linkedin.com/in/tanmayvij",
};
