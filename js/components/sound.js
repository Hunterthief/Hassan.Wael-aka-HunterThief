export class SoundEngine {
  constructor(config = {}) {
    this.config = {
      volume: 0.12,
      hover: true,
      click: true,
      intro: true,
      ambient: false,
      remember: true,
      ...config
    };

    this.enabled = false;
    this.ctx = null;
    this.master = null;
    this.ambient = null;
    this.lastHover = 0;
  }

  async toggle() {
    if (this.enabled) {
      this.disable();
    } else {
      await this.enable();
    }

    return this.enabled;
  }

  async enable() {
    await this.ensureContext();

    this.enabled = true;

    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(this.master.gain.value, now);
    this.master.gain.linearRampToValueAtTime(this.config.volume, now + 0.25);

    if (this.config.ambient) {
      this.startAmbient();
    }

    if (this.config.remember) {
      localStorage.setItem("sm-sound", "true");
    }
  }

  disable() {
    this.enabled = false;

    if (this.ctx && this.master) {
      const now = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(now);
      this.master.gain.setValueAtTime(this.master.gain.value, now);
      this.master.gain.linearRampToValueAtTime(0, now + 0.18);
    }

    this.stopAmbient();

    if (this.config.remember) {
      localStorage.setItem("sm-sound", "false");
    }
  }

  async ensureContext() {
    if (!this.ctx) {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContextClass) {
        throw new Error("Web Audio API is not supported.");
      }

      this.ctx = new AudioContextClass();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0;
      this.master.connect(this.ctx.destination);
    }

    if (this.ctx.state === "suspended") {
      await this.ctx.resume();
    }
  }

  playTone(options = {}) {
    if (!this.enabled || !this.ctx) return;

    const {
      frequency = 440,
      type = "sine",
      duration = 0.08,
      gain = 0.2,
      attack = 0.004,
      release = 0.06,
      slideTo = null
    } = options;

    const now = this.ctx.currentTime;

    const oscillator = this.ctx.createOscillator();
    const envelope = this.ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, now);

    if (slideTo) {
      oscillator.frequency.exponentialRampToValueAtTime(slideTo, now + duration);
    }

    envelope.gain.setValueAtTime(0.0001, now);
    envelope.gain.exponentialRampToValueAtTime(
      Math.max(gain, 0.0002),
      now + attack
    );
    envelope.gain.exponentialRampToValueAtTime(
      0.0001,
      now + duration + release
    );

    oscillator.connect(envelope);
    envelope.connect(this.master);

    oscillator.start(now);
    oscillator.stop(now + duration + release + 0.03);
  }

  hover() {
    if (!this.config.hover) return;

    const now = performance.now();
    if (now - this.lastHover < 70) return;

    this.lastHover = now;

    this.playTone({
      frequency: 1180,
      type: "sine",
      duration: 0.025,
      gain: 0.035,
      release: 0.04
    });
  }

  click() {
    if (!this.config.click) return;

    this.playTone({
      frequency: 392,
      type: "triangle",
      duration: 0.055,
      gain: 0.09,
      slideTo: 523,
      release: 0.08
    });
  }

  intro() {
    if (!this.config.intro) return;

    const notes = [196, 261, 329, 392, 523];

    notes.forEach((frequency, index) => {
      setTimeout(() => {
        this.playTone({
          frequency,
          type: "sine",
          duration: 0.09,
          gain: 0.07,
          release: 0.12
        });
      }, index * 95);
    });
  }

  startAmbient() {
    if (!this.ctx || this.ambient?.gain) return;

    const now = this.ctx.currentTime;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, now);
    gain.connect(this.master);

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 240;
    filter.connect(gain);

    const oscillators = [55, 55.4, 110].map((frequency, index) => {
      const oscillator = this.ctx.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;

      const oscillatorGain = this.ctx.createGain();
      oscillatorGain.gain.value = index === 2 ? 0.16 : 0.45;

      oscillator.connect(oscillatorGain);
      oscillatorGain.connect(filter);
      oscillator.start(now);

      return oscillator;
    });

    gain.gain.exponentialRampToValueAtTime(0.026, now + 1.2);

    this.ambient = {
      gain,
      filter,
      oscillators
    };
  }

  stopAmbient() {
    if (!this.ambient || !this.ctx) return;

    const now = this.ctx.currentTime;
    const { gain, filter, oscillators } = this.ambient;

    gain.gain.cancelScheduledValues(now);
    gain.gain.setValueAtTime(gain.gain.value, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

    oscillators.forEach((oscillator) => {
      try {
        oscillator.stop(now + 0.3);
        oscillator.disconnect(now + 0.35);
      } catch {
        // Ignore already stopped nodes.
      }
    });

    try {
      gain.disconnect(now + 0.35);
      filter.disconnect(now + 0.35);
    } catch {
      // Ignore disconnected nodes.
    }

    this.ambient = null;
  }
}
