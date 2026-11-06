export const site = {
  name: "HunterThief",
  title: "HunterThief — Scientific Matrix",
  description:
    "HunterThief — Scientific Matrix. A personal link hub and identity site at the intersection of pharmaceutical science and software development.",
  intro:
    "Pharmaceutical science and software development, treated as two dialects of the same curiosity: structure, transformation, and systems.",
  tagline: "Molecular logic. Digital architecture. Quiet experimentation.",
  contactNote:
    "For collaboration, questions, or quiet technical conversation, use one of the channels below.",
  email: "hunterthief@example.com",
  about: [
    "I am interested in the point where pharmaceutical reasoning and software reasoning overlap: observing systems, modeling behavior, and building tools that make complexity legible.",
    "Pharmacy provides a language for molecules, doses, interactions, and uncertainty. Programming provides a language for structure, automation, interfaces, and iteration. This site is a small attempt to keep both voices in the same room.",
    "The result is not a portfolio in the conventional sense. It is more like a personal terminal: a place where links, projects, interests, and experiments can coexist without being forced into a single professional identity."
  ]
};

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/HunterThief",
    icon: "github"
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/hassan-wael-aka-hunterthief/",
    icon: "linkedin"
  },
  {
    id: "email",
    label: "Email",
    url: "mailto:hassanwaelhh@gmail.com",
    icon: "email"
  },
];

export const projects = [
  {
    id: "wildatlas",
    name: "WildAtlas",
    description:
      "A speculative interface for mapping biodiversity observations, field notes, and ecological patterns through open data.",
    category: "Science",
    tags: ["Data", "Maps", "Biology"],
    github: "",
    demo: "",
    formula: "C₁₀H₁₅N",
    notes: ""
  },
];

export const interests = [
  {
    id: "pharmacy",
    name: "Pharmacy",
    formula: "Rx",
    description:
      "Compounding, dispensing logic, patient-centered thinking, and the responsibility embedded in medication systems.",
    link: "",
    image: "",
    imageAlt: ""
  },
  {
    id: "programming",
    name: "Programming",
    formula: "{ }",
    description:
      "Building tools, interfaces, extensions, and small systems that turn abstract ideas into usable digital structures.",
    link: "",
    image: "",
    imageAlt: ""
  },
  {
    id: "software-experimentation",
    name: "Software Experimentation",
    formula: "β",
    description:
      "Prototyping, scraping, automation, reverse engineering, and testing how far a static site or tiny tool can be pushed.",
    link: "",
    image: "",
    imageAlt: ""
  },
  {
    id: "scientific-visualization",
    name: "Scientific Visualization",
    formula: "λ",
    description:
      "Translating formulas, molecules, datasets, and abstract relationships into legible visual systems.",
    link: "",
    image: "",
    imageAlt: ""
  }
];

export const sectionVisibility = {
  about: true,
  projects: true,
  interests: true,
  contact: true
};

export const motionConfig = {
  enabled: true,
  introAnimation: true,
  matrixRain: true,
  molecularEffects: true,
  scrollReveal: true,
  hoverEffects: true,

  speed: "normal",
  intensity: "subtle"
};

export const soundConfig = {
  enabled: false,
  volume: 0.12,
  hover: true,
  click: true,
  intro: true,
  ambient: false,
  remember: true
};
