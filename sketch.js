var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roof
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	roofSprite=createSprite(width/2, height-35, width,10);
	roofSprite.shapeColor=color(255)



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, roof);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



