document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("spaceCanvas");
  const ctx = canvas.getContext("2d");

  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Define the piecewise-defined curve
  function piecewiseCurve(t, controlPoints, randomness) {
    const pieces = 5;
    const section = 1 / pieces;
    const index = Math.floor(t / section);
    const localT = (t - index * section) / section;

    function cubicBezier(p0, p1, p2, p3, t) {
      const mt = 1 - t;
      return Math.pow(mt, 3) * p0 + 3 * Math.pow(mt, 2) * t * p1 + 3 * mt * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
    }

    let position;
    switch (index) {
      case 0:
        // First piece (quadratic)
        position = {
          x: localT * canvas.width,
          y: Math.pow(localT * canvas.height, 2) / canvas.height
        };
        break;
      case 1:
        // Second piece (cubic Bezier)
        position = {
          x: cubicBezier(0, controlPoints[0], controlPoints[1], canvas.width, localT),
          y: cubicBezier(0, controlPoints[2], controlPoints[3], canvas.height, localT)
        };
        break;
      case 2:
        // Third piece (sine wave)
        position = {
          x: localT * canvas.width,
          y: (Math.sin(localT * Math.PI * 4) + 1) * canvas.height / 2
        };
        break;
      case 3:
        // Fourth piece (circle)
        const angle = localT * Math.PI * 2;
        position = {
          x: Math.cos(angle) * canvas.height / 4 + canvas.width / 2,
          y: Math.sin(angle) * canvas.height / 4 + canvas.height / 2
        };
        break;
      case 4:
        // Fifth piece (linear)
        position = {
          x: localT * canvas.width,
          y: localT * canvas.height
        };
        break;
      default:
        position = { x: 0, y: 0 };
    }

    // Add randomness to the position
    position.x += (Math.random() - 0.5) * randomness;
    position.y += (Math.random() - 0.5) * randomness;

    return position;
  }

  // Spacecraft object
  function Spacecraft(t, color) {
    this.t = t;
    this.radius = 25;
    this.color = color;
    this.exploded = false;

    this.draw = function() {
      if (this.exploded) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    this.update = function(controlPoints, randomness) {
      const position = piecewiseCurve(this.t, controlPoints, randomness);
      this.x = position.x;
      this.y = position.y;
      this.t += speed;  // Update the t value to move the spaceship
      if (this.t > 1) {
        this.t = 0;
      }
    };
  }

  // Animation variables
  const speed = 0.0005;

  // Control points for the cubic Bezier curve
  const controlPoints = [canvas.width / 4, 3 * canvas.width / 4, 3 * canvas.height / 4, canvas.height / 4];

  // Create sliders for control points
  const sliders = [];
  for (let i = 0; i < 4; i++) {
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "0";
    slider.max = i % 2 === 0 ? canvas.width : canvas.height;
    slider.value = controlPoints[i];
    slider.style.position = "absolute";
    slider.style.left = "10px";
    slider.style.top = 10 + i * 30 + "px";
    document.body.appendChild(slider);
    sliders.push(slider);
  }

  // Create slider for randomness
  const randomnessSlider = document.createElement("input");
  randomnessSlider.type = "range";
  randomnessSlider.min = "0";
  randomnessSlider.max = "100";
  randomnessSlider.value = "0";
  randomnessSlider.style.position = "absolute";
  randomnessSlider.style.left = "10px";
  randomnessSlider.style.top = "130px";
  document.body.appendChild(randomnessSlider);

  // Create multiple spaceships
  const spacecrafts = [];
  for (let i = 0; i < 10; i++) {
    spacecrafts.push(new Spacecraft(i / 10, `hsl(${i * 36}, 100%, 50%)`));
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw stars
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 2;
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Update control points from sliders
    for (let i = 0; i < sliders.length; i++) {
      controlPoints[i] = parseFloat(sliders[i].value);
    }

    // Get randomness from slider
    const randomness = parseFloat(randomnessSlider.value);

    // Draw the path
    ctx.globalAlpha = 0.5;  // Set transparency for the path
    ctx.strokeStyle = "grey";
    ctx.beginPath();
    for (let t = 0; t <= 1; t += 0.01) {
      const position = piecewiseCurve(t, controlPoints, 0);  // No randomness for the path
      if (t === 0) {
        ctx.moveTo(position.x, position.y);
      } else {
        ctx.lineTo(position.x, position.y);
      }
    }
    ctx.stroke();
    ctx.globalAlpha = 1;  // Reset transparency

    // Update and draw spaceships
    for (let i = 0; i < spacecrafts.length; i++) {
      spacecrafts[i].update(controlPoints, randomness);
      spacecrafts[i].draw();
    }

    // Check for collisions
    for (let i = 0; i < spacecrafts.length; i++) {
      for (let j = i + 1; j < spacecrafts.length; j++) {
        const dx = spacecrafts[i].x - spacecrafts[j].x;
        const dy = spacecrafts[i].y - spacecrafts[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < (spacecrafts[i].radius + spacecrafts[j].radius)) {
          spacecrafts[i].exploded = !spacecrafts[i].exploded;
          spacecrafts[j].exploded = !spacecrafts[j].exploded;
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
});
