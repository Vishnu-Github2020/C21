var wallImg, carImg,wall, car; 

function preload() 
{ 
carImg = loadImage("car.jfif");
wallImg = loadImage("wall.jfif");
 
} 

 
 

function setup() { 

  createCanvas(1200,800); 

  wall= createSprite(500, 500, 50, 80); 
  wall.scale = 0.5;
  wall.addImage(wallImg);
  wall.shapeColor = "green"; 
  wall.debug = true; 

  car= createSprite(200, 500,80,30); 
  car.scale = 0.5;
  car.addImage(carImg);
  car.shapeColor = "green"; 
  car.velocityX = 5; 

  mRect= createSprite(200, 500,80,30); 
  mRect.shapeColor = "green"; 
    
} 

 
function draw() 
{
background("lightgreen"); 
mRect.x = mouseX;
mRect.y = mouseY;
collide(car,wall);
//bounceOff(car,wall);
//bounce(car,wall);
if(isTouch(mRect,wall))
{
  textSize(50)
  text("TOUCHED", 400,400);
}
drawSprites(); 

} 

