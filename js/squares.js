'use strict';

/*
  Задание 4.
  1. Замените вывод 3-х квадратов при помощи цикла for
  2. Отобразите при помощи цикла for 6 квадратов
  3. Сделайте каждый квадрат разного цвета
*/

function setup() {
    // создаем холст 400x400 пикселей
    createCanvas(400, 400);
    // задаем цвет фона
    background(0);
    
    var turtle = makeTurtle(width/2, height/2);
    // установить размер пера
    turtle.setWeight(5);
    // опустить перо
    turtle.penDown();

    // установим цвет линии
    var turtleLineColor = color(255, 204, 0);
    // установить цвет линии
    turtle.setColor(turtleLineColor);

    function drawSquare (lenght) {
      for (var i=1; i <= 4; ++i) {
        turtle.forward(lenght)
        turtle.right(90)
        }
    }

    for (var j = 0; j <= 4; ++j) {
      turtle.left(30)
      drawSquare(40)
        }

    
    

    
    

    
    // turtle.left(30)
    // turtle.forward(50)
    // turtle.left(90)
    // turtle.forward(50)
    // turtle.left(90)
    // turtle.forward(50)
    // turtle.left(90)
    // turtle.forward(50)
    // turtle.left(90)

    // turtle.left(30)
    // turtle.forward(50)
    // turtle.left(90)
    // turtle.forward(50)
    // turtle.left(90)
    // turtle.forward(50)
    // turtle.left(90)
    // turtle.forward(50)
    // turtle.left(90)

    // turtle.left(30)
    // turtle.forward(50)
    // turtle.left(90)
    // turtle.forward(50)
    // turtle.left(90)
    // turtle.forward(50)
    // turtle.left(90)
    // turtle.forward(50)
    // turtle.left(90)

    // код ниже не трогаем
    // показать направление черепашки
    turtle.drawDirection();
    // нужно для остановки цикла перерисовки p5js
    noLoop();
}