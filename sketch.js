
var monkey , monkey_running, monkeyStop
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  monkeyStop = loadImage("sprite_0.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(100,256,20,20);
  monkey.addAnimation("run", monkey_running);
  monkey.scale = 0.08;
  //monkey.velocityY = 3
  
  ground = createSprite(300,400,600,40);
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background(255);
  
  textSize(20);
  text("SCORE : "+score, 400, 150);
  
  if(monkey.isTouching(obstacleGroup)){
    textSize(50);
    fill(0);
    text("GAME OVER!", 140, 200);
    obstacle.setVelocity(0, 0);
    obstacle.lifetime = -2;
    banana.setVelocity(0,0);
    banana.lifetime = -2;
    //monkey.addImage("stop",monkeyStop);
  }
  
  obc();
  
  food();
  
  if(keyDown("space")&&monkey.y>330){
    monkey.velocityY=-10;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground);
  
  //console.log(collider);
  
  
  
  monkey.setCollider("rectangle",0,0,250,550);
  //monkey.debug=true;
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score = score+10
  }
    
  

    
  
  
  drawSprites();
}
function obc(){
  if(frameCount%130===0){
    obstacle = createSprite(600,361,20,20);
    obstacle.velocityX = -5;
    obstacle.addImage("stone", obstacleImage);
    obstacle.scale=0.11;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
    obstacle.setCollider("circle",0,0,170);
    //obstacle.debug = true;
  }
}
function food(){
  //var rand = Math.round(random(80, 250, 150, 100));
  if(frameCount%100===0){
    banana = createSprite(600,310,20,20);
    banana.velocityX = -5;
    banana.addImage("fruit", bananaImage);
    banana.scale=0.08;
    banana.lifetime = 300;
    FoodGroup.add(banana);
    banana.setCollider("circle",-20,-100,220);
    //banana.debug = true;
  }
}




