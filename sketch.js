var car, wall;
var speed, weight;
var wall, thickness
var bullet,speed,weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,38)
}

function draw() {
  background(255,255,255);  
  car = createSprite(50, 200, 50,50);
  wall = createSprite(1500,200,60,height/2);
  wall = createSprite(1200,200,thickness,height/2);
  car.velocityX = speed;
      
  drawSprites();
}