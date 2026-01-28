const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const countdownEl = document.getElementById("countdown");
const timerEl = document.getElementById("timer");
const buttonsDiv = document.getElementById("buttons");

// BOTÓN SÍ
yesBtn.addEventListener("click", () => {
    buttonsDiv.style.display = "none";
    countdownEl.style.display = "block";
    startCountdown();

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});

// BOTÓN NO (huye y se pone triste)
let noSpeed = 1;
let noActivated = false;

noBtn.addEventListener("mouseover", () => {
    if (!noActivated) {
        noBtn.textContent = "Jo... 😢";
        noActivated = true;
    }

    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    noSpeed += 0.6;
    noBtn.style.transition = `${0.25 / noSpeed}s`;
});

// CUENTA ATRÁS
function startCountdown() {
    const valentineDate = new Date("February 14, 2026 00:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const distance = valentineDate - now;

        if (distance <= 0) {
            timerEl.innerHTML = "¡Ya es 14 de febrero! 💘";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
