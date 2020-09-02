var  bullet, wall;
var speed,weight,thickness

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52)
  thickness=random(22,83);
  bullet = createSprite(50,200,60,25);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = "green"

}

function draw() {
  background(0,0,0); 
  if(hascollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5*weight * speed * speed/(thickness * thickness * thickness);
    

    if(damage>10)
  {
     wall.shapeColor=color(225,0,0);
     }
     if(damage<10)
     {
       wall.shapeColor = color(0,225,0)
     }
    }
  //if(wall.x-car.x<(car.width+wall.width)/2){
    //car.velocityX =0;
    //var deformation = 0.5*weight*speed*speed/22509;
    //if(deformation>180);
  //{
    //car.shapeColor=color(255,0,0)
  //}
  //if(deformation<180 && deformation>100); 
    //{
      //car.shapeColor=color(230,230,0);
    //} 
     
  //if(deformation<100)
  //{
    //car.shapeColor = color("red")
  //}
//}
    wall.depth = bullet.depth;
    bullet.depth = bullet.depth + 1;
  drawSprites();
}
function hascollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
   return true
  }
  return false;
}