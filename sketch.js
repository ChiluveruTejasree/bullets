var wall;
var bullet;
var damage;
var speed,weight;
var thickness;

function setup()
{
  
  createCanvas(800,500);
  speed = random(55,90);
  weight = random(32,50); 
  thickness = random(22,83);
  wall = createSprite(750,250,thickness,height/2);
  wall.shapeColor = "white";
  bullet = createSprite(50,250,50,10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

}

function draw()
{
  
  background("grey");
  console.log(damage)
  if(bullet.isTouching(wall))
  {
	bullet.velocityX = 0
	damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness)
      if(damage > 10)
        {
				wall.shapeColor=color(0,255,0) 
        }
      
      
      if(damage < 10)
        {
				wall.shapeColor=color(255,0,0) 
        }
   }
  drawSprites();
}


