// Itai Levi itaileiv420@gmail.com
// Maze generation algorithm
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

let column, rows;
let w = 40;

function setup() {
  createCanvas(1100, 510);
}

function draw() {
  background(51);
  //ellipse(mouseX, mouseY, 60, 60);
  column = floor(width / w);
  rows = floor(height / w);
}
class Cells {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
//let sketch = function (p) {
//p.setup = function () {
//p.createCanvas(1100, 510);
//};

//p.draw = function () {
//p.background(51);
//ellipse(mouseX, mouseY, 60, 60);
//};
//};

//let myp5 = new p5(sketch);
//if (lksfj) {
//console.log(lk;sjf)
//}
//else {
//console.log(lkdj)
//}
