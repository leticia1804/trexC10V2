
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);

  trex.scale = 0.5;
}

function draw(){
  background("black")

  if(keyDown("space")){

    trex.velocityY = -10;

  }

  trex.velocityY = trex.velocityY + 0.5;

  drawSprites();

}