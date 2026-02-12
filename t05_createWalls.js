/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas(windowWidth,windowHeight);
// Left wall
	wallLH  = new Sprite(4, height/2, 8, height, 'k');
	wallLH.color = 'black';
// Right wall
	wallRH  = new Sprite(width, height/2, 8, height, 'k');
	wallRH.color = 'green';
// Top wall
	wallTop = new Sprite(width/2, 0, width, 8, 'k');
	wallTop.color = 'blue';
// Bottom wall
	wallBot = new Sprite(width/2, height, width, 8, 'k');
	wallBot.color = 'maroon';

	ball_1 = new Sprite(width/2, height/2, 50, 'd');
	ball_1.color = 'cyan';
	ball_1.vel.x = 2;
	ball_1.bounciness = 1;
	ball_1.friction = 0;
	ball_1.drag = 0;
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {

	background('#a79b9b');
}


/*******************************************************/
//  END OF APP
/*******************************************************/