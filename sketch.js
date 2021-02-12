
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{

}

function setup() 
{
	createCanvas(1350, 620);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   roof1=new roof(640,180,275,20);

	bob1=new bob(550,380,90);
	bob2=new bob(595,380,90);
	bob3=new bob(640,380,90);
	bob4=new bob(685,380,90);
	bob5=new bob(730,380,90);

  rope1=new rope(bob1.body,{x:550,y:180});
  rope2=new rope(bob2.body,{x:595,y:180});
  rope3=new rope(bob3.body,{x:640,y:180});
  rope4=new rope(bob4.body,{x:685,y:180});
  rope5=new rope(bob5.body,{x:730,y:180});



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("yellow");



  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  

  keyPressed();
  drawSprites();
 
}

function keyPressed()
 { if (keyCode === UP_ARROW) 
  {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); 
  } 
 }