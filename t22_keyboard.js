/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
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
	rectangleOne.rotationSpeed=0;

	if (kb.pressing('left')) {
// Set sprite's velocity to the left
		vel.x = 10;
}

else if (kb.pressing ('right')) {

     

};

if (kb.released('left')) {

   	vel.y = 0;

}
}
	
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('#d4cbcb');

	rectangleOne.moveTowards(mouseX, mouseY, 1);
	if (mouse.presses()) {
	rectangleOne.moveTo(100, 200, 5);
	}

}

/*******************************************************/
//  END OF APP
/*******************************************************/