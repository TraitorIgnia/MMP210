// self portrait
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("skyblue");
	noStroke();
	
	//HEAD
    stroke(159, 26, 31);
    fill("black");
    ellipse(100, 100, 150);
    fill("black");
    ellipse(300, 100, 150);
    fill("white");
    ellipse(200, 200, 300);
    
	// eyes
	fill("black");
	ellipse(150, 150, 50, 50);
	ellipse(250, 150, 50, 50);
    fill("white");
	ellipse(150, 150, 25, 25);
	ellipse(250, 150, 25, 25);
	
	//nose
    fill(0, 0, 0);
    arc(200, 200, 50, 50, 0, PI);
    stroke(0, 0, 0);
    
    //mouth
    fill("white");
    arc(175, 250, 50, 50, 0, PI);
    arc(225, 250, 50, 50, 0, PI);
    stroke(0, 0, 0);
}