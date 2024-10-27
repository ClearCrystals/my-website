window.onload = function() {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    const slider1 = document.getElementById('slider1');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    
    const comet = {
        position: vec2.fromValues(-50, Math.random() * canvas.height),
        speed: 3,
        tailLength: 200,
        angle: Math.random() * 2 * Math.PI, // direction of the comet
        isVisible: true
    };

    function drawStars() {
    const starCount = 50;
    context.fillStyle = "white";
    for (let i = 0; i < starCount; i++) {
        let clusterCenter = [Math.random() * canvas.width, Math.random() * canvas.height];
        let offsetX = (Math.random() - 0.5) * 40;
        let offsetY = (Math.random() - 0.5) * 40; 
        context.beginPath();
        context.arc(clusterCenter[0] + offsetX, clusterCenter[1] + offsetY, Math.random() * 2, 0, 2 * Math.PI);
        context.fill();
        }
    }

    function drawRing(position) {
        context.strokeStyle = "#EEDC82";
        context.beginPath();
        context.arc(position[0], position[1], 25, 0, 2 * Math.PI);
        context.stroke();
    }
    
    function resetComet() {
        comet.position = vec2.fromValues(Math.random() * canvas.width, -50); 
        comet.angle = Math.PI * 0.5 + (Math.random() - 0.5) * Math.PI * 0.2; 
        comet.isVisible = true;
    }

    function drawComet() {
        comet.position[0] += comet.speed * Math.cos(comet.angle);
        comet.position[1] += comet.speed * Math.sin(comet.angle);

        const tailStart = vec2.fromValues(
            comet.position[0] - comet.tailLength * Math.cos(comet.angle),
            comet.position[1] - comet.tailLength * Math.sin(comet.angle)
        );

        const gradient = context.createLinearGradient(
            comet.position[0], comet.position[1],
            tailStart[0], tailStart[1]
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");  
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");  

        context.strokeStyle = gradient;
        context.lineWidth = 5;

        context.beginPath();
        context.moveTo(comet.position[0], comet.position[1]);
        context.lineTo(tailStart[0], tailStart[1]);
        context.stroke();

        // Reset comet if out of screen:
        if (comet.position[0]+1000 < 0 || comet.position[0] > canvas.width +1000 || comet.position[1] < 0 || comet.position[1] > canvas.height+1000) {
            comet.position = vec2.fromValues(Math.random() * canvas.width, Math.random() * canvas.height);
            comet.angle = Math.random() * 2 * Math.PI;
        }
    }

    function drawSunFlare(position) {
        const gradient = context.createRadialGradient(position[0], position[1], 60, position[0], position[1], 120);
        gradient.addColorStop(0, "rgba(255,221,0,0.2)");
        gradient.addColorStop(1, "rgba(255,221,0,0)");
        context.fillStyle = gradient;
        context.beginPath();
        context.arc(position[0], position[1], 120, 0, 2 * Math.PI);
        context.fill();
    }
    
    const ovalPlanet = {
        distanceX: 350,
        distanceY: 250,
        angle: 0
    };
    function drawOvalPlanet() {
        ovalPlanet.angle += 0.004;

        let position = vec2.fromValues(
            ovalPlanet.distanceX * Math.sin(ovalPlanet.angle),
            ovalPlanet.distanceY * Math.cos(ovalPlanet.angle)
        );
        vec2.add(position, position, vec2.fromValues(canvas.width / 2, canvas.height / 2));

        context.fillStyle = "#A0522D";  // Sienna color for the oval planet
        context.beginPath();
        context.arc(position[0], position[1], 25, 0, 2 * Math.PI);
        context.fill();
    }

    
    function draw() {
        canvas.width = canvas.width;
        
        drawStars();
        drawComet();

        const sunPosition = vec2.fromValues(canvas.width / 2, canvas.height / 2);
        context.fillStyle = "#FFDD00";
        context.beginPath();
        context.arc(sunPosition[0], sunPosition[1], 70, 0, 2 * Math.PI);
        context.fill();

        const earthAngle = time * 0.005;
        const earthPosition = vec2.transformMat2(vec2.create(), vec2.fromValues(300, 0), mat2.fromRotation(mat2.create(), earthAngle));
        vec2.add(earthPosition, earthPosition, sunPosition);

        context.fillStyle = "blue";
        context.beginPath();
        context.arc(earthPosition[0], earthPosition[1], 25, 0, 2 * Math.PI);
        context.fill();

        const moonPosition = vec2.transformMat2(vec2.create(), vec2.fromValues(60, 0), mat2.fromRotation(mat2.create(), -earthAngle * 2));
        vec2.add(moonPosition, moonPosition, earthPosition);

        context.fillStyle = "grey";
        context.beginPath();
        context.arc(moonPosition[0], moonPosition[1], 10, 0, 2 * Math.PI);
        context.fill();

        const marsAngle = time * 0.003;
        const marsPosition = vec2.transformMat2(vec2.create(), vec2.fromValues(500, 0), mat2.fromRotation(mat2.create(), marsAngle));
        vec2.add(marsPosition, marsPosition, sunPosition);

        context.fillStyle = "red";
        context.beginPath();
        context.arc(marsPosition[0], marsPosition[1], 20, 0, 2 * Math.PI);
        context.fill();

        const xanarAngle = time * 0.007;
        const eccentricity = (slider1.value / 100.0) * 2.0; // Using the slider to modify eccentricity
        const xanarDistance = 400 + eccentricity * 150 * Math.sin(xanarAngle * 2);
        const xanarPosition = vec2.transformMat2(vec2.create(), vec2.fromValues(xanarDistance, 0), mat2.fromRotation(mat2.create(), xanarAngle));
        vec2.add(xanarPosition, xanarPosition, sunPosition);

        context.fillStyle = "#8A2BE2"; 
        context.beginPath();
        context.arc(xanarPosition[0], xanarPosition[1], 18, 0, 2 * Math.PI);
        context.fill();
        
        const nebulaAngle = time * 0.004;
        const nebulaEccentricity = 1.5; 
        const nebulaMajorAxis = 600;
        const nebulaMinorAxis = nebulaMajorAxis * nebulaEccentricity;
        const nebulaPosition = vec2.fromValues(
            nebulaMajorAxis * Math.sin(nebulaAngle),
            nebulaMinorAxis * Math.cos(nebulaAngle)
        );
        vec2.add(nebulaPosition, nebulaPosition, sunPosition);

        context.fillStyle = "#8A4BE2"; 
        context.beginPath();
        context.arc(nebulaPosition[0], nebulaPosition[1], 30, 0, 2 * Math.PI);
        context.fill();

        // Moons for Nebula with elliptical orbits
        const moon1Angle = time * 0.009;
        const moon1Position = vec2.fromValues(
            100 * Math.sin(moon1Angle),
            60 * Math.cos(moon1Angle)
        );
        vec2.add(moon1Position, moon1Position, nebulaPosition);

        context.fillStyle = "#AAA"; 
        context.beginPath();
        context.arc(moon1Position[0], moon1Position[1], 12, 0, 2 * Math.PI);
        context.fill();

        const moon2Angle = time * 0.012;
        const moon2Position = vec2.fromValues(
            80 * Math.sin(moon2Angle),
            50 * Math.cos(moon2Angle)
        );
        vec2.add(moon2Position, moon2Position, nebulaPosition);

        context.fillStyle = "#888"; 
        context.beginPath();
        context.arc(moon2Position[0], moon2Position[1], 10, 0, 2 * Math.PI);
        context.fill();

        // Planet Astra
        const astraDistance = 180;
        const astraAngle = (time * 0.008 + Math.sin(time * 0.003) * 0.5) % (2 * Math.PI);
        const astraPosition = vec2.fromValues(
            astraDistance * Math.sin(astraAngle),
            astraDistance * Math.cos(astraAngle)
        );
        vec2.add(astraPosition, astraPosition, sunPosition);

        context.fillStyle = "#FF6347"; // Tomato color for Astra
        context.beginPath();
        context.arc(astraPosition[0], astraPosition[1], 20, 0, 2 * Math.PI);
        context.fill();

        // Moon for Astra
        const astraMoonAngle = (time * 0.03 + Math.cos(time * 0.007) * 2) % (2 * Math.PI);
        const astraMoonPosition = vec2.fromValues(
            45 * Math.sin(astraMoonAngle),
            30 * Math.cos(astraMoonAngle)
        );
        vec2.add(astraMoonPosition, astraMoonPosition, astraPosition);

        context.fillStyle = "#BC8F8F"; 
        context.beginPath();
        context.arc(astraMoonPosition[0], astraMoonPosition[1], 7, 0, 2 * Math.PI);
        context.fill();

        // Planet Orbitar
        const orbitarDistance = 130;
        const orbitarAngle = (time * 0.009 - Math.cos(time * 0.0025) * 0.6) % (2 * Math.PI);
        const orbitarPosition = vec2.fromValues(
            orbitarDistance * Math.sin(orbitarAngle),
            orbitarDistance * Math.cos(orbitarAngle)
        );
        vec2.add(orbitarPosition, orbitarPosition, sunPosition);

        context.fillStyle = "#4682B4"; // Steel blue for Orbitar
        context.beginPath();
        context.arc(orbitarPosition[0], orbitarPosition[1], 18, 0, 2 * Math.PI);
        context.fill();

        // Three moons for Orbitar with wacky orbits
        const drawOrbitarMoon = (dist, angleMod, size, color) => {
            const moonAngle = (time * angleMod + Math.sin(time * 0.004 * angleMod) * 1.8) % (2 * Math.PI);
            const moonPosition = vec2.fromValues(
                dist * Math.sin(moonAngle),
                dist * Math.cos(moonAngle)
            );
            vec2.add(moonPosition, moonPosition, orbitarPosition);

            context.fillStyle = color;
            context.beginPath();
            context.arc(moonPosition[0], moonPosition[1], size, 0, 2 * Math.PI);
            context.fill();
        };
        
        drawOrbitarMoon(40, 0.03, 5, "#D2B48C"); // Tan color
        drawOrbitarMoon(28, 0.04, 4, "#8B4513"); // Saddle brown
        drawOrbitarMoon(55, 0.025, 6, "#DEB887"); // Burly wood color
        
        drawSunFlare(sunPosition);
        drawRing(xanarPosition);
        drawOvalPlanet();
        
        time += 0.8;
        requestAnimationFrame(draw);
    }

    slider1.addEventListener("input", draw);
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw();
    });
    draw();
}
