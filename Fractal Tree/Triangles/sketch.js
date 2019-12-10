function setup() {
  angleMode(DEGREES);
  createCanvas(800, 700);
  slider = createSlider(0, 360, 0);
}

function draw() {
  background(96, 161, 231);
  ang = slider.value();
  stroke(107, 53, 10);
  fill(204);
  translate(400,400);
  triang(0,0,-17,30,17,30,ang);
}

function triang(x1,y1,x2,y2,x3,y3,ang) {
  if (y1<300) {
    rotate(ang);
    triangle(x1,y1,x2,y2,x3,y3);
    push();
    triang(x2,y2,x2-17,y2+30,x2+17,y2+30,ang);
    pop();
    
    push();
    triang(x3,y3,x3-17,y3+30,x3+17,y3+30,ang);
    pop();
  }
}