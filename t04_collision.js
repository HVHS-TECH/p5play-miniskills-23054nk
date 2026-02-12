/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth,windowHeight);
	world.gravity.y = 10;
	rectangleOne = new Sprite(200,200,100,200,'d');
	rectangleOne.color = '#808000';
	rectangleOne.rotationSpeed=2;
	rectangleOne.vel.x = 2;
	rectangleOne.bounciness= 0.5;
	
// platforms

	platform_1 = new Sprite(600,600,200,10, 'k');
	platform_1.rotation = -4; 
	platform_1.color = '#9F2B68';

	platform_2 = new Sprite(200,300,200,10, 'k');
	platform_2.rotation = 3;
	platform_2.color = '#FFB6C1';

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