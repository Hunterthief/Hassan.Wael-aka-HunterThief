export const site = {
  name: "Hassan Wael",
  alias: "HunterThief",
  displayName: "Hassan Wael aka (HunterThief)",
  title: "Hassan Wael aka HunterThief — Scientific Matrix",
  description:
    "Hassan Wael aka HunterThief — Scientific Matrix. A personal link hub and identity site at the intersection of pharmaceutical science and software development.",
  intro:
    "Pharmaceutical science and software development, treated as two dialects of the same curiosity: structure, transformation, and systems.",
  tagline: "Molecular logic. Digital architecture. Quiet experimentation.",
  contactNote:
    "For collaboration, questions, or quiet technical conversation, use one of the channels below.",
  email: "hassanwaelhh@gmail.com",
  phoneDisplay: "+20 111 500 3487",
  whatsappNumber: "201115003487",
  whatsappMessage: "Hello Hassan, I found you on Scientific Matrix.",
  profileImage: "assets/images/profile.webp",
  profileAlt: "Hassan Wael profile portrait",
  about: [
    "I am interested in the point where pharmaceutical reasoning and software reasoning overlap: observing systems, modeling behavior, and building tools that make complexity legible.",
    "Pharmacy provides a language for molecules, doses, interactions, and uncertainty. Programming provides a language for structure, automation, interfaces, and iteration. This site is a small attempt to keep both voices in the same room.",
    "The result is not a portfolio in the conventional sense. It is more like a personal terminal: a place where links, projects, interests, and experiments can coexist without being forced into a single professional identity."
  ]
};

const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export const socialLinks = [
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/hassanwaelhassa/",
    icon: "facebook"
  },
  {
    id: "reddit",
    label: "Reddit",
    url: "https://www.reddit.com/user/hunterthief/",
    icon: "reddit"
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/huntertheifx/",
    icon: "instagram"
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    url: whatsappUrl,
    icon: "whatsapp"
  },
  {
    id: "email",
    label: "Email",
    url: `mailto:${site.email}`,
    icon: "email"
  }
];

export const projects = [
  {
    id: "aniyomi-extension",
    name: "Aniyomi Anime Extension",
    description:
      "A Kotlin/OkHttp extension concept focused on precise episode state handling, resilient scraping, and clean source behavior.",
    category: "Software",
    tags: ["Kotlin", "OkHttp", "Jsoup", "Aniyomi"],
    github: "https://github.com/HunterThief/aniyomi-extension",
    demo: "",
    formula: "HTTP/1.1",
    notes: ""
  },
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
  {
    id: "molecular-playground",
    name: "Molecular Playground",
    description:
      "Small visual experiments with chemical notation, molecular graphs, and generative scientific diagrams.",
    category: "Experiment",
    tags: ["SVG", "Chemistry", "Visualization"],
    github: "",
    demo: "",
    formula: "C₈H₉NO₂",
    notes: ""
  }
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
    id: "chemistry",
    name: "Chemistry",
    formula: "Δ",
    description:
      "Reaction pathways, molecular structure, analytical reasoning, and the beauty of transformation under controlled conditions.",
    link: "",
    image: "",
    imageAlt: ""
  },
  {
    id: "pharmacology",
    name: "Pharmacology",
    formula: "KD",
    description:
      "Drug-receptor interactions, dose-response relationships, toxicity, therapeutic index, and biological variability.",
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
