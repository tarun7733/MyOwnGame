var boy;
var backgroundImage,boyImg;
var backgroundRep;
var fireGroup,thiefGroup;
var gameState="play";
var score=0;
function preload(){
  backgroundImage=loadImage("background.png");
  boyImg=loadAnimation("boy1.png","boy3.png","boy4.png","boy2.png");
 thiefImg=loadImage("thief.png");
  fireImg=loadImage("fire.png");
  gameOverImg=loadImage("gameOver.png");
}



function setup() {
  createCanvas(1200,700);
backgroundRep=createSprite(700,400);
 backgroundRep.addImage("back",backgroundImage);
backgroundRep.scale=2.5; 
 backgroundRep.velocityX=-2; 
boy=createSprite(100,600,20,20)
 boy.addAnimation("boytamge",boyImg);
  boy.scale=0.7;
  boy.debug=true;
thiefGroup=new Group();
fireGroup=new Group();
}

function draw() {
 background("black");
  
 console.log(backgroundRep.x);  

  if(gameState==="play"){
   
    if(backgroundRep.x<260){
backgroundRep.x=795;
  
  
}
Thief(); 
  
  
 if(keyDown("space")){
    fire();
 } 
    if(boy.isTouching(thiefGroup)){
     gameState="end";
      
      
    }
    if(fireGroup.isTouching(thiefGroup)){
      fireGroup.destroyEach();
      thiefGroup.destroyEach();
      score+=10;
    }
    
 
   
  }
   
  if(gameState==="end"){
 reset();
  }

  
  
  drawSprites();
  textSize(20);
  fill(255);
  text("score: "+ score,1000,100);

}

function Thief(){
 if(frameCount%200===0){
  thief=createSprite(700,600,20,20);
   thief.addImage(thiefImg);
   thief.velocityX=-2;
   thief.lifetime=289;
   thiefGroup.add(thief);
   thief.setCollider("circle",0,0,50)
   thief.debug=true;
   
    }
  
  
  
  
}

function fire(){
fireBall=createSprite(110,600,10,10)  
fireBall.addImage(fireImg);
fireBall.velocityX=2; 
fireBall.scale=0.5;
 fireGroup.add(fireBall); 
  
  
}

function reset(){
  
   gameover=createSprite(300,300);
    gameover.addImage(gameOverImg);
  boy.destroy();
  thiefGroup.destroyEach();
  backgroundRep.velocityX=0;
  
  
  
}










