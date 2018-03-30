var y = 100;
var i = 1;
function setup() {
  createCanvas(150, 200);
  stroke(0);
  frameRate(30);
}

function draw() {
  background(255);
  translate(width/2,height/2);
  stroke(0);
i = i + 0.1;
if(i>4){
  i = 0.5;
}
  rotate(PI / i);
  line(0,0,30,30);

  noFill();
ellipse(0,0,100);
}
