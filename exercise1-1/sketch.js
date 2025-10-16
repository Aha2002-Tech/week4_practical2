<<<<<<< HEAD
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
=======
 function setup () 
 { createCanvas (400,400) } 


 function draw ()
 { 
    background ();
    
    let x = 20;

    fill(0,0,255);
    
    while ( x<= mouseX) {
         circle(x,height/2,20) 
            
            x += 10; 
    }} 
>>>>>>> c39ad1761f183f6b0ee4f0b414fcd508e357aef0
