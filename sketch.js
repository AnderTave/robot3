function setup() {
  createCanvas(600,600)
  strokeWeight(1)
  background(200)
  
}

function draw() {

//Antennae

stroke(100)
line (260,100,220,40);
line (260,100,270,10);
line (260,100,350,50);

//neck

line (260,100,260,300)
line (270,100,270,300)
line (250,100,250,300)

//head

fill(0)
ellipse(260,100,100,100);
fill(255)
ellipse(270,100,30,30);
fill(0)
ellipse(270,100,8,8);
fill(100)
ellipse(290,120,8,8);
ellipse(280,70,10,10);
ellipse(240,100,15,15);


//body

ellipse(250,370,80,80)
fill(0)
rect(200,220,100,150);
fill(100)
rect(200,240,100,10);

//  line (pmouseX,pmouseY,mouseX,mouseY)
  
}
