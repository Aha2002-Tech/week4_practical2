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