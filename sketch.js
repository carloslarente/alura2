let cor;
let cor2;
let posicaoX;
let posicaoY;

function setup() {
  createCanvas(400, 400);
  background(200);
  cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  cor2 = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  posicaoX = 200;
  posicaoY = 200;
}

function draw() {
  stroke(cor2);
  fill(cor);
  circle(posicaoX, posicaoY, 60);

  if (mouseX < posicaoX) {
    posicaoX = posicaoX - 1;
  }

  if (mouseX > posicaoX) {
    posicaoX = posicaoX + 1;
  }

  if (mouseY < posicaoY) {
    posicaoY = posicaoY - 1;
  }

  if (mouseY > posicaoY) {
    posicaoY = posicaoY + 1;
  }

  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
    cor2 = color(
      random(0, 255),
      random(0, 255),
      random(0, 255),
      random(0, 100)
    );
  }
}
