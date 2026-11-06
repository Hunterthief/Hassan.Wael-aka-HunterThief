import { motionConfig } from "../config.js";
import { qs, qsa, prefersReducedMotion, debounce } from "../utils/helpers.js";

export function initEffects() {
  const root = document.documentElement;

  if (!motionConfig.enabled) {
    root.classList.add("motion-disabled");
    qs("#matrix-canvas")?.remove();
    return;
  }

  if (prefersReducedMotion()) {
    root.classList.add("reduced-motion");
    qs("#matrix-canvas")?.remove();
    return;
  }

  initMatrixRain();
  initScientificCycle();
}

function initMatrixRain() {
  const canvas = qs("#matrix-canvas");

  if (!canvas || !motionConfig.matrixRain) {
    canvas?.remove();
    return;
  }

  const ctx = canvas.getContext("2d", { alpha: true });

  if (!ctx) {
    canvas.remove();
    return;
  }

  const styles = getComputedStyle(document.documentElement);
  const accent = hexToRgb(
    styles.getPropertyValue("--accent").trim() || "#35E887"
  );
  const bg = hexToRgb(styles.getPropertyValue("--bg").trim() || "#050A08");

  const glyphs =
    "アカサタナハマヤラワイキシチニヒミリヰウクスツヌフムユルエケセテネヘメレヱオコソトノホモヨロヲ0123456789+-=<>[]{}#$%&@pHmolC,H,N,O,S,Fe,Zn,Δ,Ω,μ,λ,ψ".split(
      ""
    );

  let width = 0;
  let height = 0;
  let columns = 0;
  let drops = [];
  let fontSize = 14;
  let rafId = 0;
  let lastTime = 0;

  const fps =
    motionConfig.speed === "fast"
      ? 45
      : motionConfig.speed === "slow"
        ? 20
        : 30;

  const frameInterval = 1000 / fps;

  const intensityValue =
    motionConfig.intensity === "high"
      ? 1
      : motionConfig.intensity === "medium"
        ? 0.7
        : 0.55;

  canvas.style.opacity = String(0.16 + intensityValue * 0.12);

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    width = canvas.clientWidth;
    height = canvas.clientHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    fontSize = width < 640 ? 12 : 14;
    columns = Math.max(1, Math.floor(width / fontSize));

    drops = Array.from({ length: columns }, () =>
      Math.random() * (-height / fontSize)
    );
  }

  function draw(now) {
    rafId = requestAnimationFrame(draw);

    if (now - lastTime < frameInterval) return;
    lastTime = now;

    ctx.fillStyle = `rgba(${bg.r}, ${bg.g}, ${bg.b}, 0.09)`;
    ctx.fillRect(0, 0, width, height);

    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i += 1) {
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      const char = glyphs[Math.floor(Math.random() * glyphs.length)];

      ctx.fillStyle = `rgba(${accent.r}, ${accent.g}, ${accent.b}, ${
        0.78 * intensityValue
      })`;
      ctx.fillText(char, x, y);

      if (Math.random() > 0.985) {
        ctx.fillStyle = `rgba(226, 245, 233, ${0.45 * intensityValue})`;
        ctx.fillText(char, x, y);
      }

      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      }

      drops[i] += 1;
    }
  }

  resize();

  window.addEventListener("resize", debounce(resize, 180));

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    } else if (!rafId) {
      lastTime = 0;
      rafId = requestAnimationFrame(draw);
    }
  });

  rafId = requestAnimationFrame(draw);
}

function initScientificCycle() {
  if (!motionConfig.molecularEffects) return;

  const elements = qsa("[data-scientific-cycle]");
  if (!elements.length) return;

  const formulas = [
    "C₈H₉NO₂",
    "C₉H₈O₄",
    "C₁₇H₂₁NO₃",
    "pH 7.4",
    "0.9% NaCl",
    "λmax 254 nm",
    "ΔG < 0",
    "mol·L⁻¹",
    "10⁻⁹ M",
    "Fe²⁺ / Fe³⁺"
  ];

  let index = 0;

  setInterval(() => {
    if (document.hidden) return;

    index = (index + 1) % formulas.length;

    elements.forEach((element) => {
      const offset = Number(element.dataset.offset || 0);
      const next = formulas[(index + offset) % formulas.length];

      element.style.opacity = "0";

      setTimeout(() => {
        element.textContent = next;
        element.style.opacity = "1";
      }, 220);
    });
  }, 4200);
}

function hexToRgb(input) {
  const fallback = { r: 53, g: 232, b: 135 };

  if (!input) return fallback;

  const hex = input.replace("#", "").trim();

  if (hex.length === 3) {
    return {
      r: parseInt(hex[0] + hex[0], 16),
      g: parseInt(hex[1] + hex[1], 16),
      b: parseInt(hex[2] + hex[2], 16)
    };
  }

  if (hex.length >= 6) {
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16)
    };
  }

  return fallback;
}
