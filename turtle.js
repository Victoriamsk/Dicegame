'use strict';

function turtleLeft(d) {
  this.angle -= d;
}

function turtleRight(d) {
  this.angle += d;
}

function turtleForward(p) {
  var rad = radians(this.angle);
  var newx = this.x + cos(rad) * p;
  var newy = this.y + sin(rad) * p;
  this.goto(newx, newy);
}

function turtleBack(p) {
  this.forward(-p);
}

function turtlePenDown() {
  this.penIsDown = true;
}

function turtlePenUp() {
  this.penIsDown = false;
}

function turtleGoTo(x, y) {
  if (this.penIsDown) {
    stroke(this.color);
    strokeWeight(this.weight);
    line(this.x, this.y, x, y);
  }
  this.x = x;
  this.y = y;
}

function turtleDistTo(x, y) {
  return sqrt(sq(this.x - x) + sq(this.y - y));
}

function turtleAngleTo(x, y) {
  var absAngle = degrees(atan2(y - this.y, x - this.x));
  var angle = (absAngle - this.angle + 360) % 360.0;
  return angle;
}

function turtleTurnToward(x, y, d) {
  var angle = this.angleTo(x, y);
  if (angle < 180) {
    this.angle += d;
  } else {
    this.angle -= d;
  }
}

function turtleSetColor(c) {
  this.color = c;
}

function turtleSetWeight(w) {
  this.weight = w;
}

function turtleFace(angle) {
  this.angle = angle;
}

function setX(x) {
  this.x = x;
}

function setY(y) {
  this.y = y;
}

function drawDirection() {
  var savedWeight = this.weight;
  this.setWeight(3);

  this.left(90);
  this.forward(6);

  for (var i=0; i < 3; i++) {
    this.right(120);
    this.forward(12);
  }
  this.back(6);
  this.right(90);
  this.setWeight(savedWeight);
}

function drawCircle(diameter) {
  stroke(this.color);
  strokeWeight(this.weight);
  circle(this.x, this.y, diameter);

}

function drawRect(width, height) {
  stroke(this.color);
  strokeWeight(this.weight);
  rect(this.x, this.y, width, height);
}

function setFill(color) {
  fill(color);
}

function makeTurtle(tx, ty) {
  var turtle = {
    x: tx,                    // x - координата
    y: ty,                    // y - координата
    angle: 0.0,               // текущий угол
    penIsDown: true,          // состояние пера: опущено или нет
    color: color(128),        // цвет линии (пера)
    weight: 1,                // ширина линии
    left: turtleLeft,         // повернуть налево градусов
    right: turtleRight,       // повернуть направо градусов
    forward: turtleForward,   // двигаться вперед на кол-во пикселей
    back: turtleBack,         // двигаться назад
    backward: turtleBack,     // двигаться назад
    penDown: turtlePenDown,   // опустить перо
    penUp: turtlePenUp,       // поднять перо
    goto: turtleGoTo,         // переместить черепашку в точку (x,y)
    turnToward: turtleTurnToward,  // повернуться к точке (x, y)
    distanceTo: turtleDistTo,      // вычислить расстояние до точки (x,y)
    angleTo: turtleAngleTo,        // вычислить угол до точки (x,y)
    setColor: turtleSetColor,      // установить цвет. Целое число или объект color()
    setWeight: turtleSetWeight,    // установить ширину линии
    face: turtleFace,              // установить угол
    setAngle: turtleFace,
    setX: setX,
    setY: setY,
    drawDirection: drawDirection,   // нарисовать текущее направление черепашки
    circle: drawCircle,             // нарисовать круг
    rect: drawRect,                 // нарисовать прямоугольник
    setFill: setFill,               // устанвоить заливку фигуры
  };
  return turtle;
}
