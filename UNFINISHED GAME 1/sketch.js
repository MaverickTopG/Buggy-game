var Space,player,Alien1,Alien2;
var a,life;
var playerlife = 146,bullet,Bull;

// bullet
var bulletXpos = 0;
var bulletYpos = 0;
const BULLET_WIDTH = 4;
const BULLET_HEIGHT = 6;
var bulletXspeed = 10;

const SPACE_KEY = 32;





function preload(){
 Bull = loadImage("OOO.png")
 Space = loadImage("a.jpg")
 Railjack = loadImage("Railjack2.png")
 Alienimg1= loadImage("alien-1.png")
 Alienimg2=loadImage("alien-2.png")
 lifeImage=loadImage("lifebar.png")
bulletImg = loadImage("OLO.png")
 
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  // creating engine 

 // a=createSprite(900,600,1000,400)
 // a.addImage("img",Space)
 // a.scale=3.95
  
  player=createSprite(200,600,90,90)
  player.addImage("railjack",Railjack)
  player.scale=0.3

  //create Obstace Group
  obstaclesGroup = createGroup();

life = createSprite(150,70)
life.addImage("health",lifeImage)
life.scale=0.55
 
//creating player

//creating one bullet object
}



function draw() {
  background("#BDA297");
  
  image(Space,0,0,windowWidth,windowHeight)
 

  
  if(keyDown("up")){
    player.y -= 10
  }
   if(keyDown("down")){
    player.y += 10
  }
 
  if(keyDown("right")){
    player.rotation += 2
  } 

  if(keyDown("left")){
    player.rotation -= 2
  } 
   if(keyWentDown("space")){
    bullet=createSprite(player.x,player.y,90,90)
    bullet.addImage("bullET",Bull)
    bullet.velocityX = 3;
    bullet.scale=0.3;
    bullet.lifetime =600
   //if(bullet.lifetime == 0){
   //   bullet.destroy();
   // }     

  if(player.y > 1175) {
    player.y = 1175;
  }
  //if(playerlife>0){    
   // playerlife -=0.5
 // }
  //if(playerlife<=0){
  //  
 // }

  if (player.y < 100 ) {
    player.y = 100
  }

  spawnObstacles();
  //this.showLife()
  drawSprites()

  
}

function spawnObstacles(){
  if(frameCount % 60 == 0){
    
    var obstacle = createSprite(2215,random(height-45),10,40)
    obstacle.scale= 0.35
    obstacle.velocityX -= 7
    //assign lifetime to ships
    obstacle.lifetime = 306;
    if(obstacle.lifetime == 0){
      obstacle.destroy()
    }
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
     var rand = Math.round(random(1,2));
     switch(rand){
       case 1: obstacle.addImage("Alien1",Alienimg1);
       
            break;
      case 2: obstacle.addImage("Alien2", Alienimg2);
     
            break;
            
    default: break;
  }
}
}


function showLife(){
  
  push()
  image(lifeImage,150,70,20,20);
  fill("white")
  rect(138,60,146,28);
  fill("green")
  rect(138,60,playerlife,28)
  noStroke();
pop()  
}


  





}
