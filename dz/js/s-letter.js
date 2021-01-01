'use strict';

function setup() {
    createCanvas (600, 600);
    background(84, 0, 117);

    var turtle = makeTurtle(width/2-50, height/2);
    turtle.setWeight(5);
    turtle.penDown();


    var turtleLineColor = color(217, 206, 11);
    turtle.setColor(turtleLineColor);

function drawDown (lenght) {
    for (var i=1; i <= 3; ++i) {
        turtle.forward(lenght);
        turtle.left(90);  
         
    }
}

function drawUp (lenght) {
    for(var j=1; j <=2; ++j) {
        turtle.forward(lenght);
        turtle.right(90);
    }
}
    
    drawDown(100)
    turtle.right(180)
    drawUp(100)
    turtle.left(90)


    // for (var i=1; i <= 2; ++i) {
    //     turtle.forward(100);
    //     turtle.right(90);  
    // }


    // turtle.forward(100);
    // turtle.left(90);
    // turtle.forward(100);
    // turtle.left(90);
    // turtle.forward(100);
    // turtle.right(90);
    // turtle.forward(100);
    // turtle.right(90);
    // turtle.forward(100);




    turtle.drawDirection();
  
    noLoop();
}