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
  jobTitle: string;
  role: string;
  titleLine: string;
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

export interface PillarCard {
  tag: string;
  title: string;
  body: string;
  keywords: string[];
}

export interface Pillars {
  kicker: string;
  title: string;
  lead: string;
  cards: PillarCard[];
}

export interface ProofCard {
  metric: string;
  label: string;
  problem: string;
  did: string;
  result: string;
}

export interface Proof {
  kicker: string;
  title: string;
  lead: string;
  cards: ProofCard[];
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
  pillars: Pillars;
  proof: Proof;
  background: Background;
  skills: SkillGroup[];
  principles: Principle[];
  testimonials: Testimonial[];
  personal: Personal;
  socials: Social[];
}

const NAME = "Tanmay Vij";
const JOB_TITLE = "Lead Software Engineer";

export const SITE: Site = {
  meta: {
    eyebrow: "Engineering Leadership · Scaling Teams, Systems & Delivery",
    name: NAME,
    jobTitle: JOB_TITLE,
    role: `${JOB_TITLE} - Architecture-first`,
    titleLine: `${NAME} · ${JOB_TITLE}`,
    tagline:
      "I design and build resilient distributed systems - architecture first, execution always.",
    positioning:
      "Great software comes from good engineering decisions made early and executed well. I turn product ideas into production systems — designing the architecture, building the critical pieces, and helping teams deliver software that's built to evolve.",
    domain: "tanmayvij.com",
    email: "hello@tanmayvij.com",
  },

  // The curl/terminal signature element.
  terminal: {
    command: "curl https://hello.tanmayvij.com",
    hint: "# run this in your terminal",
    response: [
      `${NAME.toUpperCase()} - ${JOB_TITLE}`,
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
  pillars: {
    kicker: "What I do",
    title: "Engineering, E2E",
    lead: "Three disciplines that shape how I build modern software - from architecture and infrastructure to AI-native applications.",
    cards: [
      {
        tag: "01",
        title: "Architecture & Resilient Systems",
        body: "I build resilient distributed systems that scale with the product. From modernizing legacy platforms to architecting new services, I design for reliability, observability, and production scale.",
        keywords: [
          "event-driven",
          "fault-tolerant",
          "distributed systems",
          "legacy modernization",
        ],
      },
      {
        tag: "02",
        title: "Cloud & Infrastructure",
        body: "Good system architecture doesn't stop at the application layer. Designing production systems means treating networking, cloud platforms, deployment, security, and cost as parts of the same engineering problem. The result is infrastructure that's reliable, secure, and built to evolve with the product.",
        keywords: ["AWS · Azure · GCP", "networking", "cloud architecture", "serverless"],
      },
      {
        tag: "03",
        title: "AI Systems Engineering",
        body: "AI-native engineering has become a core part of software architecture. I design production LLM systems—from RAG pipelines and agentic workflows to vector search, model orchestration and fine-tuned models—grounded in an understanding of transformer internals and modern inference.",
        keywords: [
          "RAG & vector search",
          "agentic systems",
          "inference & fine-tuning",
          "transformer internals",
        ],
      },
    ],
  },

  // Proof of work. Lead with the metric.
  proof: {
    kicker: "Proof of work",
    title: "Let the numbers talk.",
    lead: "Every metric tells a story. Behind each one is a production problem, an architectural decision, and a measurable outcome.",
    cards: [
      {
        metric: "mission-critical",
        label: "legacy modernization",
        problem: "A business-critical platform had evolved over years without a cohesive architectural direction, leaving critical workflows vulnerable to failures, inconsistent event processing, and operational complexity.",
        did: "Identified architectural weaknesses across asynchronous workflows, background processing, and service communication. Redesigned critical execution paths around idempotency, parallelism, resilience, and reliable event delivery to improve both performance and operational stability.",
        result: "Delivered a resilient, modern platform capable of supporting high production traffic with stronger availability, lower latency, and significantly improved operational confidence.",
      },
      {
        metric: "enterprise-ready",
        label: "platform re-architecture",
        problem: "Fragmented services, manual production operations, weak security, and almost no observability made the system increasingly difficult to evolve, while the lack of architectural direction left engineering operating in silos.",
        did: "Redesigned the platform around clear service boundaries, centralized cross-cutting concerns such as IAM and billing, introduced CI/CD, observability, claim-based multi-tenancy, and standardized operational practices across the platform.",
        result: "Evolved the platform into an enterprise-grade architecture capable of supporting large-scale production traffic for multi-billion-dollar real-estate firms, while enabling faster delivery, stronger tenant isolation, and long-term maintainability.",
      },
      {
        metric: "70%",
        label: "cloud cost reduction",
        problem: "Cloud infrastructure costs were growing disproportionately to application demand. For a resource-constrained business, an inefficient system architecture had made the platform unnecessarily expensive to operate.",
        did: "Refactored the system architecture to eliminate unnecessary infrastructure, redesign application delivery, and align cloud resources with actual workload characteristics instead of historical implementation choices.",
        result: "Reduced monthly cloud spend by up to 70% while improving latency and preserving security, scalability, and high availability.",
      },
      {
        metric: "AI-native",
        label: "enterprise knowledge platform",
        problem: "Organizations struggled to search and retrieve information across vast collections of sensitive documents while maintaining strict tenant isolation and compliance.",
        did: "Designed a multi-tenant RAG platform with automated document ingestion, embedding pipelines, vector search, and continuous indexing, allowing each organization to build and maintain its own isolated knowledge base directly from incoming documents.",
        result: "Turned hours of manual document discovery into natural conversations, enabling employees to find the information they needed in seconds while preserving strict tenant isolation and data confidentiality.",
      },
    ],
  },

  background: {
    story: [
      "Cloud since 16. My career has lived on the backend and the infrastructure beneath it — design the system, then build it.",
      "I've led frontend teams in React and Angular for years, set engineering standards, mentored engineers, and been the customer's point of contact. The through-line has always been architecture.",
    ],
    years: "6+ years",
    cert: {
      name: "AWS Certified",
      title: "Solutions Architect - Associate",
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
