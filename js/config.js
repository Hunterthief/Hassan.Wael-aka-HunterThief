export const site = {
  name: "Hassan Wael",
  alias: "HunterThief",
  displayName: "Hassan Wael aka (HunterThief)",
  title: "Hassan Wael aka HunterThief — PharmD Student, Developer, Designer",
  description:
    "Hassan Wael aka HunterThief — Scientific Matrix. PharmD student, software developer, graphic designer, EPSF-Alex member, and privacy/security/AI enthusiast.",
  intro:
    "PharmD student, developer, designer, and EPSF-Alex member building tools where medicine, music, algorithms, privacy, security, and AI meet.",
  tagline:
    "Clean code. Clinical curiosity. Beats, training, and public health.",
  contactNote:
    "For collaboration, questions, or quiet technical conversation—especially around pharmacy, software, public health, design, or privacy/security/AI—use one of the channels below.",
  email: "hassanwaelhh@proton.me",
  phoneDisplay: "+20 111 500 3487",
  whatsappNumber: "201115003487",
  whatsappMessage: "Hello Hassan, I found you on Scientific Matrix.",
  profileImage: "assets/images/profile.webp",
  profileAlt: "Hassan Wael profile portrait",
  about: [
    "I’m a PharmD student, software developer, graphic designer, and EPSF-Alex member. My head lives between medicine, music, and algorithms—especially where healthcare, privacy, security, and AI start overlapping.",
    "I build tools, explore hacks, create beats, and train hard because I believe growth happens when you step outside one lane. My mission is to merge tech and healthcare, automate workflows, write clean code, and keep pushing my boundaries.",
    "This site is my personal terminal: links, projects, interests, and experiments in one place. If you’re working at the intersection of pharmacy, software, public health, design, or performance, let’s connect."
  ]
};

const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/hassan-wael-aka-hunterthief/",
    icon: "linkedin"
  },
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
    id: "epsf-alex",
    name: "EPSF-Alex",
    role: "PE&LOC and Marketing Full Member",
    period: "Sep 2026 – Present",
    location: "Alexandria, Egypt",
    description:
      "Public health, logistics, organization, and marketing work with the Egyptian Pharmaceutical Students’ Federation – Alexandria. I help coordinate initiatives, communicate activities, and support member-facing operations.",
    category: "Community",
    tags: ["Public Health", "Logistics", "Marketing", "Communication"],
    formula: "UHC",
    github: "",
    demo: "",
    notes:
      "Previous roles: PH&LOC Committee Full Member; Public Health / Logistics and Organization Member."
  },
   {
    id: "big-x-research",
    name: "Big-X Research Agency",
    role: "Ambassador",
    period: "Nov 2026 – Present",
    location: "Egypt",
    description:
      "Ambassador work supporting research-oriented communication, outreach, and engagement initiatives.",
    category: "Research",
    tags: ["Ambassador", "Communication", "Research Support"],
    formula: "β",
    github: "",
    demo: "",
    notes: ""
  },
  {
    id: "weave-wonder",
    name: "WeaveWonder",
    role: "Co-Founder",
    period: "Jul 2024 – Feb 2026",
    location: "Alexandria, Egypt",
    description:
      "Co-founded and helped shape a collaborative venture where ideas move into buildable outputs, team workflows, and creative problem-solving.",
    category: "Startup",
    tags: ["Co-Founding", "Collaboration", "Product", "Creative Direction"],
    formula: "Σ",
    github: "",
    demo: "",
    notes: ""
  },
  {
    id: "soflu",
    name: "Soflu",
    role: "App Developer / Co-Founder",
    period: "Aug 2024 – Sep 2025",
    location: "Alexandria, Egypt",
    description:
      "App development and co-founding work focused on turning concepts into usable digital tools, with attention to interface, structure, and iteration.",
    category: "Software",
    tags: ["App Development", "UI", "Prototyping", "Teamwork"],
    formula: "{ }",
    github: "",
    demo: "",
    notes: ""
  },
  {
    id: "community-pharmacy",
    name: "Community Pharmacy",
    role: "Pharmacy Intern",
    period: "Aug 2026 – Sep 2026",
    location: "Egypt",
    description:
      "Hands-on community pharmacy exposure: dispensing workflow, patient interaction, medication context, and the operational reality behind pharmacy practice.",
    category: "Pharmacy",
    tags: ["Dispensing", "Patient Care", "Operations", "Clinical Context"],
    formula: "Rx",
    github: "",
    demo: "",
    notes: ""
  }
];

export const interests = [
  {
    id: "pharmacy",
    name: "Pharmacy",
    formula: "Rx",
    description:
      "Community pharmacy practice, medication workflows, patient-centered care, and the responsibility behind every dispensed dose.",
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
      "Prototyping, hacking, automation, reverse engineering, and testing how far a static site or tiny tool can be pushed.",
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
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    formula: "CMYK",
    description:
      "Visual identity, layout, composition, and making information look intentional instead of accidental.",
    link: "",
    image: "",
    imageAlt: ""
  },
  {
    id: "music-beats",
    name: "Music & Beats",
    formula: "♪",
    description:
      "Creating beats and staying close to rhythm, texture, and sound as another form of structure.",
    link: "",
    image: "",
    imageAlt: ""
  },
  {
    id: "privacy-security-ai",
    name: "Privacy, Security & AI",
    formula: "AES",
    description:
      "Exploring the boundary between data protection, secure systems, machine intelligence, and responsible technology.",
    link: "",
    image: "",
    imageAlt: ""
  },
  {
    id: "public-health-epsf",
    name: "Public Health & EPSF-Alex",
    formula: "UHC",
    description:
      "Community health, logistics, organization, advocacy, and the operational side of making initiatives happen.",
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
