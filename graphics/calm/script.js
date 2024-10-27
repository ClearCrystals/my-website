
const canvas = document.getElementById("canvas");
const slider = document.getElementById("slider");
const ctx = canvas.getContext("2d");
const filledCircles = [];
const unfilledCircles = [];
const filledTriangles = [];
const unfilledTriangles = [];
const filledSquares = [];
const unfilledSquares = [];

const numFilledCircles = 4;
const numUnfilledCircles = 4;
const numFilledTriangles = 2;
const numUnfilledTriangles = 2;
const numFilledSquares = 2;
const numUnfilledSquares = 3;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createRandomCircle(filled) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 50 + 20;
    const color = randomColor();
    const speedX = Math.random() * 4 - 2;
    const speedY = Math.random() * 4 - 2;

    const circle = { x, y, radius, color, speedX, speedY };

    if (filled) {
        filledCircles.push(circle);
    } else {
        unfilledCircles.push(circle);
    }

    return circle;
}

function createRandomTriangle(filled) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const sideLength = Math.random() * 50 + 20;
    const color = randomColor();
    const speedX = Math.random() * 4 - 2;
    const speedY = Math.random() * 4 - 2;

    const triangle = { x, y, sideLength, color, speedX, speedY };

    if (filled) {
        filledTriangles.push(triangle);
    } else {
        unfilledTriangles.push(triangle);
    }

    return triangle;
}

function createRandomSquare(filled) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const sideLength = Math.random() * 50 + 20;
    const color = randomColor();
    const speedX = Math.random() * 4 - 2;
    const speedY = Math.random() * 4 - 2;

    const square = { x, y, sideLength, color, speedX, speedY };

    if (filled) {
        filledSquares.push(square);
    } else {
        unfilledSquares.push(square);
    }

    return square;
}

function drawCircles() {
    for (const circle of filledCircles) {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();

        circle.x += circle.speedX;
        circle.y += circle.speedY;

        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
            circle.speedX *= -1;
        }
        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
            circle.speedY *= -1;
        }
    }

    for (const circle of unfilledCircles) {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.strokeStyle = circle.color;
        ctx.lineWidth = slider.value;
        ctx.stroke();

        circle.x += circle.speedX;
        circle.y += circle.speedY;

        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
            circle.speedX *= -1;
        }
        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
            circle.speedY *= -1;
        }
    }
}

function drawTriangles() {
    for (const triangle of filledTriangles) {
        ctx.beginPath();
        ctx.moveTo(triangle.x, triangle.y - triangle.sideLength / 2);
        ctx.lineTo(triangle.x - triangle.sideLength / 2, triangle.y + triangle.sideLength / 2);
        ctx.lineTo(triangle.x + triangle.sideLength / 2, triangle.y + triangle.sideLength / 2);
        ctx.closePath();
        ctx.fillStyle = triangle.color;
        ctx.fill();

        triangle.x += triangle.speedX;
        triangle.y += triangle.speedY;

        if (triangle.x + triangle.sideLength / 2 > canvas.width || triangle.x - triangle.sideLength / 2 < 0) {
            triangle.speedX *= -1;
        }
        if (triangle.y + triangle.sideLength / 2 > canvas.height || triangle.y - triangle.sideLength / 2 < 0) {
            triangle.speedY *= -1;
        }
    }

    for (const triangle of unfilledTriangles) {
        ctx.beginPath();
        ctx.moveTo(triangle.x, triangle.y - triangle.sideLength / 2);
        ctx.lineTo(triangle.x - triangle.sideLength / 2, triangle.y + triangle.sideLength / 2);
        ctx.lineTo(triangle.x + triangle.sideLength / 2, triangle.y + triangle.sideLength / 2);
        ctx.closePath();
        ctx.strokeStyle = triangle.color;
        ctx.lineWidth = slider.value;
        ctx.stroke();

        triangle.x += triangle.speedX;
        triangle.y += triangle.speedY;

        if (triangle.x + triangle.sideLength / 2 > canvas.width || triangle.x - triangle.sideLength / 2 < 0) {
            triangle.speedX *= -1;
        }
        if (triangle.y + triangle.sideLength / 2 > canvas.height || triangle.y - triangle.sideLength / 2 < 0) {
            triangle.speedY *= -1;
        }
    }
}

function drawSquares() {
    for (const square of filledSquares) {
        ctx.beginPath();
        ctx.rect(square.x - square.sideLength / 2, square.y - square.sideLength / 2, square.sideLength, square.sideLength);
        ctx.fillStyle = square.color;
        ctx.fill();

        square.x += square.speedX;
        square.y += square.speedY;

        if (square.x + square.sideLength / 2 > canvas.width || square.x - square.sideLength / 2 < 0) {
            square.speedX *= -1;
        }
        if (square.y + square.sideLength / 2 > canvas.height || square.y - square.sideLength / 2 < 0) {
            square.speedY *= -1;
        }
    }

    for (const square of unfilledSquares) {
        ctx.beginPath();
        ctx.rect(square.x - square.sideLength / 2, square.y - square.sideLength / 2, square.sideLength, square.sideLength);
        ctx.strokeStyle = square.color;
        ctx.lineWidth = slider.value;
        ctx.stroke();

        square.x += square.speedX;
        square.y += square.speedY;

        if (square.x + square.sideLength / 2 > canvas.width || square.x - square.sideLength / 2 < 0) {
            square.speedX *= -1;
        }
        if (square.y + square.sideLength / 2 > canvas.height || square.y - square.sideLength / 2 < 0) {
            square.speedY *= -1;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircles();
    drawTriangles();
    drawSquares();
    requestAnimationFrame(animate);
}

for (let i = 0; i < numFilledCircles; i++) {
    createRandomCircle(true);
}

for (let i = 0; i < numUnfilledCircles; i++) {
    createRandomCircle(false);
}

for (let i = 0; i < numFilledTriangles; i++) {
    createRandomTriangle(true);
}

for (let i = 0; i < numUnfilledTriangles; i++) {
    createRandomTriangle(false);
}

for (let i = 0; i < numFilledSquares; i++) {
 }

for (let i = 0; i < numUnfilledSquares; i++) {
    createRandomSquare(false);
}

slider.addEventListener("input", () => {
    for (const circle of unfilledCircles) {
        circle.radius = slider.value * 10;
    }

    for (const triangle of unfilledTriangles) {
        triangle.sideLength = slider.value * 10;
    }

    for (const square of unfilledSquares) {
        square.sideLength = slider.value * 10;
    }
});

animate(); // Start the animation
