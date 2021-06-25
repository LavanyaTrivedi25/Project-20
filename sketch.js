var  wall, thickness
var bullet, speed, weight


function setup() {
  createCanvas(1500,400);
 bullet = createSprite(50, 200, 45, 20);
bullet.shapeColor = "white";
 wall = createSprite(1200, 200, thickness, height/2);
 wall.shapeColor = color(80,80,80);


speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);

bullet.velocityX = speed;

}

function draw() {
  background(77,88,99);  
  drawSprites();

if(hasCollided(bullet, wall))
{
  bullet.VelocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness )

if (damage > 10)
{
  wall.shapeColor = color(255,0,0);
}
if (damage<10)
{
  wall.shapeColor = color(0,255,0);
}


}

if(wall.x - bullet.x < (bullet.width + wall.width)/2){
bullet.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22500;

if (deformation>180)
{
  bullet.shapeColor = color(255,0,0)
}

if(deformation<180 && deformation>100)
{
  bullet.shapeColor = color(230,230,0)
}

if(deformation<100)
{
  bullet.shapeColor = color(0,255,0);
}

}

}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
{
  return true
}
return false;
}


