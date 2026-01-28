const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttonsDiv = document.getElementById("buttons");
const videoContainer = document.getElementById("videoContainer");

/* BOTÓN SÍ — MUESTRA VIDEO */
yesBtn.addEventListener("click", () => {
    buttonsDiv.style.display = "none";
    videoContainer.style.display = "flex";
});

/* BOTÓN NO — HUYE */
let noSpeed = 1;
let noActivated = false;

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
    if (!noActivated) {
        noBtn.textContent = "Jo... 😢";
        noActivated = true;
    }

    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    noSpeed += 0.7;
    noBtn.style.transition = `${0.2 / noSpeed}s`;
}

/* CORAZONES */
const heartsContainer = document.querySelector(".hearts");
const heartEmojis = ["💖", "💕", "💘", "💗", "💓"];

function createHeart() {
    const heart = document.createElement("span");
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 6 + Math.random() * 8 + "s";
    heart.style.fontSize = 1.2 + Math.random() * 1.5 + "rem";

    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 18000);
}

setInterval(createHeart, 300);
