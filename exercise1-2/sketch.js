<<<<<<< HEAD
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
=======
function setup () 
 { createCanvas (400,400) } 

 function draw ()
 { 
    background (255);
    let x =20;
    let y =20 
    fill(0,0,255);
    while ( x<= mouseX) {
         circle(x,height/2,20)
         
            x += 10; 
    }

     fill (255)
    while ( x<= width) {
         circle(x,height/2,20)
         
            x += 10; 
    }} 
        



  

    
>>>>>>> c39ad1761f183f6b0ee4f0b414fcd508e357aef0
