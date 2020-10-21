var car, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  thickness = random(12,80);

  wall = createSprite(1200,200,thickness,height/2);

  car = createSprite(50,200,40,40);
  car.shapeColor = "white";
  
  speed = random(55,90);
  weight = random(400,1500);

}

function draw() {
  background(0); 
  
  car.velocityX = speed;

  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22500;

    if(deformation > 180){
      car.shapeColor = color(255,0,0);

      fill("red");
      textSize(50);
      text("DEADLY",200,200);
    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);

      fill("yellow");
      textSize(50);
      text("BETWEEN",200,200);
    }

    if(deformation < 100){
      car.shapeColor = color(0,255,0);

      fill("green");
      textSize(50);
      text("HARMLESS",200,200);
    }
  }

  drawSprites();
}