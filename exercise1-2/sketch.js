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
        



  

    