// Fractal Trees

let angle;
let sliderA;
let sliderL;
let sliderW;
let wei;

function setup() 
{
  createCanvas(800, 800);
  angleMode(DEGREES);
  sliderA = createSlider(0, 360, 45);
  slidernA = createSlider(-360, 0, -45);
  sliderL = createSlider(0, 200, 150);
  sliderW = createSlider(0, 75, 20);
}

function draw() 
{
  background(0);
  angle0 = -25;
  angle1 = sliderA.value();
  angle2 = slidernA.value();
  len = sliderL.value();
  wei = sliderW.value();
  stroke(255);
  translate(400, height);
  branch(len,wei);
}

function branch(len,wei) 
{
  strokeWeight(wei);
  line(0, 0, 0, -len);
  translate(0,-len);
  if (len > 5) 
  {
    push();
      rotate(angle1);
      branch(len * 0.75,wei * 0.75);
    pop();

    push();
      rotate(angle2);
      branch(len * 0.75,wei * 0.75);
    pop();
    
    // add code bellow for more branches but less performance
    /*
    push();
      rotate(angle0);
      branch(len * 0.25,wei * 0.6);
    pop();
    */
  }
}