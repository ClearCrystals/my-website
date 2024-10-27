const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const starsContainer = document.querySelector('.stars');

const stars = [];

for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${Math.random() * 6 + 3}s`; // Slower spinning speed
    starsContainer.appendChild(star);

    const spinDirection = Math.random() > 0.5 ? 1 : -1; // Randomize spin direction
    const vx = (Math.random() - 0.5) * 0.1; // Horizontal velocity
    const vy = (Math.random() - 0.5) * 0.1; // Vertical velocity

    stars.push({
        element: star,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: vx,
        vy: vy,
        spinDirection: spinDirection,
    });
}

function moveStars() {
    stars.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x > canvas.width) {
            star.x = 0;
        } else if (star.x < 0) {
            star.x = canvas.width;
        }

        if (star.y > canvas.height) {
            star.y = 0;
        } else if (star.y < 0) {
            star.y = canvas.height;
        }

        // Apply spinning effect
        star.element.style.transform = `translate(${star.x}px, ${star.y}px) rotate(${star.spinDirection * 10 * Math.sqrt(star.vx ** 2 + star.vy ** 2)}deg)`;
    });

    requestAnimationFrame(moveStars);
}

moveStars();








const buildingCount = 8;
const buildings = [];

for (let i = 0; i < buildingCount; i++) {
    const x = i * 150 + Math.random() * 50;
    const width = 80 + Math.random() * 50;
    const height = 202 + Math.random() * 150;
    const hasDoor = Math.random() > 0.5;
    buildings.push({ x, width, height, hasDoor });
}

const windowPositions = [];

for (let i = 0; i < buildingCount; i++) {
    const windowCount = Math.floor(Math.random() * 5) + 1;
    const windows = [];
    for (let j = 0; j < windowCount; j++) {
        const windowX = buildings[i].x + 10 + Math.random() * (buildings[i].width - 30);
        const windowY = canvas.height - buildings[i].height + 10 + Math.random() * (buildings[i].height - 30);
        windows.push({ x: windowX, y: windowY });
    }
    windowPositions.push(windows);
}

const elevatorShaftWidth = 40;
const elevatorCabWidth = 30;
const elevatorCabHeight = 20;

const elevator1Slider = document.getElementById('elevator1Slider');
const elevator2Slider = document.getElementById('elevator2Slider');



function drawBuilding(x, width, height, hasDoor, elevatorHeight, windows) {
    // Draw building
    ctx.fillStyle = '#555';
    ctx.fillRect(x, canvas.height - height, width, height);

    // Draw elevator shafts (static)
    ctx.fillStyle = '#777';
    ctx.fillRect(x + width - elevatorShaftWidth, canvas.height - height, elevatorShaftWidth, height);

    // Draw windows
    ctx.fillStyle = '#ADD8E6';
    windows.forEach(window => {
        ctx.fillRect(window.x, window.y, 20, 20);
    });

    // Draw door if the building has one
    if (hasDoor) {
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(x + width / 2 - 15, canvas.height - 40, 30, 40);
    }

    // Draw moving elevator cabins
    
    // Ensure the elevator touches the bottom and top of the building
    elevatorHeight = Math.max(0, Math.min(elevatorHeight, height  - elevatorCabHeight));

    ctx.fillStyle = '#FFD700'; // Elevator cabin color
    ctx.fillRect(x + width - elevatorShaftWidth + (elevatorShaftWidth - elevatorCabWidth) ,
                 canvas.height - height +5+ elevatorHeight,
                 elevatorCabWidth-6, elevatorCabHeight );
    
}



const sunSliderX = document.getElementById('sunSliderX');
const sunSliderY = document.getElementById('sunSliderY');

function Planet(x, y, orbitWidth, orbitHeight, speed, size, color) {
    this.x = x;
    this.y = y;
    this.orbitWidth = orbitWidth;
    this.orbitHeight = orbitHeight;
    this.speed = speed;
    this.size = size;
    this.color = color;
    this.angle = Math.random() * Math.PI * 2;
    this.childPlanets = []; // Planets revolving around this planet
}

Planet.prototype.addChildPlanet = function(childPlanet) {
    this.childPlanets.push(childPlanet);
};

Planet.prototype.draw = function() {
    ctx.beginPath();
    const ovalX = Math.cos(this.angle) * this.orbitWidth;
    const ovalY = Math.sin(this.angle) * this.orbitHeight;
    ctx.arc(this.x + ovalX, this.y + ovalY, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

    // Draw child planets
    this.childPlanets.forEach(childPlanet => {
        childPlanet.x = this.x + ovalX;
        childPlanet.y = this.y + ovalY;
        childPlanet.draw();
    });
};

Planet.prototype.update = function() {
    this.angle += this.speed;

    // Update child planets
    this.childPlanets.forEach(childPlanet => {
        childPlanet.update();
    });
};

const sun = new Planet(canvas.width / 2, canvas.height / 2, 0, 0, 0, 40, 'yellow');
const earth = new Planet(0, 0, 300, 200, 0.01, 15, 'blue');
const moon = new Planet(0, 0, 50, 40, 0.03, 5, 'gray');

sun.addChildPlanet(earth);
earth.addChildPlanet(moon);


function drawScene() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw buildings
//    buildings.forEach((building, index) => {
//        const elevatorHeight = index === 1 ? elevator1Slider.value : (index === 3 ? elevator2Slider.value : undefined);
//        drawBuilding(building.x, building.width, building.height, building.hasDoor, elevatorHeight, windowPositions[index]);
//    });

    sun.draw();
    sun.update();

    requestAnimationFrame(drawScene);
}
sunSliderX.addEventListener('input', drawScene);
//sunSliderY.addEventListener('input', drawScene);


// Start the animation
drawScene();
