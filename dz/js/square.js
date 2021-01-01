'use strict';

function setup() {
    createCanvas (600, 600);
    background(84, 0, 117);

    var turtle = makeTurtle(width/2-50, height/2);
    turtle.setWeight(5);
    turtle.penDown();


    var turtleLineColor = color(217, 206, 11);
    turtle.setColor(turtleLineColor);

    function drawSquare (lenght) {
        for (var i=1; i <= 4; ++i) {
            turtle.forward(lenght);
            turtle.left(90);
    }
    }

    drawSquare(100);
 
   





    turtle.drawDirection();
  
    noLoop();
}