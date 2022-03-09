const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var cannonBall
var canvas, angle, tower, ground, cannon;
var bolas = []

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES)
  angle = 15

  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon=new Cannon(180, 110, 150, 150, angle)
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
  
  cannon.show();
  
  for(var i = 0;i<bolas.length;i=i+1){
    show_balls(bolas[i])
  }
}
function keyReleased(){
  if(keyCode === DOWN_ARROW){
    bolas[bolas.length-1].shoot()
  }
}
function keyPressed(){
  if(keyCode === DOWN_ARROW){
    cannonBall = new Cannon_ball(cannon.x, cannon.y)
    bolas.push(cannon_ball)
  }
}
function show_balls(bola){
  if(bola){
    bola.show()
  }
}