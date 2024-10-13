//
//ClickShooter
//Grace Steinmetz
//
let bullets = [];
let enemies = [];
let score = 0;
let randCol;
let myColors = ["#4f5bdb", "#66cdaa", "#00a4b2"];
let enemySpeed = 1.8;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 15; i++) {
    spawnenemy();
  }
}

function draw() {
  background(220);
  rectMode(CENTER);
  background(51);

  circle(mouseX, height - 40, 25); //player
  //color
  randCol = random(myColors.length);
  randCol = floor(randCol);
  fill(myColors[randCol]);
  noStroke();

  //drawing bullets
  for (let bullet of bullets) {
    circle(bullet.x, bullet.y, 10);
    bullet.y -= 10;
  }

  //update enemies
  for (let enemy of enemies) {
    enemySpeed += 0.0005;
    enemy.y += enemySpeed; //speed of enemy
    rect(enemy.x, enemy.y, 10);
    if (enemy.y > height) {
      text("Good game! Score is " + score, width / 2 - 55, height / 2);
      noLoop();
    }
  }
  //collisions
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        spawnenemy();
        score++;
      }
    }
  }
  text(score, 15, 25);
}
function mouseDragged() {
  spawnbullet();
}
function mousePressed() {
  spawnbullet();
}

function spawnbullet() {
  let bullet = {
    x: mouseX,
    y: height - 50,
    display: function () {
      stroke(255);
      noFill();
    },
  };
  bullets.push(bullet);
}
function spawnenemy() {
  let enemy = {
    x: random(0, width),
    y: random(-200, 0),
  };
  enemies.push(enemy);
}
