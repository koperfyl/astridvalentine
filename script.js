const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const countdownEl = document.getElementById("countdown");
const timerEl = document.getElementById("timer");
const buttonsDiv = document.getElementById("buttons");

yesBtn.addEventListener("click", () => {
    buttonsDiv.style.display = "none";
    countdownEl.style.display = "block";
    startCountdown();
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

function startCountdown() {
    const valentineDate = new Date("February 14, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = valentineDate - now;

        if (distance <= 0) {
            timerEl.innerHTML = "¡Ya es 14 de febrero! 💘";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
