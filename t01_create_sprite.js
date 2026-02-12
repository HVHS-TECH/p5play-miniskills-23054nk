/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*red
#ff0000
rgb(255,0,0) ?????
*/
/*******************************************************/
function setup() {
	console.log("setup:");
	width = random(300,600);
	height = random(300,600);

	cnv = new Canvas(width, height);

	blue = new Sprite(width, height, 100,100);
	blue.color = 'blue';
	
	red = new Sprite(width(50),height(50) ,100,100);
	red.color = 'red';
	
	green = new Sprite(, ,  100,100);
	green.color = 'green';
	


	yellow = new Sprite( __, __ ,  100,100);
	yellow.color = 'yellow';

	purple = new Sprite( __, __ ,  100,100);
	purple.color = 'purple';

	/* testing geometry 
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
	
	/* task 1 create sprite 
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