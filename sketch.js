var wall, thickness;
var bullet, speed, weight;



function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 40, 20);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor="grey";
  bullet.shapeColor="white";
 
  bullet.velocityX = speed;
}


function draw() { 
  background("black");


  drawSprites();


  if (wall.x-bullet.x<(bullet.width+wall.width)/2) {

    bullet.velocityX=0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if (damage > 10) { 
      bullet.shapeColor="red";
    }
    if (damage < 10) {
      bullet.shapeColor="green";
    }

  }

}

