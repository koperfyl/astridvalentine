const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttonsDiv = document.getElementById("buttons");
const videoContainer = document.getElementById("videoContainer");

let player;

/* YouTube API */
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        videoId: "cahV83nd7_I",
        playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 1,
            rel: 0
        }
    });
}

/* BOTÓN SÍ */
yesBtn.addEventListener("click", () => {
    buttonsDiv.style.display = "none";
    videoContainer.style.display = "flex";

    // Reproducir y quitar mute casi inmediato
    setTimeout(() => {
        if (player) {
            player.playVideo();
            setTimeout(() => player.unMute(), 100);
        }
    }, 200);
});

/* BOTÓN NO — HUYE SIN TAPAR EL SÍ */
let noSpeed = 1;
let noActivated = false;

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
    if (!noActivated) {
        noBtn.textContent = "Jo... 😢";
        noActivated = true;
    }

    const yesRect = yesBtn.getBoundingClientRect();
    const padding = 80;

    let x, y, safe = false;

    while (!safe) {
        x = Math.random() * (window.innerWidth - noBtn.clientWidth);
        y = Math.random() * (window.innerHeight - noBtn.clientHeight);

        const overlaps =
            x < yesRect.right + padding &&
            x + noBtn.clientWidth > yesRect.left - padding &&
            y < yesRect.bottom + padding &&
            y + noBtn.clientHeight > yesRect.top - padding;

        if (!overlaps) safe = true;
    }

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    noBtn.style.zIndex = "2";
    yesBtn.style.zIndex = "5";

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
