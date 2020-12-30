var fixedrect,movingrect  

function setup() {
  createCanvas(800,400);
 fixedrect = createSprite(400, 200, 50, 50);
 movingrect = createSprite(200,200,20,20);
 car = createSprite(10,300,80,30);
 car.velocityX = 1;
 bus = createSprite(300,300,80,30);
 bus.velocityX =-1;
}

function draw() {
  background(255,255,255);  
  movingrect.x = mouseX
  movingrect.y = mouseY
 isTouching(car,bus)
 bounceOff(car,bus)
  drawSprites();
}