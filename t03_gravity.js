/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
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

//Trying out other physics options 

	circleOne = new Sprite(800,400,70,'d');
	circleOne.color = '#008080';

	staticone= new Sprite(100,100,60,60,'s');
	staticOne.color= '#ff00ff';

	kinematicOne = new Sprite(300,100,60,60,'k');
	kinematicOne.color= '#0040ff';

	noneOne= new Sprite(500,100,60,60,'n');
	noneOne.color='#bfff00';
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