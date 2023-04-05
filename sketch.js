var canvas;
var sky, skyImg; 
var eagle , eagleImg;

function preload() {
 
  eagleImg = loadImage("./assets/flying-eagle.gif")
  skyImg = loadImage("./assets/sky.png")

}


function setup() {
  createCanvas(800,1000)

  sky = createSprite(600,200)
  sky.addAnimation("skyed",skyImg)
  sky.velocityX = -2
  sky.scale = 2


  eagle = createSprite(30,200)
  eagle.addAnimation("eagley",eagleImg)
  

}

function draw() {
  background("white"); 
  
  if(sky.x <200){
    sky.x = width/2;
 }

 if (keyDown(UP_ARROW)) {
  eagle.velocityY = -5
}

if (keyIsDown(DOWN_ARROW)) {
  eagle.velocityY = +5;
}




  drawSprites();
}


