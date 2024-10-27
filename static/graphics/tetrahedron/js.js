
function start() {

  var gl = initializeWebGLContext();
  var shaderProgram = initializeShaders(gl);
  setupAttributesAndUniforms(gl, shaderProgram);
  //var buffers = initializeBuffers(gl);
  //   var textures = initializeTextures(gl, 6);
  //   setupEventListeners(gl, shaderProgram, buffers, textures);

    // Sliders at center
    var slider1 = document.getElementById('slider1');
    slider1.value = 0;
    var slider2 = document.getElementById('slider2');
    slider2.value = 0;

    
    // vector position.
    var vertexPos = new Float32Array([
      1, 1, 1,  // Vertex 0
     -1,-1, 1,  // Vertex 1
     -1, 1,-1,  // Vertex 2
      1,-1,-1   // Vertex 3
  ]);

    // vertex normals
    var vertexNormals = new Float32Array(
        [  0, 0, 1,   0, 0, 1,   0, 0, 1,   0, 0, 1, 
           1, 0, 0,   1, 0, 0,   1, 0, 0,   1, 0, 0, 
           0, 1, 0,   0, 1, 0,   0, 1, 0,   0, 1, 0, 
          -1, 0, 0,  -1, 0, 0,  1, 0, 0,  -1, 0, 0, 
           0,-1, 0,   0,-1, 0,   0,-1, 0,   0,-1, 0, 
           0, 0,-1,   0, 0,-1,   0, 0,-1,   0, 0,-1  ]);

    // vertex colors
    var vertexColors = new Float32Array([
      1.0, 0.0, 0.0, // Red
      0.0, 1.0, 0.0, // Green
      0.0, 0.0, 1.0, // Blue
      1.0, 1.0, 0.0  // Yellow
    ]);
    
    // vertex texture coordinates
    var vertexTextureCoords = new Float32Array([
      // Face 1
      0.5, 1.0,  // Top middle of the texture
      0.0, 0.5,  // Bottom left of the texture
      1.0, 0.5,  // Bottom right of the texture
      
      // Face 2
      0.5, 1.0,  // Top middle of the texture
      0.0, 0.5,  // Bottom left of the texture
      1.0, 0.5,  // Bottom right of the texture
  
      // Face 3
      0.5, 1.0,  // Top middle of the texture
      0.0, 0.5,  // Bottom left of the texture
      1.0, 0.5,  // Bottom right of the texture
  
      // Face 4
      0.5, 1.0,  // Top middle of the texture
      0.0, 0.5,  // Bottom left of the texture
      1.0, 0.5,  // Bottom right of the texture
  ]);

    // element index array
    var triangleIndices = new Uint8Array([
      0, 1, 2,  // Face 1
      0, 2, 3,  // Face 2
      0, 3, 1,  // Face 3
      1, 3, 2   // Face 4
  ]);

    // we need to put the vertices into a buffer so we can
    // block transfer them to the graphics hardware
    var trianglePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, trianglePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexPos, gl.STATIC_DRAW);
    trianglePosBuffer.itemSize = 3;
    trianglePosBuffer.numItems = 24;
    
    // a buffer for normals
    var triangleNormalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleNormalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexNormals, gl.STATIC_DRAW);
    triangleNormalBuffer.itemSize = 3;
    triangleNormalBuffer.numItems = 24;
    
    // a buffer for colors
    var colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexColors, gl.STATIC_DRAW);
    colorBuffer.itemSize = 3;
    colorBuffer.numItems = 24;

    // a buffer for textures
    var textureBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexTextureCoords, gl.STATIC_DRAW);
    textureBuffer.itemSize = 2;
    textureBuffer.numItems = 24;

    // a buffer for indices
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, triangleIndices, gl.STATIC_DRAW);    

    var textures = [];
    var images = [];
    var loadedImages = 0;

    function initTextureThenDraw() {
      for (var i = 0; i < 4; i++) {
          textures[i] = gl.createTexture();
          gl.activeTexture(gl.TEXTURE0 + i);
          gl.bindTexture(gl.TEXTURE_2D, textures[i]);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));
  
          var imageElement = document.getElementById('image' + (i + 1));
          loadTexture(imageElement, textures[i]);
      }
    }

    function loadTexture(image, texture) {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

      loadedImages++;
      if (loadedImages === 4) {
        draw(); // Draw only after all images are loaded
      }
  }

    // Scene (re-)draw routine
    function draw() {
    
        // Translate slider values to angles in the [-pi,pi] interval
        var angle1 = slider1.value*0.01*Math.PI;
        var angle2 = slider2.value*0.01*Math.PI;
    
        // Circle around the y-axis
        var eye = [400*Math.sin(angle1),150.0,400.0*Math.cos(angle1)];
        var target = [0,0,0];
        var up = [0,1,0];
    
        var tModel = mat4.create();
        mat4.fromScaling(tModel,[100,100,100]);
        //mat4.translate(tModel, tModel, [-1, 0, 0]); // Adjust the -200 value as needed

        mat4.rotate(tModel,tModel,angle2,[1,1,1]);
      
        var tCamera = mat4.create();
        mat4.lookAt(tCamera, eye, target, up);      

        var tProjection = mat4.create();
        mat4.perspective(tProjection,Math.PI/4,1,10,1000);
      
        var tMV = mat4.create();
        var tMVn = mat3.create();
        var tMVP = mat4.create();
        mat4.multiply(tMV,tCamera,tModel); // "modelView" matrix
        mat3.normalFromMat4(tMVn,tMV);
        mat4.multiply(tMVP,tProjection,tMV);
      
        // Clear screen, prepare for rendering
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.enable(gl.DEPTH_TEST);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    
        // Set up uniforms & attributes (common setup)
        gl.uniformMatrix4fv(shaderProgram.MVmatrix, false, tMV);
        gl.uniformMatrix3fv(shaderProgram.MVNormalmatrix, false, tMVn);
        gl.uniformMatrix4fv(shaderProgram.MVPmatrix, false, tMVP);

        gl.bindBuffer(gl.ARRAY_BUFFER, trianglePosBuffer);
        gl.vertexAttribPointer(shaderProgram.PositionAttribute, trianglePosBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, triangleNormalBuffer);
        gl.vertexAttribPointer(shaderProgram.NormalAttribute, triangleNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
        gl.vertexAttribPointer(shaderProgram.ColorAttribute, colorBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer);
        gl.vertexAttribPointer(shaderProgram.texcoordAttribute, textureBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

        // Draw each face with its corresponding texture
        for (var face = 0; face < 4; face++) {
          gl.activeTexture(gl.TEXTURE0 + face);
          gl.bindTexture(gl.TEXTURE_2D, textures[face]);
          gl.uniform1i(gl.getUniformLocation(shaderProgram, "texSampler"), face);

          // Draw the face (3 vertices per face)
          gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_BYTE, face * 3);
      }
    }

      Promise.all(images.map(img => new Promise((resolve) => {
        if (img.complete) {
            resolve();
        } else {
            img.onload = resolve;
        }
    }))).then(() => {
        draw(); // Initial draw
    });
    // document.getElementById('randomizeButton').addEventListener('click', randomizeSliders);

  slider1.addEventListener("input", draw);
  slider2.addEventListener("input", draw);

  slider1.addEventListener("input",draw);
  slider2.addEventListener("input",draw);
  initTextureThenDraw();
}

function initializeWebGLContext() {
  var canvas = document.getElementById("mycanvas");
  return canvas.getContext("webgl");
}

function initializeShaders(gl) {
  // Retrieve shader source
  var vertexSource = document.getElementById("vertexShader").text;
  var fragmentSource = document.getElementById("fragmentShader").text;

  // Create and compile vertex shader
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexSource);
  gl.compileShader(vertexShader);
  if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      alert("Vertex Shader Error: " + gl.getShaderInfoLog(vertexShader));
      return null;
  }

  // Create and compile fragment shader
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentSource);
  gl.compileShader(fragmentShader);
  if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      alert("Fragment Shader Error: " + gl.getShaderInfoLog(fragmentShader));
      return null;
  }

  // Create a shader program and attach the shaders to it
  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  // Link the shader program
  gl.linkProgram(shaderProgram);
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      alert("Shader Program Linking Error: " + gl.getProgramInfoLog(shaderProgram));
      return null;
  }

  // Use the linked shader program
  gl.useProgram(shaderProgram);

  // Return the shader program
  return shaderProgram;
}

function setupAttributesAndUniforms(gl, shaderProgram) {
  // Set up attributes
  shaderProgram.PositionAttribute = gl.getAttribLocation(shaderProgram, "vPosition");
  gl.enableVertexAttribArray(shaderProgram.PositionAttribute);

  shaderProgram.NormalAttribute = gl.getAttribLocation(shaderProgram, "vNormal");
  gl.enableVertexAttribArray(shaderProgram.NormalAttribute);

  shaderProgram.ColorAttribute = gl.getAttribLocation(shaderProgram, "vColor");
  gl.enableVertexAttribArray(shaderProgram.ColorAttribute);

  shaderProgram.texcoordAttribute = gl.getAttribLocation(shaderProgram, "vTexCoord");
  gl.enableVertexAttribArray(shaderProgram.texcoordAttribute);

  // Set up uniforms
  shaderProgram.MVmatrix = gl.getUniformLocation(shaderProgram, "uMV");
  shaderProgram.MVNormalmatrix = gl.getUniformLocation(shaderProgram, "uMVn");
  shaderProgram.MVPmatrix = gl.getUniformLocation(shaderProgram, "uMVP");

  // Attach samplers to texture units
  shaderProgram.texSamplerFront = gl.getUniformLocation(shaderProgram, "texSamplerFront");
  gl.uniform1i(shaderProgram.texSamplerFront, 0);

  shaderProgram.texSamplerBack = gl.getUniformLocation(shaderProgram, "texSamplerBack");
  gl.uniform1i(shaderProgram.texSamplerBack, 1);

  shaderProgram.texSamplerLeft = gl.getUniformLocation(shaderProgram, "texSamplerLeft");
  gl.uniform1i(shaderProgram.texSamplerLeft, 2);

  shaderProgram.texSamplerRight = gl.getUniformLocation(shaderProgram, "texSamplerRight");
  gl.uniform1i(shaderProgram.texSamplerRight, 3);

  shaderProgram.texSamplerTop = gl.getUniformLocation(shaderProgram, "texSamplerTop");
  gl.uniform1i(shaderProgram.texSamplerTop, 4);

  shaderProgram.texSamplerBottom = gl.getUniformLocation(shaderProgram, "texSamplerBottom");
  gl.uniform1i(shaderProgram.texSamplerBottom, 5);
}



function randomizeSliders() {
  var slider1 = document.getElementById('slider1');
  var slider2 = document.getElementById('slider2');

  // Calculate new random values for each slider
  var newSlider1Value = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);
  var newSlider2Value = Math.floor(Math.random() * (100 - (-100) + 1)) + (-100);

  // Animation parameters
  var animationDuration = 1000; // in milliseconds
  var steps = 20; // number of steps in the animation
  var stepDuration = animationDuration / steps;
  var step1Increment = (newSlider1Value - slider1.value) / steps;
  var step2Increment = (newSlider2Value - slider2.value) / steps;

  var currentStep = 0;
  var intervalId = setInterval(function() {
      // Update the slider values
      slider1.value = parseInt(slider1.value) + step1Increment;
      slider2.value = parseInt(slider2.value) + step2Increment;
      
      // Update the scene with the new slider values
      draw(gl, shaderProgram, trianglePosBuffer, triangleNormalBuffer, colorBuffer, textureBuffer, indexBuffer, textures, slider1, slider2);

      currentStep++;
      if (currentStep >= steps) {
          clearInterval(intervalId); // Stop the animation after reaching the final step
      }
  }, stepDuration);
}




window.onload=start;
