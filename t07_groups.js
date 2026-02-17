/*******************************************************/
// P5.play: t07_groups
// Create aliens and add to a group on mouse click
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
// Ball
	ball_1 = new Sprite(width/2, height/2, 50, 'd');
	ball_1.color = 'cyan';
	ball_1.vel.x = 2;
	ball_1.bounciness = 1;
	ball_1.friction = 0;
	ball_1.drag = 0;

	// Create a group for the aliens
	alienGroup = new Group();
	for (i = 1; i < 10; i++) {
	alien = new Sprite(8, 10,);
	alien.vel.x = 3;
	alien.vel.y = 4;
	alien.bounciness = 1;
	alien.friction = 0;
	alienGroup.add(alien);

}
	
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