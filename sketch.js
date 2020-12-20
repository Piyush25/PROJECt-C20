  var  wall,car;
  var breadth,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  weight=random(30,52)

  
breadth=random(22,83)

  car=createSprite(50,200,50,5)
  car.shapeColor=color(255);
  car.velocityX = speed;

  wall=createSprite(1200,200,breadth,height/2)
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  

  
  if(hasCollided(car,wall)){
    car.velocityX=0;
  var damage=0.5 * weight * speed * speed/(breadth* breadth* breadth);
   
  
  if(damage>10){
  wall.shapeColor=color(255,0,0);
 }
 
  if(damage<10){
  wall.shapeColor=color(0,255,0);
  }
   }


  drawSprites();
}
function hasCollided(lcar,lwall){
  carRightEdge=lcar.x +car.width;
  wallLeftEdge=lwall.x;
  if(carRightEdge>=wallLeftEdge)
{
  return true
}
  return false;
}
car

