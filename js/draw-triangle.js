'use strict';

/*
  Задание 3.
  Измените код так, чтобы отобразился 5-и угольник, вместо треугольника
*/

function setup() {
    // создаем холст 400x400 пикселей
    createCanvas(400, 400);
    // задаем цвет фона
    background(0);
    
    var turtle = makeTurtle(width/2-50, height/2);
    // установить размер пера
    turtle.setWeight(5);
    // опустить перо
    turtle.penDown();

    // установим цвет линии
    var turtleLineColor = color(255, 204, 0);
    // установить цвет линии
    turtle.setColor(turtleLineColor);
    
    function drawPolygon(angles, sideLen) {
      for (var i=0; i <= angles; ++i) {
        turtle.forward(sideLen);
        turtle.left(360 / angles);
      }
    }

    drawPolygon (10, 50)
    drawPolygon (10, 60)
    drawPolygon (10, 70)


//var angles = 3;
//var sideLen = 30;

   
 
    


    // код ниже не трогаем
    // показать направление черепашки
    turtle.drawDirection();
    // нужно для остановки цикла перерисовки p5js
    noLoop();
}