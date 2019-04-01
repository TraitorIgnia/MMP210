// self portrait
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("green");
	noStroke();
      
	//HEAD
    stroke(159, 26, 31);
    fill("black");
    ellipse(map(mouseX,0,width,95, 105, true), map(mouseX,0,width,95, 105, true), map(mouseX,0,width,140, 160, true));
    fill("black");
    ellipse(map(mouseX,0,width,295, 305, true), map(mouseX,0,width,95, 105, true), map(mouseX,0,width,140, 160, true));
    fill("white");
    ellipse(200, 200, 300);
    
	// eyes
	fill("black");
	ellipse(150, 150, 50, 50);
	ellipse(250, 150, 50, 50);
    fill("white");
	//eyes
	ellipse(map(mouseX,0,width,145, 155, true), 150, 25, 25);
	ellipse(map(mouseX,0,width,245, 255, true), 150, 25, 25);
	// pupils
	fill("black");
	//left
	ellipse(map(mouseX,0,width,145, 155, true), 150, 15, 15);
	//right
	ellipse(map(mouseX,0,width,245, 255, true), 150, 15, 15);
	//nose
    fill(0, 0, 0);
    arc(200, 200, 50, 50, 0, PI);
    stroke(0, 0, 0);
    
    //mouth
    fill("white");
    arc(175, map(mouseX,0,width,245, 255, true), 50, 50, 0, PI);
    arc(225, map(mouseX,0,width,245, 255, true), 50, 50, 0, PI);
    stroke(0, 0, 0);
    
    
}