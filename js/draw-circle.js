'use strict';

/*
    Задание 2.
    1. Нарисуйте рядом еще один синий круг
    2. Нарисуйте еще один круг с любым цветом, 
       но только уже под нарисованными кругами
*/

function setup() {
    // создаем холст 400x400 пикселей
    createCanvas(400, 400);
    
    // задаем цвет фона
    background(0);

    var turtle = makeTurtle(100, height/2);
    // установить размер пера
    turtle.setWeight(5);
    // опустить перо
    turtle.penDown();

    // установим цвет линии
    var turtleLineColor = color(255, 204, 0);
    // установить цвет линии
    turtle.setColor(turtleLineColor);
    
    turtle.setFill(color(255,0,0));
    turtle.circle(100);

    turtle.penUp();
    turtle.forward(50);
    turtle.penDown();

    turtle.setFill(color(0,255,0, 90));
    turtle.circle(100);
    
    // допишите код под этим комментарием

    turtle.forward(100)
    turtle.circle(50)
    turtle.left(90)
    turtle.forward(10)
    turtle.circle(60)

    // код ниже не трогаем
    // показать направление черепашки
    turtle.drawDirection();
    // нужно для остановки цикла перерисовки p5js
    noLoop();
}