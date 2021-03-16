const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;

var engine;
var world;
var ball;
var ground;

function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;

var ballOptions = {restitution: 1}
ball = Bodies.circle(400,100,30,ballOptions); 
World.add(world,ball);
var options = {isStatic: true}
ground = Bodies.rectangle(400,370,800,10,options); 

World.add(world,ground);

}

function draw() {
  background(255,255,255);
 
  rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,10);

Engine.update(engine)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30)
  


  drawSprites();
}