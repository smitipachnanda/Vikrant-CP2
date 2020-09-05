
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papaperObject,dustbin1,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   papperObject = new Papper (50,300,20);
   ground = new Ground (400,690,800,20);
   dustbin= new Dustbin (680,620,110,110);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  papperObject.display();
  dustbin.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
Matter.Body.applyForce(papperObject.body,papperObject.body.position,{x:70,y:-70});

}
}


