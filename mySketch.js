let helmet, myShader;
let rotX = (targetX = -0.4);
let rotY = (targetY = -2.5);
let ease = 0.1;

function preload() {
  helmet = loadModel("helmet.obj", true);
}

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();
  myShader = createShader(vertSrc, fragSrc);
  shader(myShader);
  let gl = this._renderer.GL;
  let program = myShader._glProgram;
}

function draw() {
  clear();
  shader(myShader);

  myShader.setUniform("uResolution", [width, height]);
  myShader.setUniform("uLightPos", [1.0, 1.0, 2.0]);
  myShader.setUniform("uLightDir", [0, 0, -1]);
  myShader.setUniform("uCutoff", cos(radians(20)));
  myShader.setUniform("uAmbient", 0.1);
  myShader.setUniform("uBaseColor", [1, 1, 1]);
  myShader.setUniform("uScale", 0.25);

  rotateX(PI);
  rotX += (targetX - rotX) * ease;
  rotY += (targetY - rotY) * ease;
  rotateX(rotX);
  rotateY(rotY);
  scale(2);
  model(helmet);
}

function mouseDragged() {
  targetY -= (mouseX - pmouseX) * 0.015;
  targetX -= (mouseY - pmouseY) * 0.015;
}
