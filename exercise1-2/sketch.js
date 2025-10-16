function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  noStroke();

  // Blue circles (top row)
  fill(0, 0, 255);
  let x = 0;
  while (x <= mouseX) {
    circle(x, height / 3, 20);
    x += 20;
  }

  // White circles 
  fill(255);
  let y = 0;
  while (y <= mouseX) {
    circle(y, (2 * height) / 3, 20);
    y += 20;
  }
}
