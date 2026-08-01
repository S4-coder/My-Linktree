/* ============================================================
   Typewriter Effect — cycles through developer roles
   ============================================================ */

(function () {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "System Design Engineer",
    "React Developer",
    "Next.js Developer",
    "AI / LLMs Enthusiast"
  ];

  const textEl = document.querySelector(".typed-text");
  const cursorEl = document.querySelector(".type-cursor");
  if (!textEl) return;

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  // Speed controls (ms)
  const TYPE_SPEED = 90;      // typing speed
  const DELETE_SPEED = 45;    // deleting speed
  const PAUSE_END = 1400;     // pause when a word is fully typed
  const PAUSE_START = 300;    // pause before deleting

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      textEl.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, PAUSE_END);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      textEl.textContent = current.slice(0, charIndex);

      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(tick, PAUSE_START);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  tick();
})();

