const icons = {
  github: `
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  `,

  linkedin: `
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  `,

  email: `
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  `,

  globe: `
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  `,

  x: `
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  `,

  facebook: `
    <path d="M15 3h-3a5 5 0 0 0-5 5v3H4v4h3v8h4v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
  `,

  reddit: `
    <circle cx="12" cy="14" r="7" />
    <path d="M9.5 12h.01" />
    <path d="M14.5 12h.01" />
    <path d="M9.5 16.5c1.3 1 3.7 1 5 0" />
    <path d="M12 7V4l3 1" />
    <circle cx="18.5" cy="8.5" r="1.5" />
    <circle cx="5.5" cy="8.5" r="1.5" />
  `,

  instagram: `
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" />
  `,

  whatsapp: `
    <path d="M3.5 20.5 5 16.2A8.5 8.5 0 1 1 8.2 19.4L3.5 20.5Z" />
    <path d="M9 10.2c0 3 2.9 5.9 5.9 5.9.8 0 1.5-.7 1.5-1.5 0-.4-.9-1.3-1.4-1.6-.5-.3-1 .2-1.4.4-.8-.4-1.7-1.3-2.1-2.1.2-.4.7-.9.4-1.4-.3-.5-1.2-1.4-1.6-1.4-.8 0-1.3.7-1.3 1.7Z" />
  `
};

export function iconSvg(name) {
  const path = icons[name] || icons.globe;

  return `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      ${path}
    </svg>
  `;
}
