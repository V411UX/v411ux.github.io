console.log("Matrix.js está funcionando!");
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Ajustar tamaño del canvas
function resizeCanvas() {
    canvas.width = window.innerWidth || 800;
    canvas.height = window.innerHeight || 600;
}

resizeCanvas();

// Definir caracteres griegos y colores
const greekLetters = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ".split("");
const fontSize = 20;
const columns = Math.max(1, Math.floor(canvas.width / fontSize));
const drops = Array(columns).fill(1);

// Definir proporciones de colores
function getRandomColor() {
    const random = Math.random();
    if (random < 0.60) return "#00aaff"; // 60% Azul
    if (random < 0.80) return "#00ff00"; // 20% Verde
    return "#ffff00"; // 10% Amarillo
}

// Dibujar la lluvia
function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = greekLetters[Math.floor(Math.random() * greekLetters.length)];
        ctx.fillStyle = getRandomColor();
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
    resizeCanvas();
});
