    var sea
    var seaImg
    var ship
    var shipImg1


function preload(){
    //for loading animations
    seaImg = loadImage("sea.png")
    shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
    }

function setup(){
    createCanvas(400,400);
    sea = createSprite(400,200)
    //for adding image
    sea.addImage(seaImg)
    sea.scale = 0.5
    sea.velocityX = -4

    ship = createSprite(80,295,50,50)
    //for adding animation
    ship.addAnimation("movingShip",shipImg1)
    ship.scale = 0.25
    }

function draw() {
  background("blue");

  //sea will repeat
    sea.velocityX = -4
    if(sea.x<0){
    sea.x = sea.width/4}
 
   drawSprites()
 
}