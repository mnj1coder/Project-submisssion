var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,length/2);
  speed = random(55,90);
  thickness = random(22,83);
  wall = color(80,80,80);
  speed = random(223,321);
  weight = random(30,52);
}

function draw() {
  background(255,255,255); 
  bullet.velocityX = speed;
  
 if(wall.x-bullet < (bullet.width+wall.width)/2)
 {
   bullet.velocityX = 0;
   var deformation = 0.5 * wieght * speed * speed/22509;
   if(deformation>180)
   {
     bullet.shapeColor = color(255,0,0);
   }

   if(deformation<180 && deformation>100)
   {
     bullet.shapeColor = color(230,230,0);
   }

   if(deformation<10)
   {
     bullet.shapeColor = color(0,255,0)
   }
 }


  drawSprites();
}