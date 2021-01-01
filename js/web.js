'use strict';

/*
  Задание 6.
  1. Добавьте еще один вложенный цикл for ниже, чтобы нарисовать дополнительный слой паутины.
     Не забудте поменять значение forward
  2. Если вы заходите добавить еще один слой паутины, то придеться писать еще один дополнительный
     вложенный цикл for. Чтобы этого избежать, мы можем обернуть вложенный цикл for, который рисует
     трегольники, в еще один цикл for, который будет отвечать за количство рисуемых слоев.
     Сделайте так, чтобы можно было нарисовать любое количество слоев, только изменив значение 
     одной перменной layers
     P.S. не забываем, что потребуется еще менять занчение forward внутри самого вложенного цикла, 
     для этого используйте значение переменной счетчика цикла отвечающего за слои.
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
    
    var angles = 3;
    var triangleCount = 6

    function drawFigure(sideLen) {
        for (var j=1; j <= angles; j++) {
            turtle.forward(sideLen);
            turtle.left(360 / angles);
        }
    }

    for (var i=1; i <= triangleCount; i++) {
        var sideLen = 50;
        for (var j=0; j < 4; ++j) {
            drawFigure(sideLen);
            sideLen = sideLen + 50;

        }
    //   drawFigure (50);
    //   drawFigure (100);

        turtle.left(60);
    }

    // допишите код под этим комментарием

    // код ниже не трогаем
    // показать направление черепашки
    turtle.drawDirection();
    // нужно для остановки цикла перерисовки p5js
    noLoop();
}