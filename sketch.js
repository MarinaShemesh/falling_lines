console.log('falling line');

let lineY = 0;
let lineHeight = 25;
let lineSpeed = 2;

let bottomRectangleHeight = 0;

let bgColor;
let fgColor;


function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = randomColor();
  fgColor = randomColor();

}


function draw() {
  background(bgColor);
  stroke(fgColor);
  fill(fgColor);

  //falling line
  rect(0, lineY, width, lineHeight);

  //bottom rectangle
  if (bottomRectangleHeight > 0) {
    rect(0, height - bottomRectangleHeight, width, bottomRectangleHeight);
  }

  //this makes the line move down
  lineY += lineSpeed;


// if the line reaches the bottom rectangle,
// make the bottom rectangle bigger
if (lineY >= height - bottomRectangleHeight - lineHeight) {
  bottomRectangleHeight += lineHeight;
  lineY = 0;


  // if the bottom rectangle fills the screen, start over
  if (bottomRectangleHeight >= height) {
    bottomRectangleHeight = 0;
    bgColor = fgColor;
    fgColor = randomColor();
    
  }
}
}

function randomColor() {
  return color(random(255), random(255), random(255));
}

//SOURCE:
//https://happycoding.io/examples/p5js/animation/falling-line
