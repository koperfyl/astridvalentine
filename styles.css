* {
    box-sizing: border-box;
}

body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #ffd6e0, #ffe6e6);
    overflow: hidden;
}

.container {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 20px;
}

.hero {
    max-width: 300px;
    width: 90%;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    margin-bottom: 20px;
    animation: fadeInUp 1.5s ease;
}

h1 {
    color: #b30000;
    margin-bottom: 20px;
}

button {
    padding: 15px 30px;
    margin: 15px;
    font-size: 20px;
    border-radius: 12px;
    cursor: pointer;
    border: none;
    transition: 0.3s ease;
}

#yesBtn {
    background: #ff4d4d;
    color: white;
}

#noBtn {
    background: #cccccc;
    color: #333;
    position: relative;
}

#countdown {
    display: none;
    margin-top: 30px;
}

#timer {
    font-size: 2rem;
    color: #b30000;
    font-weight: bold;
}

/* Animación imagen */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Corazones animados */
.hearts::before,
.hearts::after {
    content: "💖 💕 💘 💗 💓";
    position: fixed;
    top: -10%;
    left: 0;
    width: 100%;
    font-size: 2rem;
    animation: hearts 15s linear infinite;
    opacity: 0.4;
    z-index: 1;
}

.hearts::after {
    animation-delay: 7s;
}

@keyframes hearts {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(120vh);
    }
}
