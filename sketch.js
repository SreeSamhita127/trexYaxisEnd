
var trex;
var gamestate, END, PLAY;

function preload(){
  trex1 = loadImage("trex/trex1.png")
  trex2 = loadImage("trex/trex4.png")
  trex3 = loadImage("trex/trex3.png")
  groundimage = loadImage("others/ground2.png");
  lineimage = loadImage("others/lines.png");
  cloudimage = loadImage("others/cloud.png");
  cactus1 = loadImage("obstacle/obstacle1.png");
  cactus2 = loadImage("obstacle/obstacle2.png");
  cactus3 = loadImage("obstacle/obstacle3.png");
  cactus4 = loadImage("obstacle/obstacle4.png");
  cactus5 = loadImage("obstacle/obstacle5.png");
  cactus6 = loadImage("obstacle/obstacle6.png");
  gameoverImage = loadImage("others/gameOver.png");
  restartImage = loadImage("others/restart.png");
  trexover = loadAnimation("trex/trex_collided.png");
  crashSound = loadSound("sound/die.mp3");
  jumpSound = loadSound("sound/jump.mp3");
  checkSound = loadSound("sound/checkPoint.mp3");
}

function setup(){
  createCanvas(innerWidth - 800,innerHeight - 100);
  
  trex = createSprite(innerWidth/9,innerHeight - 200,20,20);
  trex.addImage(trex1)
  trex.scale = 0.5
  
  line = createSprite(50,200,20,20);
  line.addImage("line",lineimage);
  line.scale = 0.1;
  
  line1 = createSprite(350,200,20,20);
  line1.addImage("line",lineimage);
  line1.scale = 0.1;

  line2 = createSprite(650,200,20,20);
  line2.addImage("line",lineimage);
  line2.scale = 0.1;

  line3 = createSprite(950,200,20,20);
  line3.addImage("line",lineimage);
  line3.scale = 0.1;

  line4 = createSprite(1250,200,20,20);
  line4.addImage("line",lineimage);
  line4.scale = 0.1;

  line5 = createSprite(1550,200,20,20);
  line5.addImage("line",lineimage);
  line5.scale = 0.1;

  cactusgroup = new Group();

}

function draw(){
  background(0);

  textSize(100)
  fill("yellow")
  text("you win !", innerWidth/9,-4700)
  textSize(30)
  text("go up and avoid ",innerWidth/5,innerHeight - 200)
  text("the cactus ",innerWidth/5,innerHeight - 100)
  
  if(keyDown(UP_ARROW)){
    trex.y = trex.y - 20;
    jumpSound.play();
  }
  if(keyDown(DOWN_ARROW)){
    trex.y = trex.y + 20;
  }
  if(keyDown(LEFT_ARROW)){
    trex.x = trex.x - 20;
  }
  if(keyDown(RIGHT_ARROW)){
    trex.x = trex.x + 20;
  }

  if(cactusgroup.isTouching(trex)){
    gamestate = END;
    crashSound.play();
    trex.destroy();
    gameOver = createSprite(trex.x,trex.y + 100,30,30);
    gameOver.addImage(gameoverImage);
    gameOver.scale = 2.3
 }

  camera.position.y = trex.y

  if (trex.y < -100 && trex.y > -799){
    line.y = -700    
    line1.y = -700   
    line2.y = -700   
    line3.y = -700   
    line4.y = -700   
    line5.y = -700   
  }
  if (trex.y < -800 && trex.y > -1399){
    line.y = -1400
    line1.y = -1400
    line2.y = -1400
    line3.y = -1400
    line4.y = -1400
    line5.y = -1400
  }
  if (trex.y < -1400 && trex.y > -2000){
    line.y = -2100  
    line1.y = -2100   
    line2.y = -2100 
    line3.y = -2100 
    line4.y = -2100 
    line5.y = -2100 
  }
  if(trex.y < - 2100 && trex.y > -2899){
    line.y = -2800
    line1.y = -2800
    line2.y = -2800
    line3.y = -2800
    line4.y = -2800
    line5.y = -2800
  }
  if(trex.y < - 2900){
    line.y = -3500
    line1.y = -3500
    line2.y = -3500
    line3.y = -3500
    line4.y = -3500
    line5.y = -3500
  }


  drawSprites()
  cactifunction()
}

function cactifunction (){
  if(keyDown(UP_ARROW)){
  if(frameCount%1 === 0 ){
  var cactus = createSprite(60,trex.y - 400,10,10);
   var rand = Math.round(random(1,6));
  switch(rand){
      case 1:cactus.addImage (cactus1);
      break;
      case 2:cactus.addImage (cactus2);
      break;
      case 3:cactus.addImage (cactus3);
      break;
      case 4:cactus.addImage (cactus4);
      break;
      case 5:cactus.addImage (cactus5);
      break;
      case 6:cactus.addImage (cactus6);
      break; 
  }
  cactus.scale = 0.5
  cactus.x = random(20,innerWidth-20);
  cactusgroup.add(cactus);
  }}}

function END(){
  console.log(0)
}