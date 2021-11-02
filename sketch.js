var carimg,botimg,explosion
var ground,car,bot
var botGroup
var distance
var gamestate="play"
function preload() {
carimg= loadImage("simple-travel-car-top_view.png")
botimg= loadImage("TRBRYcarssedan.png")
groundimg=loadImage("path.png")
explosion=loadImage("Explosion.png")
botGroup=new Group
}

function setup() {
createCanvas(400,600)
ground = createSprite(200,600)
explosion.blend(carimg, 0, 0, 476, 960, 0, 0, 1152, 96, BLEND);
ground.velocityY= 4
  ground.addImage("ground",groundimg);
  ground.scale=2
  car=createSprite(100,550,30,50)
  car.addImage("carImg",carimg)
  car.addImage("carImgDest",explosion)
  car.scale=0.15
  distance=0
  
  }
  

function draw() {
  background(255)
  
 if(botGroup.isTouching(car)){
   gamestate="end"
 }
 if(gamestate==="play"){
  distance = distance + Math.round(getFrameRate()/60);
  spawn_Obstacles()
 }
 if(gamestate==="end"){
   ground.velocityY=0
   botGroup.destroyEach()
   car.changeImage("carImgDest")
 }
  car.x=World.mouseX
  if(ground.y > 550){
    ground.y = 300
  }
  
  drawSprites()
  fill("red")
  text("Distance: "+ distance, 0,50);
  if(gamestate==="end"){
    textSize(20)
    fill("Blue")
    textAlign(CENTER,CENTER)
    text("GAME OVER",200,300)
  }
}
function spawn_Obstacles(){
  if(frameCount %100===0){
  bot=createSprite(Math.round(random(150,550)),0)
  bot.addImage("car",botimg)
  bot.lifetime=150
  bot.velocityY=6
  botGroup.add(bot)

  }
}