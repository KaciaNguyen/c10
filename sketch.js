var seaImg, seaLive;
var shipImg, shipMoving;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  seaLive = createSprite(400,200);
  seaLive.addImage("background", seaImg);
  seaLive.velocityX = -2
  seaLive.scale = 0.3;
  shipMoving = createSprite(130,260,20,20);
  shipMoving.addAnimation("moving",shipImg);
  shipMoving.scale = 0.2

}

function draw() {
  //background("blue");
  seaLive.addImage(seaImg);
  //you can use either background or addImage here i think

  if(seaLive.x < 0){
    seaLive.x = seaLive.width/10;
//experiment with values to make it correct
  }

  drawSprites();
}