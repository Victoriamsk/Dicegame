'use strict';

function setup() {
    createCanvas (600, 600);
    background(84, 0, 117);

    var turtle = makeTurtle(width/2-50, height/2);
    turtle.setWeight(3);
    turtle.penDown();


    var turtleLineColor = color(217, 206, 11);
    turtle.setColor(turtleLineColor);


// turtle.forward(40);
// turtle.left(90);

// turtle.forward(40);
// turtle.left(90);

// turtle.forward(40);
// turtle.left(90);

// turtle.forward(40);
// turtle.left(90); 

var padding = 10;

function fewSquare(lenght) {
    for ( var i = 0; i < 4; ++i) {
        turtle.forward(lenght);
        turtle.left(90);
}
}

fewSquare(20)
turtle.penUp()
turtle.backward(padding)
turtle.right(90);
turtle.forward(padding);
turtle.left(90);
turtle.penDown();
fewSquare(40);


//   for (var j=0; j <= squareCount; ++1) {
//         var sideLen = 50;
//         for (var i=1; i <= 4; ++i) {
//     drawSquare(sideLen);
//     sideLen = sideLen + 10;
// }
//   }
 
   





    turtle.drawDirection();
  
    noLoop();
}