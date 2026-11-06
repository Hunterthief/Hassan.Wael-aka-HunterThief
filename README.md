# Scientific Matrix

**Hassan Wael aka (HunterThief)**  
PharmD Student | Software Developer | Graphic Designer | EPSF-Alex Member | Privacy, Security & AI Enthusiast

---

## Why this site exists

This website was not built because I wanted another link page.

It was built because the usual options were not enough.

Most link hubs reduce a person to a list of buttons. Most developer portfolios force everything into code. Most pharmacy or healthcare profiles feel clinical, corporate, or disconnected from the rest of who I am. None of them felt like a place where I could honestly hold pharmacy, software, design, music, public health, security, and experimentation in the same identity.

I did not want to choose one label and hide the rest.

So this site became something else: a personal digital environment. A place where molecular structures, digital systems, clinical curiosity, beats, algorithms, and public health work can coexist without feeling like separate personalities.

That is the idea behind **Scientific Matrix**.

---

## Concept

Scientific Matrix is a dark, Matrix-inspired personal website and link hub built around one idea:

> Where molecular structures meet digital structures.

It is not a pharmacy website.  
It is not a hospital portal.  
It is not a generic developer portfolio.  
It is not a bio-link template with colors changed.

It is a personal identity system: part link hub, part laboratory, part terminal, part archive.

The visual language combines:

- pharmaceutical and scientific notation
- molecular structures and chemical formulas
- terminal-style interface details
- subtle Matrix-inspired digital rain
- dark futuristic UI
- restrained neon/emerald accents
- interactive motion that supports the atmosphere without overwhelming the content

The goal is to feel sophisticated, atmospheric, personal, and alive — not corporate, not medical, not cyberpunk cosplay, and not generically “tech bro.”

---

## What this project is

This is a fully static personal website designed for GitHub Pages.

It works without:

- backend services
- databases
- authentication
- paid APIs
- build pipelines
- frameworks
- external required services

It uses:

- HTML5
- CSS3
- vanilla JavaScript modules
- SVG for lightweight graphics
- Canvas for the Matrix background effect
- Web Audio API for optional synthesized sound effects

The site is configuration-driven, meaning most personal content can be edited from one file:

text
js/config.js
```

---

## Current identity

The site currently represents:

```text
Hassan Wael aka (HunterThief)
```

Not just HunterThief.  
Not just Hassan Wael.

Both parts belong to the same person.

The public identity reflected in the site includes:

- PharmD student
- software developer
- graphic designer
- EPSF-Alex member
- privacy, security and AI enthusiast
- builder of tools
- explorer of hacks
- creator of beats
- person interested in medicine, music, algorithms, public health, automation, clean code, and pushing boundaries

The tone intentionally avoids generic phrases like:

```text
Passionate developer
Results-driven professional
Creative problem solver
```

Unless those words actually mean something.

---

## Live deployment

This project is designed for GitHub Pages.

For a project repository:

```text
https://username.github.io/repository-name/
```

For a user or organization repository:

```text
https://username.github.io/
```

The project uses relative paths, so it should work in both cases.

The repository includes:

```text
.nojekyll
```

This tells GitHub Pages not to process the site with Jekyll, which is useful for a pure static project.

---

## Local preview

Because the project uses JavaScript ES modules, do not open `index.html` directly from `file://`.

Run a simple local server from the project root:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

If you use VS Code, Live Server also works.

---

## Project structure

```text
personal-site/
│
├── index.html
├── .nojekyll
├── README.md
│
├── assets/
│   ├── icons/
│   │   └── favicon.svg
│   └── images/
│       └── profile.webp
│
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── sections.css
│   └── animations.css
│
└── js/
    ├── main.js
    ├── config.js
    ├── content.js
    │
    ├── components/
    │   ├── navigation.js
    │   ├── projects.js
    │   ├── sections.js
    │   ├── effects.js
    │   ├── sound.js
    │   └── icons.js
    │
    └── utils/
        └── helpers.js
```

---

## Main files

### `index.html`

Contains the semantic page structure:

- loader / initialization sequence
- sticky navigation
- hero section
- about section
- projects section
- interests section
- contact section
- footer

Most repeated content is rendered from configuration, but the section shells remain in HTML so the site still has meaningful structure without JavaScript.

---

### `js/config.js`

This is the main customization file.

It contains:

- name
- alias
- display name
- page title
- description
- intro
- tagline
- contact note
- email
- WhatsApp number
- profile image path
- about paragraphs
- social links
- projects
- interests
- section visibility
- motion settings
- sound settings

If you want to change the site’s personal content, start here.

---

### `js/content.js`

Applies configuration values to the page:

- updates title and meta description
- fills text nodes marked with `data-content`
- renders about paragraphs
- renders social links
- renders profile image or fallback initials
- applies section visibility settings

---

### `js/components/projects.js`

Renders project and experience cards from the `projects` array.

Supported fields include:

```js
{
  id: "unique-id",
  name: "Project or role name",
  role: "Optional role title",
  period: "Optional date range",
  location: "Optional location",
  description: "Short explanation",
  category: "Optional badge",
  tags: ["Optional", "Tags"],
  image: "optional image path",
  imageAlt: "optional alt text",
  github: "optional repository",
  demo: "optional live link",
  url: "optional general link",
  formula: "optional scientific placeholder text",
  notes: "optional extra note"
}
```

The current project entries reflect parts of my profile and experience, including:

- EPSF-Alex
- Big-X Research Agency
- WeaveWonder
- Soflu
- Community Pharmacy internship

---

### `js/components/sections.js`

Renders interest cards and handles scroll-reveal observation.

The interests section is intentionally flexible. It is not limited to “skills.” It can represent disciplines, obsessions, fields of attention, or experimental areas.

Current interests include things like:

- Pharmacy
- Programming
- Software Experimentation
- Scientific Visualization
- Graphic Design
- Music & Beats
- Privacy, Security & AI
- Public Health & EPSF-Alex

---

### `js/components/effects.js`

Handles decorative visual systems:

- Matrix canvas rain
- scientific symbol cycling
- reduced-motion behavior
- motion configuration checks

The Matrix effect is deliberately subtle. It should create atmosphere, not damage readability.

---

### `js/components/sound.js`

Provides optional synthesized sound effects using the Web Audio API.

No external audio files are required.

Sound is disabled by default because browsers block autoplay and because unexpected audio is annoying. Visitors can enable it manually through the header sound toggle.

Available sound behaviors:

- hover ticks
- click confirmations
- intro sequence
- optional ambient drone

---

### `js/components/icons.js`

Contains inline SVG icons for social links and interface actions.

Current icon set includes:

- GitHub
- LinkedIn
- Facebook
- Reddit
- Instagram
- WhatsApp
- Email
- Globe
- X

Icons are embedded as SVG so they do not require external icon libraries.

---

## Editing personal information

Open:

```text
js/config.js
```

The `site` object controls the main identity.

Example:

```js
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
  email: "your-email@example.com",
  phoneDisplay: "+20 XXX XXX XXXX",
  whatsappNumber: "20XXXXXXXXXX",
  whatsappMessage: "Hello Hassan, I found you on Scientific Matrix.",
  profileImage: "assets/images/profile.webp",
  profileAlt: "Hassan Wael profile portrait",
  about: [
    "First paragraph.",
    "Second paragraph.",
    "Third paragraph."
  ]
};
```

Important:

- `name` is the human name.
- `alias` is the digital handle.
- `displayName` is the combined identity.
- `profileImage` should point to a local image.
- If the image is missing, the site falls back to initials.

---

## Profile image

Place your image here:

```text
assets/images/profile.webp
```

Recommended:

```text
square image
1024 x 1024 px or larger
WebP preferred
JPG acceptable
face centered
dark or neutral background works best
```

The image is intentionally treated to feel part of the Scientific Matrix environment:

- subtle green tint
- light scanline effect
- digital grid overlay
- orbital frame
- terminal-style profile panel
- status indicator
- social links underneath

It should not look like a normal portfolio headshot pasted into a template.

If the monochrome/green effect is too strong, adjust the filter values in:

```text
css/components.css
```

Look for:

```css
.avatar-media img
```

---

## Editing social links

Social links are defined in:

```js
export const socialLinks = [...]
```

Example:

```js
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
```

The social links appear in three places:

1. sticky header
2. hero profile card
3. footer/contact panel

This is intentional.

Some visitors only want a link. They should not have to scroll or hunt.

---

## Adding or removing a project

Add an object to:

```js
export const projects = [...]
```

Example:

```js
{
  id: "new-project",
  name: "New Project",
  role: "Role or position",
  period: "Jan 2026 – Present",
  location: "City, Country",
  description:
    "Short explanation of what this project or experience is.",
  category: "Software",
  tags: ["JavaScript", "Design", "Healthcare"],
  image: "assets/images/project.webp",
  imageAlt: "Project preview",
  github: "https://github.com/username/repo",
  demo: "https://example.com",
  formula: "C₈H₉NO₂",
  notes: "Optional extra context."
}
```

All fields except the basics are optional.

If no image is provided, the card shows a scientific placeholder using the optional `formula` value.

The order of cards follows the order of the array.

For example, if Big-X Research should appear immediately after EPSF-Alex, place it directly after EPSF-Alex in the array.

---

## Adding or removing an interest

Add an object to:

```js
export const interests = [...]
```

Example:

```js
{
  id: "privacy-security-ai",
  name: "Privacy, Security & AI",
  formula: "AES",
  description:
    "Exploring the boundary between data protection, secure systems, machine intelligence, and responsible technology.",
  link: "",
  image: "",
  imageAlt: ""
}
```

Interests are not meant to be rigid “skills.” They are fields of attention.

They can include:

- pharmacy
- programming
- design
- music
- public health
- research
- security
- AI
- experiments
- random obsessions

That flexibility is part of the point.

---

## Hiding sections

Use:

```js
export const sectionVisibility = {
  about: true,
  projects: true,
  interests: true,
  contact: true
};
```

Set a section to `false` to hide it:

```js
export const sectionVisibility = {
  about: true,
  projects: true,
  interests: false,
  contact: true
};
```

This does not remove the HTML section permanently; it only hides it through a CSS class. If you want to remove a section completely, delete or comment out its `<section>` block in `index.html`.

---

## Changing colors

The theme is controlled by CSS variables in:

```text
css/variables.css
```

Main palette:

```css
--bg: #050a08;
--bg-2: #0c1912;
--accent: #35e887;
--accent-muted: #799b86;
--text: #e2f5e9;
--text-dim: #9aafa2;
```

The Matrix canvas reads `--accent` and `--bg` from CSS, so changing the palette also changes the background effect.

The design uses restrained emerald accents on purpose. It should feel atmospheric, not like every element is shouting for attention.

---

## Animation configuration

Motion is configurable in:

```js
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
```

Options:

```text
speed: "slow" | "normal" | "fast"
intensity: "subtle" | "medium" | "high"
```

The site respects:

```css
prefers-reduced-motion: reduce
```

When reduced motion is enabled:

- decorative animation is disabled
- Matrix canvas is removed
- content remains visible
- scroll reveals are bypassed
- the site stays usable and calm

Motion is part of the identity, but it should never compromise readability, navigation, or accessibility.

---

## Sound configuration

Sound is optional and disabled by default.

Configure it in:

```js
export const soundConfig = {
  enabled: false,
  volume: 0.5,
  hover: true,
  click: true,
  intro: true,
  ambient: false,
  remember: true
};
```

Important behavior:

- browsers block autoplaying audio
- the visitor must enable sound manually
- the preference can be stored in `localStorage`
- ambient sound is disabled by default because it can become intrusive
- sound is synthesized with Web Audio API, so no MP3/WAV files are required

If the sound is too loud or too sharp, lower:

```js
volume: 0.5
```

to something like:

```js
volume: 0.35
```

If it is still too quiet, raise individual gains in:

```text
js/components/sound.js
```

Look for:

```js
hover()
click()
intro()
```

---

## Mobile behavior

The sticky navigation is intentionally simple on mobile.

On larger screens, the header shows:

```text
HW | Hassan Wael / aka HunterThief
```

On smaller screens, the header keeps the compact `HW` mark and hides the longer brand text so the social icons can fit on one row without wrapping.

This is a practical decision: the full name still appears prominently in the hero section, while the header remains usable as a quick access bar.

The social icons remain immediately accessible because one of the main reasons this site exists is to solve the “where do I click?” problem without turning the page into a generic link list.

---

## Design principles

These principles guide the project:

### 1. Accessibility first for links

Visitors should immediately find the links they came for.

Social links are visible in:

- header
- profile card
- contact/footer area

They are not hidden behind a menu.

---

### 2. One cohesive identity

Pharmacy and programming are not treated as two separate websites forced together.

They are part of the same person.

The design tries to express that relationship:

- molecular structures
- digital structures
- clinical curiosity
- software systems
- public health
- security
- design
- music
- experimentation

---

### 3. Visual restraint

The Matrix aesthetic should be atmospheric, not noisy.

Effects are intentionally limited:

- subtle canvas rain
- restrained glow
- controlled scanlines
- light molecular animation
- minimal neon usage

The content should remain readable.

---

### 4. Modularity

New content should be easy to add without rewriting the whole site.

Projects, interests, and social links are data arrays.

Future sections can be added by:

1. adding markup to `index.html`
2. adding data to `js/config.js`
3. creating a renderer in `js/components/`
4. calling it from `js/main.js`
5. adding styles if needed

Possible future sections:

- Articles
- Publications
- Certifications
- Photography
- Experiments
- Resources
- Notes
- Talks
- Research
- Music

Do not add all of them immediately. Add them only when there is real content.

---

### 5. Performance

The site should remain lightweight.

Optimizations include:

- no frontend framework
- no external JavaScript libraries
- no required external fonts
- no backend requests
- CSS transforms and opacity for animation
- throttled Canvas rendering
- animation pause when tab is hidden
- lazy loading for below-the-fold images
- inline SVG icons
- optional sound only after user interaction

---

### 6. Ownership

No paid services.  
No mandatory accounts.  
No analytics required.  
No external API dependency.  
No platform lock-in.

The site is static, portable, and yours.

---

### 7. Maintainability

The code is organized to be understandable, not impressively abstract.

Separation of concerns:

- content in `config.js`
- rendering in components
- styling in CSS modules/files
- behavior in `main.js`
- utilities in `helpers.js`

This is not enterprise architecture. It is a personal site that should still be pleasant to edit six months from now.

---

## Adding a new section later

The architecture is designed to allow new sections without rewriting existing ones.

General process:

### 1. Add section markup to `index.html`

Example:

```html
<section id="certifications" class="section certifications" aria-labelledby="certifications-title">
  <div class="container">
    <p class="section-kicker" data-reveal>05 / credentials</p>
    <h2 id="certifications-title" data-reveal style="--reveal-delay: 60ms">
      Certifications
    </h2>
    <div id="certifications-grid" class="certification-grid"></div>
  </div>
</section>
```

---

### 2. Add data to `js/config.js`

Example:

```js
export const certifications = [
  {
    id: "pharmacovigilance",
    name: "Introduction to Pharmacovigilance",
    issuer: "Issuer name",
    year: "2026",
    link: ""
  }
];
```

---

### 3. Create a renderer

Example:

```text
js/components/certifications.js
```

---

### 4. Call it from `js/main.js`

```js
import { renderCertifications } from "./components/certifications.js";

renderCertifications();
```

---

### 5. Add styles if needed

Usually in:

```text
css/sections.css
```

or:

```text
css/components.css
```

---

## Current content sources

The wording and structure are inspired by my own profile and LinkedIn context, including:

- PharmD study
- EPSF-Alex involvement
- Big-X Research Agency ambassador work
- WeaveWonder co-founding
- Soflu app development
- community pharmacy internship
- interest in privacy, security, and AI
- graphic design background
- music/beats
- public health
- automation
- clean code
- pushing boundaries

The site is not trying to sound like a recruiter-friendly resume. It is trying to sound like a person whose interests do not fit neatly into one template.

---

## Why not just use Linktree?

Linktree is fine if you only need buttons.

But it does not answer:

- who are you?
- why do these links belong to the same person?
- what is the relationship between pharmacy and software?
- what kind of mind built this?
- what atmosphere belongs to this identity?

This site exists because the links alone were not enough.

---

## Why not use a normal portfolio template?

Most portfolio templates assume one identity:

- developer
- designer
- scientist
- doctor
- freelancer
- student

I did not want to pick one and delete the others.

A normal template would either make the site look like a pharmacy brochure or a generic SaaS developer portfolio. Neither felt honest.

Scientific Matrix is an attempt to build a form that matches the actual content: mixed, interdisciplinary, technical, scientific, creative, and personal.

---

## GitHub Pages notes

Publish from either:

```text
main branch / root
```

or:

```text
gh-pages branch / root
```

The included `.nojekyll` file prevents GitHub Pages from processing files with Jekyll.

If an image does not load, check:

- exact file name casing
- relative path
- file location inside `assets/images/`
- whether the image format is supported

---

## Accessibility notes

The site includes:

- semantic landmarks
- skip link
- visible focus states
- accessible social labels
- decorative canvas hidden from assistive technology
- reduced-motion support
- keyboard-accessible navigation and controls
- sound toggle with `aria-pressed`
- readable contrast on dark background
- no mandatory JavaScript for basic structural content

JavaScript enhances the page, but the core identity and section structure remain present in HTML.

---

## Performance notes

The project avoids heavy dependencies.

The Matrix effect is Canvas-based and throttled. It pauses when the tab is hidden. Sound is synthesized only after user interaction. Images can be lazy-loaded. Icons are inline SVG.

The goal is a site that feels alive without becoming a battery drain.

---

## Customizing the voice

If you fork or reuse this project, the most important thing to change is not the colors.

It is the voice.

Replace the intro, tagline, about paragraphs, project descriptions, and interest descriptions with words that actually sound like you.

A personal site should not read like a template.

---

## Final note

This site is not meant to be a perfect corporate portfolio.

It is meant to be a personal system.

A place where:

```text
medicine + code + design + music + public health + security + experimentation
```

can exist without apologising for each other.

That is the Scientific Matrix.
