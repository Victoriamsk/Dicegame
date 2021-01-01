'use strict';

function setup() {
    createCanvas (600, 600);
    background(84, 0, 117);

    var turtle = makeTurtle(width/2-50, height/2);
    turtle.setWeight(5);
    turtle.penDown();


    var turtleLineColor = color(217, 206, 11);
    turtle.setColor(turtleLineColor);

    function drawSquare (angles, sideLen) {
        for (var i=0; i <= angles; ++i) {
            turtle.forward(sideLen);
            turtle.left(360 / angles);
    }
    }

    drawSquare(30, 10);
    
 
   





    turtle.drawDirection();
  
    noLoop();
}