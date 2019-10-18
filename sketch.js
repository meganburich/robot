var x
var y
var w
var h


function setup() {
  createCanvas(420, 400);
  x = 140
  y = 80
  w = 140
  h = 180
}

function draw() {

  print(mouseX, mouseY);

  background(255);
  //head 
  noStroke();
  fill(255, 143, 218);
  rect(x, y, w, h);
  //mouth 
  fill(235, 1, 218);
  rect(x + 30, y + 120, w - 60, h - 160);
  //eyes
  fill(255, 94, 209);
  ellipse(x + 40, y + 60, w - 110, h - 150);
  ellipse(x + 100, y + 60, w - 110, h - 150);
  //nose 
  fill(204, 14, 150);
  beginShape();
  vertex(x + 80, y + 60);
  vertex(x + 60, y + 60);
  vertex(x + 60, y + 90);
  vertex(x + 50, y + 100);
  vertex(x + 90, y + 100);
  vertex(x + 80, y + 90);
  vertex(x + 80, y + 60);
  endShape();
  //eyebrows 
  fill(102, 0, 84);
  rect(x + 25, y + 35, w - 115, h - 175);
  rect(x + 87, y + 35, w - 115, h - 175);
  //crown things 
  fill(0);
  rect(x + 10, y - 30, w - 130, h - 150);
  rect(x + 45, y - 30, w - 130, h - 150);
  rect(x + 85, y - 30, w - 130, h - 150);
  rect(x + 120, y - 30, w - 130, h - 150);
  fill(random(400), random(400), random(400));
  ellipse(x + 15, y - 35, w - 120, h - 160);
  ellipse(x + 50, y - 35, w - 120, h - 160);
  ellipse(x + 90, y - 35, w - 120, h - 160);
  ellipse(x + 125, y - 35, w - 120, h - 160);
  //neck
  fill(244, 97, 255);
  rect(x + 55, y + 180, w - 110, h - 120);
  stroke(179, 77, 232);
  strokeWeight(4);
  line(x + 56, y + 185, x + 84, y + 185);
  line(x + 56, y + 195, x + 84, y + 195);
  line(x + 56, y + 205, x + 84, y + 205);
  line(x + 56, y + 215, x + 84, y + 215);
  line(x + 56, y + 225, x + 84, y + 225);
  line(x + 56, y + 235, x + 84, y + 235);
  //body 
  noStroke();
  rect(x + 30, y + 240, w - 60, h - 130);
  //legs
  rect(x + 50, y + 290, w - 130, h - 155);
  rect(x + 80, y + 290, w - 130, h - 155);
  //feet 
  ellipse(x + 50, y + 310, w - 130, h - 170);
  ellipse(x + 80, y + 310, w - 130, h - 170);
  //arms
  ellipse(x + 30, y + 263, w - 110, h - 150);
  ellipse(x + 110, y + 263, w - 110, h - 150);



}