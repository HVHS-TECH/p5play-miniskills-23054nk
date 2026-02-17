/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup:");
	
//p5 geometry 3rd task
// Now the width and height of the canvas keep changing
width = random(300,600);
height = random(300,600);

// and the sprites keep changing too!
spriteX= random(50,150);
spriteY=  random(50,150);  ;

cnv = new Canvas(width, height);

red = new Sprite(spriteX/2, spriteY/2 , spriteX, spriteY);
red.color = 'red';

green = new Sprite(width - spriteX/2, spriteY/2, spriteX, spriteY);
green.color = 'green';

blue = new Sprite(width - spriteX/2, height - spriteY/2, spriteX, spriteY);
blue.color = 'blue';

yellow = new Sprite( spriteX/2, height - spriteY/2,  spriteX, spriteY);
yellow.color = 'yellow';

purple = new Sprite( width/2 ,height/2 ,  spriteX, spriteY);
purple.color = 'purple';


/* p5 geometry second task 
	width = random(300,600);
	height = random(300,600);
	cnv = new Canvas(width, height);

	blue = new Sprite(width-50,height -50, 100,100);
	blue.color = 'blue';
	
	red = new Sprite(50, 50, 100,100);
	red.color = 'red';

	green = new Sprite(width-50,50,100,100);
	green.color = 'green';
	
	yellow = new Sprite( 50, height -50 ,  100,100);
	yellow.color = 'yellow';

	purple = new Sprite( width/2, height/2,  100,100);
	purple.color = 'purple';    */



	/* P5 geometry first task
	cnv = new Canvas(500, 500);

	red = new Sprite(50, 50 ,100,100);
	red.color = 'red';

	green = new Sprite(450 , 50,100,100);
	green.color = 'green';

	blue = new Sprite( 450 , 450 ,  100,100);
	blue.color = 'blue';

	yellow = new Sprite( 50, 450,   100,100);
	yellow.color = 'yellow';
	
	purple = new Sprite(250, 250,  100,100);
	purple.color = 'purple'; */
	
	/* t01 create sprite 
	cnv = new Canvas(windowWidth,windowHeight);
	rectangleOne = new Sprite(200,500,200,100);
	rectangleOne.color = '#808000';

	circleOne = new Sprite(200,400,70);
	circleOne.color = '#008080';
	*/
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