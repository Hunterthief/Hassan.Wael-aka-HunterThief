import { motionConfig, soundConfig } from "./config.js";
import { qs, prefersReducedMotion } from "./utils/helpers.js";
import { applyContent } from "./content.js";
import { initNavigation } from "./components/navigation.js";
import { renderProjects } from "./components/projects.js";
import { renderInterests, observeReveals } from "./components/sections.js";
import { initEffects } from "./components/effects.js";
import { SoundEngine } from "./components/sound.js";

const sound = new SoundEngine(soundConfig);

function init() {
  applyContent();
  renderProjects();
  renderInterests();
  initNavigation();
  initEffects();
  observeReveals(document);
  initSound();
  initLoader();

  requestAnimationFrame(() => {
    document.body.classList.add("loaded");
  });
}

function initSound() {
  const button = qs("#sound-toggle");
  if (!button) return;

  const storedEnabled =
    soundConfig.remember && localStorage.getItem("sm-sound") === "true";

  if (storedEnabled) {
    button.setAttribute("aria-pressed", "true");

    const unlockEvents = ["pointerdown", "keydown", "touchstart"];

    const unlock = async (event) => {
      if (event.target?.closest?.("#sound-toggle")) return;

      await sound.enable();
      sound.intro();
      removeUnlockListeners();
    };

    const removeUnlockListeners = () => {
      unlockEvents.forEach((eventName) => {
        window.removeEventListener(eventName, unlock);
      });
    };

    unlockEvents.forEach((eventName) => {
      window.addEventListener(eventName, unlock, { passive: true });
    });
  }

  button.addEventListener("click", async () => {
    const enabled = await sound.toggle();
    button.setAttribute("aria-pressed", String(enabled));

    if (enabled) {
      sound.intro();
    }
  });

  document.addEventListener(
    "pointerover",
    (event) => {
      if (!sound.enabled) return;
      if (event.target.closest("a, button, .card")) {
        sound.hover();
      }
    },
    { passive: true }
  );

  document.addEventListener(
    "click",
    (event) => {
      if (!sound.enabled) return;
      if (event.target.closest("a, button, .card")) {
        sound.click();
      }
    },
    { passive: true }
  );
}

function initLoader() {
  const loader = qs("#loader");
  if (!loader) return;

  const useIntro =
    motionConfig.enabled &&
    motionConfig.introAnimation &&
    !prefersReducedMotion();

  const delay = useIntro ? 850 : 0;

  setTimeout(() => {
    loader.classList.add("is-hidden");

    loader.addEventListener(
      "transitionend",
      () => {
        loader.remove();
      },
      { once: true }
    );

    setTimeout(() => {
      if (document.contains(loader)) {
        loader.remove();
      }
    }, 700);
  }, delay);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
