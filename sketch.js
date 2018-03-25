var y = 100;

function setup() {
  createCanvas(150, 200);
  stroke(0);
  frameRate(30);
}

function draw() {
  background(255);
  translate(width/2,height/2);
  stroke(0);

  rotate(PI / random(0,10));
  line(0,0,30,30);
  noFill();
ellipse(0,0,100);
}
