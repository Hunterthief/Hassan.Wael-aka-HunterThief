import { projects } from "../config.js";
import { qs, el } from "../utils/helpers.js";
import { iconSvg } from "./icons.js";

export function renderProjects() {
  const grid = qs("#projects-grid");
  if (!grid) return;

  grid.innerHTML = "";

  if (!Array.isArray(projects) || projects.length === 0) {
    grid.append(
      el("p", { class: "empty-note" }, [
        "No projects configured yet. Add entries to js/config.js."
      ])
    );
    return;
  }

  projects.forEach((project, index) => {
    const card = el("article", {
      class: "project-card card",
      "data-reveal": "",
      style: `--reveal-delay:${Math.min(index, 6) * 80}ms`
    });

    const media = project.image
      ? el("div", { class: "card-media" }, [
          el("img", {
            src: project.image,
            alt: project.imageAlt || `${project.name} preview`,
            loading: "lazy",
            decoding: "async"
          })
        ])
      : el("div", { class: "card-media placeholder", "aria-hidden": "true" }, [
          el("span", { class: "placeholder-formula" }, [
            project.formula || "C₈H₉NO₂"
          ]),
          el("span", { class: "placeholder-code" }, [project.id || "module"])
        ]);

    const categoryBadge = project.category
      ? el("span", { class: "badge" }, [project.category])
      : null;

    const metaParts = [project.role, project.period, project.location].filter(
      Boolean
    );

    const meta = metaParts.length
      ? el("p", { class: "card-meta" }, [metaParts.join(" · ")])
      : null;

    const tags =
      Array.isArray(project.tags) && project.tags.length
        ? el(
            "ul",
            { class: "tag-list", "aria-label": "Tags" },
            project.tags.map((tag) => el("li", { class: "tag" }, [tag]))
          )
        : null;

    const actions = [];

    if (project.github) {
      const repoButton = el("a", {
        href: project.github,
        class: "btn btn-ghost",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${project.name} repository`
      });

      repoButton.append(
        el("span", { class: "btn-icon", html: iconSvg("github") }),
        "Repo"
      );

      actions.push(repoButton);
    }

    if (project.demo) {
      actions.push(
        el(
          "a",
          {
            href: project.demo,
            class: "btn btn-primary",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          ["Live demo"]
        )
      );
    }

    if (project.url && !project.demo) {
      actions.push(
        el(
          "a",
          {
            href: project.url,
            class: "btn btn-ghost",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          ["Open"]
        )
      );
    }

    const body = el("div", { class: "card-body" }, [
      categoryBadge,
      el("h3", { class: "card-title" }, [project.name]),
      meta,
      el("p", { class: "card-description" }, [project.description || ""]),
      tags,
      actions.length ? el("div", { class: "card-actions" }, actions) : null,
      project.notes ? el("p", { class: "card-notes" }, [project.notes]) : null
    ]);

    card.append(media, body);
    grid.append(card);
  });
}
