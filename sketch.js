var trex,trex_running,trex_collided;
var ground,groundImage,invisibleGround;
var cloudImage,CloudsGroup;
var ObstaclesGroup, obstacleimg1, obstacleimg2, obstacleimg3, obstacleimg4, obstacleimg5, obstacleimg6


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  obstacleimg1 = loadImage("obstacle1.png");
  obstacleimg2 = loadImage("obstacle2.png");
  obstacleimg3 = loadImage("obstacle3.png");
  obstacleimg4 = loadImage("obstacle4.png");
  obstacleimg5 = loadImage("obstacle5.png");
  obstacleimg6 = loadImage("obstacle6.png");

}


function setup() {
  createCanvas(400, 400);
trex = createSprite(200,380,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;
  trex.x = 50;
  
 ground = createSprite(200,380,400,20);
ground.addImage(groundImage);
ground.x = ground.width /2;

//invisible Ground to support Trex
 invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;

 CloudsGroup = new Group();
  ObstaclesGroup = new Group();

}

function draw() {
  background(200);
  
   if(keyDown("space") && trex.y >= 359){
      trex.velocityY = -12 ;
   }        
      trex.velocityY = trex.velocityY + 0.8;
  trex.collide(invisibleGround);    
      ground.velocityX = -6;   
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    spawnClouds();
   spawnObstacles();
  drawSprites();
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
   var  cloud = createSprite(400,320,40,10);
    cloud.y = Math.round(random(280,320));
    cloud.addImage(cloudImage);  
    cloud.scale = 0.5;
    cloud.velocityX = -3;
  
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    CloudsGroup.add(cloud);
  }
  }
  function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand){
    case 1:obstacle.addImage(obstacleimg1)
        break;
        case 2:obstacle.addImage(obstacleimg2)
        break;
        case 3:obstacle.addImage(obstacleimg3)
        break;
        case 4:obstacle.addImage(obstacleimg4)
        break;
        case 5:obstacle.addImage(obstacleimg5)
        break;
        case 6:obstacle.addImage(obstacleimg6)
        break;
        default:break;
        
        
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
  
}
