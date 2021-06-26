
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var rock
var banana
var survivalTime =0
var go,go2

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
 
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
 
}



function setup() {
  
  ground=createSprite(400,380,800,20)
monkey=createSprite(20,350,20,20)
    bananasGroup = createGroup();
  rocksGroup = createGroup();
}


function draw() {
    background("pink")
  text("survival time: "+ survivalTime, 300,50);
 
  ground.velocityX=-9
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  console.log(ground.x)
  

  
  
    
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.08
  if(keyDown("space")&& monkey.y >= 330){
    
    monkey.velocityY=-7
 
  }
  if(bananasGroup.isTouching(monkey)){
    
    
    bananasGroup.destroyEach()
    
  }
survivalTime = survivalTime + Math.round(frameCount/50);
  if(rocksGroup.isTouching(monkey)){
    
    survivalTime=0
    
  }
  
  monkey.velocityY=monkey.velocityY+0.4
  monkey.collide(ground)
  spawnRocks()
  spawnBananas()
  drawSprites();
}
function spawnRocks(){
  
   if (frameCount % 80 === 0) {
     
     rock=createSprite(300,360,20,20)
     rock.addImage(obstaceImage)
     rock.scale=0.1
     rock.velocityX=-6 
     rocksGroup.add(rock);
   }
  
  
  
  
}
function spawnBananas(){
  
if (frameCount % 40 === 0) {
  
  banana=createSprite(300,250,20,20)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-6
  bananasGroup.add(banana);
  
  
  
  
}
  
  
}


 
  













