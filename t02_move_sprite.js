/*******************************************************/
// P5.play: t02_move_sprite
// Move a sprite
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth,windowHeight);
	rectangleOne = new Sprite(200,200,100,200,50);
	rectangleOne.color = '#808000';
	rectangleOne.rotationSpeed=2;
	rectangleOne.vel.x=2;

	circleOne = new Sprite(200,400,70);
	circleOne.color = '#008080';
 

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#D3D3D3');
}

/*******************************************************/
//  END OF APP
/*******************************************************/