'use strict';

/*
  Задание 1.
  Дорисуйте прямоугольник.
*/

function setup() {
    // создаем холст 400x400 пикселей
     createCanvas(400, 400);

    // задаем цвет фона
     background(255, 0, 0, 60);
    
    var turtle = makeTurtle(130, 80);
    var whiteColor = color(255, 255, 255)
    turtle.setColor(whiteColor)
    turtle.forward(100)
    turtle.right(90)
    turtle.forward(50)
    turtle.right(90)
    turtle.forward(100)
    turtle.right(90)
    turtle.forward(50)

    turtle.right(180)
    turtle.penUp()
    turtle.forward(100)
    turtle.penDown()

    function drawSquare (lenght) {
      for (var i=1; i <= 4; ++i) {
        turtle.forward(lenght)
        turtle.right(90)
        }
    }

    drawSquare(50);
    turtle.left(90);
    turtle.forward(30);
    drawSquare(30);
   

    
    








    // установить размер пера
    // turtle.setWeight(5);

    // опустить перо
    // turtle.penDown();

    // установим цвет линии
    // var turtleLineColor = color(255, 204, 0);

    // установить цвет линии
    // turtle.setColor(turtleLineColor);

    // двигаться вперед
    // turtle.forward(100);

    // повернуться направо
    // turtle.right(90);
    // turtle.forward(50);

    // допишите код под этим комментарием

    // код ниже не трогаем
    // показать направление черепашки
    turtle.drawDirection();
    // нужно для остановки цикла перерисовки p5js
    noLoop();
}