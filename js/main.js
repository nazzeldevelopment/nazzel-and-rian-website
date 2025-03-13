document.addEventListener("DOMContentLoaded", function () {
    // Loading Animation
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.body.style.display = "block";
        document.body.style.opacity = "1";
    }, 3000);

    // Background Music
    let bgMusic = new Audio("../assets/music/bg-music.mp3");
    bgMusic.loop = true;

    document.body.addEventListener("click", function () {
        if (bgMusic.paused) {
            bgMusic.play();
        }
    });

    // Auto-update Copyright Year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Dark Mode Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Fetch Love Quotes
    fetch("../assets/love-quotes.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote-text").textContent = data[Math.floor(Math.random() * data.length)];
        });
});
