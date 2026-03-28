document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // 🌙 THEME TOGGLE
    // =========================
    const btn = document.getElementById("theme-toggle");

    if (btn) {
        const icon = btn.querySelector("i");

        btn.addEventListener("click", () => {
            document.body.classList.toggle("light");

            if (icon) {
                if (document.body.classList.contains("light")) {
                    icon.classList.replace("fa-moon", "fa-sun");
                } else {
                    icon.classList.replace("fa-sun", "fa-moon");
                }
            }
        });
    }


    // =========================
    // ⌨️ TYPING EFFECT
    // =========================
    const text = document.querySelector(".typing-text");

    if (text) {
        const words = ["Developer", "Programmer", "Problem Solver"];
        let i = 0, j = 0, deleting = false;

        function type() {
            const word = words[i];
            text.textContent = word.substring(0, j);

            if (!deleting) {
                j++;
                if (j > word.length) {
                    deleting = true;
                    setTimeout(type, 800);
                    return;
                }
            } else {
                j--;
                if (j === 0) {
                    deleting = false;
                    i = (i + 1) % words.length;
                }
            }

            setTimeout(type, deleting ? 50 : 100);
        }

        type();
    }


    // =========================
    // 📊 SKILL ANIMATION
    // =========================
    const skillsSection = document.getElementById("skills");
    let skillsDone = false;

    function animateSkills() {
        if (!skillsSection || skillsDone) return;

        const top = skillsSection.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            document.querySelectorAll(".progress-bar").forEach(bar => {
                const width = bar.style.width;
                bar.style.width = "0%";

                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            });

            skillsDone = true;
        }
    }

    window.addEventListener("scroll", animateSkills);
    animateSkills();


    // =========================
    // 📜 CERTIFICATE MODAL
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

        if (closeBtn) {
            closeBtn.onclick = () => modal.style.display = "none";
        }

        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

});