import { site, socialLinks, sectionVisibility } from "./config.js";
import { qs, qsa, el } from "./utils/helpers.js";
import { iconSvg } from "./components/icons.js";

export function applyContent() {
  document.title = site.title;

  const metaDescription = qs('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", site.description);
  }

  qsa("[data-content]").forEach((node) => {
    const key = node.dataset.content;
    const value = getPath(site, key);
    if (value !== undefined && value !== null) {
      node.textContent = value;
    }
  });

  const aboutText = qs("#about-text");
  if (aboutText && Array.isArray(site.about) && site.about.length) {
    aboutText.innerHTML = "";
    site.about.forEach((paragraph, index) => {
      aboutText.append(
        el(
          "p",
          {
            "data-reveal": "",
            style: `--reveal-delay:${120 + index * 60}ms`
          },
          [paragraph]
        )
      );
    });
  }

  const contactEmail = qs("#contact-email");
  if (contactEmail && site.email) {
    contactEmail.href = `mailto:${site.email}`;
    const emailText = qs(".btn-text", contactEmail);
    if (emailText) emailText.textContent = site.email;
  }

  renderSocial(qs("#social-nav"), "small");
  renderSocial(qs("#social-footer"), "large");

  applySectionVisibility();
}

export function renderSocial(container, variant = "small") {
  if (!container) return;

  container.innerHTML = "";

  socialLinks.forEach((link) => {
    const attrs = {
      href: link.url,
      class: `social-link ${variant}`,
      "aria-label": link.label,
      rel: "noopener noreferrer"
    };

    if (String(link.url).startsWith("http")) {
      attrs.target = "_blank";
    }

    const anchor = el("a", attrs);
    anchor.innerHTML = iconSvg(link.icon || "globe");

    container.append(el("li", {}, [anchor]));
  });
}

function applySectionVisibility() {
  Object.entries(sectionVisibility).forEach(([id, visible]) => {
    const section = qs(`#${id}`);
    if (section) {
      section.classList.toggle("is-hidden", visible === false);
    }
  });
}

function getPath(object, path) {
  return String(path)
    .split(".")
    .reduce((current, key) => current?.[key], object);
}
