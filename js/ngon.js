'use strict';

/*
  Задание 5.
  Перепишите программу с помощью цикла for, 
  чтобы можно было нарисовать многоугольник любой сложности
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
    
    turtle.forward(100);
    turtle.left(360 / 3);
    turtle.forward(100);
    turtle.left(360 / 3);
    turtle.forward(100);

    // код ниже не трогаем
    // показать направление черепашки
    //turtle.drawDirection();
    // нужно для остановки цикла перерисовки p5js
    noLoop();
}