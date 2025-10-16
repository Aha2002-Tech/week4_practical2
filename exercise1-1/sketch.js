function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  fill(0, 0, 255);
  noStroke();

  let x = 0;
  while (x <= mouseX) {
    circle(x, height / 2, 20);
    x += 20;
  }
}
