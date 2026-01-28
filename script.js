const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttonsDiv = document.getElementById("buttons");
const countdownEl = document.getElementById("countdown");
const timerEl = document.getElementById("timer");

/* SONIDO ROMÁNTICO (Web Audio, sin archivos) */
function playSound() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1);
}

/* BOTÓN SÍ */
yesBtn.addEventListener("click", () => {
    buttonsDiv.style.display = "none";
    countdownEl.style.display = "block";
    startCountdown();
    playSound();

    confetti({
        particleCount: 180,
        spread: 80,
        origin: { y: 0.6 }
    });
});

/* BOTÓN NO */
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

    noSpeed += 0.7;
    noBtn.style.transition = `${0.25 / noSpeed}s`;
});

/* CUENTA ATRÁS */
function startCountdown() {
    const target = new Date("February 14, 2026 00:00:00").getTime();

    setInterval(() => {
        const now = Date.now();
        const diff = target - now;

        if (diff <= 0) {
            timerEl.textContent = "¡Ya es 14 de febrero! 💘";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        timerEl.textContent = `${d}d ${h}h ${m}m ${s}s`;
    }, 1000);
}
