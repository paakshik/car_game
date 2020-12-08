var gameState = "MENU";
var lives = 3;
var score = 0;
var survivalTime = 0;
var choser;
var y = 200;
var y1 = 150;
function preload(){
    re = loadImage("hiclipart.com (1).png");
    mouse = loadImage("nn.png");
    road = loadImage("download (1).png");
    card = loadImage("clipart268510.png");
    ob1 = loadImage("download (2).png");
    ob2 = loadImage("download (3).png");
    ob3 = loadImage("download (4).png");
    ob4 = loadImage("download (5).png");
    coins  = loadImage("hiclipart.com (2).png");
    res = loadImage("restart.png");
    broke = loadImage("download (6).png");
    bo = loadImage("download (7).png");
    b = loadImage("948f455fed8952d83884dd3dd10c8158.jpg");
    plan1 = loadImage("download (8).png");
    plan2 = loadImage("download (9).png");
    plan3 = loadImage("download (10).png");
    heart = loadImage("image.png");
    backs = loadSound("fire_funk_proud_music_preview.mp3");
    hit = loadSound("n.mp3");
    
    coin = loadSound("coin.mp3");
}
function setup(){
createCanvas(400,400);
button1 = createSprite(200,200);
button1.addImage(re);
button1.scale = 0.5;

back = createSprite(200,y1,300,400);
back.addImage(road);
back.rotation = 90;
back.scale = 5.2;
back.visible = 0;
surfer  = createSprite(120,250);
surfer.visible = 0; 
surfer.addImage(card);
surfer.scale = 0.06;
surfer.rotation = 270;
carG = new Group();
coinG = new Group();
button2 = createSprite(200,200);
button2.addImage(res);
button2.scale = 0.5;
button2.visible = 0;

cusor = createSprite(200,200);
    cusor.addImage(mouse)
    cusor.scale = 0.03;
cum = createSprite(200,200);
cum.addImage(mouse);
cum.scale = 0.03;
cum.visible = 0;
plant1 = createSprite(380,20);
plant1.addImage(plan1)
plant1.scale = 0.5;
plant1.visible = 0;

plant2 = createSprite(380,60);
plant2.addImage(plan2)
plant2.scale = 0.5;
plant2.visible = 0;
plant3 = createSprite(20,20);
plant3.addImage(plan3)
plant3.scale = 0.5;
plant3.visible = 0;
plant4 = createSprite(20,60);
plant4.addImage(plan1)
plant4.scale = 0.5;
plant4.visible = 0;
if (!localStorage["HS"]){
    localStorage["HS"] = 0;  
}
if (!localStorage["HT"]){
    localStorage["HT"] = 0;  
}
backs.play();
        backs.setVolume(0.5);
livG = new Group();
}
function draw(){
    background(255)
  if (gameState === "MENU"){
      imageMode(CENTER);
      image(b,200,200,400,400)
       cusor.x = mouseX;
    cusor.y = mouseY  
    if (cusor.isTouching(button1)){
          gameState = "PLAY";
          button1.destroy();
          cusor.destroy();
gameState = "PLAY";
      }
     
    }

    if (gameState === "PLAY"){
        
        imageMode(CENTER);
      image(bo,200,y,400,800);
      y = y+ 10;
      if (y > 400){
          y = 200;
      }
        survivalTime = survivalTime+ abs(Math.round(getFrameRate()/40));
        back.visible = 1;
        back.velocityY = 5;
        if (back.y > 200){
            back.y =150;
            back.velocityY = 5;
        }
        surfer.visible = 1;
        if (surfer.x < 100){
            surfer.x = 100;
            surfer.velocityX = 0;
          
        }
        if (surfer.x > 295){
            surfer.x = 295;
            surfer.velocityX = 0;
       
        }
        if (keyDown(RIGHT_ARROW)){
            surfer.x = surfer.x + 30;
        }
        if (keyDown(LEFT_ARROW)){
            surfer.x = surfer.x - 30;
      }
      choser = floor(random(1,4));
      if (World.frameCount % 100 === 0){
         car = createSprite(random(120,290),10,50,50);
         car.velocityY = 7; 
         carG.add(car);
        car.rotation = 180;
        switch(choser){
case 1:car.addImage(ob1);
break;
case 2:car.addImage(ob2);
break;
case 3:car.addImage(ob3);
break;
case 4:car.addImage(ob4);
break;
}
}

if (World.frameCount % 200 === 0){
        coin = createSprite(random(120,290),10,10,10);
        coin.velocityY = 7; 
        coinG.add(coin);
        coin.addImage(coins)
        coin.scale = 0.3;
}
        if (carG.isTouching(surfer)){
            lives = lives - 1;
           hit.play();
            if (lives > 0){
                carG.destroyEach();
            }
           
           if (lives === 0){
        
            button2.visible = 1;
           
           

           gameState = "END";
           }
           
            }
    
    if (coinG.isTouching(surfer)){
        coinG.destroyEach();
        score = score + 1;
        coin.play();
    }
    fill("forestGreen");
textFont("Helvetica");
    text("Lives:"+lives,10,20);
     plant1.visible = 1;
     plant1.velocityY = 10;
     plant2.visible = 1;
     plant2.velocityY = 10;
     plant3.visible = 1;
     plant3.velocityY = 10;
     plant4.visible = 1;
     plant4.velocityY = 10;
     if (plant1.y > 400){
         plant1.y = 0;
         plant1.velocityY = 10;
     }if (plant2.y > 400){
        plant2.y = 40;
        plant2.velocityY = 10;
    }
    if (plant3.y > 400){
        plant3.y = 0;
        plant3.velocityY = 10;
    }if (plant4.y > 400){
       plant4.y = 40;
       plant4.velocityY = 10;
   }
if (livG.isTouching(surfer)){
    livG.destroyEach();
    lives = lives + 1;
}
}
    if (gameState === "END"){
        imageMode(CENTER);
        image(bo,200,200,400,400);
        coinG.setVelocityEach(0,0);
           coinG.setLifetimeEach(-300)
           carG.setVelocityEach(0,0);
           carG.setLifetimeEach(-300);
        cum.x = mouseX;
        cum.y = mouseY;
        cum.visible = 1;
        if (localStorage["HS"]< score){
            localStorage["HS"] = score;
        }
        if (localStorage["HT"]< survivalTime){
            localStorage["HT"]= survivalTime;
        }
        plant1.velocityY = 0;
        plant2.velocityY = 0;
        plant3.velocityY = 0;
        plant4.velocityY = 0;
        back.velocityY = 0;
        back.y = 9999999;
        textFont("Helvetica");
        fill("ForestGreen");
        noStroke();
        textSize(20);
        textStyle(BOLD);
        text("Survivial time:"+ survivalTime,200,60);
        text("Score:"+ score,20,60);
        text("Highest Survival Time: "+ localStorage["HT"],100,380);
        if (cum.isTouching(button2)){
            gameState= "PLAY";
            print("JOKER");
            button2.visible = 0;
            cum.visible = 0;
            surfer.addImage(card);
            surfer.scale = 0.06;
            surfer.rotation = 270;
            carG.destroyEach();
            coinG.destroyEach();


            lives = 3;
            score = 0;
        }
        
    }
    drawSprites();
}
 





