import { interests, motionConfig } from "../config.js";
import { qs, qsa, el, prefersReducedMotion } from "../utils/helpers.js";
import { iconSvg } from "./icons.js";

let revealObserver = null;

export function renderInterests() {
  const grid = qs("#interests-grid");
  if (!grid) return;

  grid.innerHTML = "";

  if (!Array.isArray(interests) || interests.length === 0) {
    grid.append(
      el("p", { class: "empty-note" }, [
        "No interests configured yet. Add entries to js/config.js."
      ])
    );
    return;
  }

  interests.forEach((item, index) => {
    const card = el("article", {
      class: "interest-card card",
      "data-reveal": item.image ? "scale" : "left",
      style: `--reveal-delay:${index * 60}ms`
    });

    if (item.image) {
      card.append(
        el("div", { class: "interest-media" }, [
          el("img", {
            src: item.image,
            alt: item.imageAlt || item.name,
            loading: "lazy",
            decoding: "async"
          })
        ])
      );
    }

    const linkAttrs = {
      href: item.link,
      class: "interest-link",
      rel: "noopener noreferrer"
    };

    if (String(item.link).startsWith("http")) {
      linkAttrs.target = "_blank";
    }

    const link = item.link
      ? el("a", linkAttrs, [
          "Explore",
          el("span", { html: iconSvg("globe") })
        ])
      : null;

    const body = el("div", { class: "interest-body" }, [
      el("h3", {}, [item.name]),
      item.formula ? el("span", { class: "formula" }, [item.formula]) : null,
      el("p", {}, [item.description || ""]),
      link
    ]);

    card.append(body);
    grid.append(card);
  });
}

export function observeReveals(root = document) {
  const items = qsa("[data-reveal]", root).filter(
    (item) => !item.classList.contains("is-visible")
  );

  if (
    !motionConfig.enabled ||
    !motionConfig.scrollReveal ||
    prefersReducedMotion() ||
    !("IntersectionObserver" in window)
  ) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px"
      }
    );
  }

  items.forEach((item) => revealObserver.observe(item));
}
