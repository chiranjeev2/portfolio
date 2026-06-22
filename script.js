document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // THEME TOGGLE — FIXED
  // =========================
  const btn = document.getElementById("theme-toggle");
  const icon = btn ? btn.querySelector("i") : null;

  // Load saved preference
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    if (icon) { icon.classList.remove("fa-moon"); icon.classList.add("fa-sun"); }
  }

  if (btn) {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      const isLight = document.body.classList.contains("light");
      if (icon) {
        icon.classList.toggle("fa-moon", !isLight);
        icon.classList.toggle("fa-sun", isLight);
      }
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }

  // =========================
  // TYPING EFFECT
  // =========================
  const text = document.querySelector(".typing-text");
  if (text) {
    const words = ["Full-Stack Developer", "Systems Programmer", "Problem Solver", "AI/ML Enthusiast"];
    let i = 0, j = 0, deleting = false;
    function type() {
      const word = words[i];
      text.textContent = word.substring(0, j);
      if (!deleting) {
        j++;
        if (j > word.length) { deleting = true; setTimeout(type, 900); return; }
      } else {
        j--;
        if (j === 0) { deleting = false; i = (i + 1) % words.length; }
      }
      setTimeout(type, deleting ? 45 : 95);
    }
    type();
  }

  // =========================
  // CERTIFICATE MODAL
  // =========================
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.getElementById("close-modal");

  if (modal && modalImg) {
    document.querySelectorAll(".cert-link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
        modalImg.src = link.href;
      });
    });
    if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";
    window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") modal.style.display = "none"; });
  }

});