//Global variables for images
var bg, sun, s_pan, fan_anim,fan_img,display, g_house_img;
var City,CityI
var Boom,boomI;
var Player,playerI;
var Enemy,EnemyI;
var Enemy_2,Enemy_2I;
var Nuker,NukerI;
var player_sound;
var Enemy_boom,Enemy_boomI;
var score;
var Enemy_Missile;
var Enemy_2_Missile;
var Game_Over;
var Enemy_3Image;
var Enemy_4Image;
var E3;
var E4;
//Global variables for Sprites
var g_house, pan1,pan2,fan,fan2;

//Creating a ray group
var rayGroup;

//Creating temprature and voltage variables
var temp = 10
var panel1_voltage =0;
var panel2_voltage = 0;
var power_gen = 0;


function preload()
{
  E3 = loadImage("F-16.png");
  E4 = loadImage("F16.png")
  Game_Over = loadImage("GaneOver.png")
  Enemy_boomI = loadImage("Enemy Blast.png")
  CityI = loadImage("bg.jpg");
  CityI.velocityY = 0.1
  jetSound = loadSound("spooky.wav")
  boomI = loadImage("Blast.png");
  PlayerI = loadImage("F - 35.png");
  EnemyI = loadAnimation("Enemy__1.png");
  Enemy_2I = loadImage("Enemy_2.png");
  NukerI = loadImage("Nuker.png");
  Enemy_MissileI = loadImage("Enemy_1_missile.png");
  Enemy_2_MissileI = loadImage("Enemy__2__missile.png");
  sunR = loadImage("sunrays.png");
  sunL = loadImage("sunrays1.png");
  bg = loadImage("bgimage.png");
  s_pan = loadImage("s_panel.png");
 
  //fan_anim.play = false;
  fan_img = loadImage("fan01.png");
  display = loadImage("disp.png");
  g_house_img = loadImage("greenhouse.png");
  
  //Add animation for moving Fan
  fan_anim= loadAnimation("fan01.png","fan02.png","fan03.png","fan04.png","fan05.png");

  
}

function setup() 
{
  createCanvas(700,700);

   
  
  Boom = createSprite(400,200); 
  Boom.addImage(boomI); 
  Boom.scale = 0.2; 
  Boom.visible=false;

  Enemy_boom = createSprite(400,200);
  Enemy_boom.addImage(Enemy_boomI)
  Enemy_boom.scale = 0.2;
  Enemy_boom.visible = false;

  Player = createSprite(400,700,10); 
  Player.addImage(PlayerI); 
  Player.scale = 0.20; 
  Player.debug = true;
 
  Enemy = createSprite(200,20,10); 
  Enemy.addAnimation("plane",EnemyI);
  Enemy.addAnimation("boom",boomI) ;
  Enemy.scale = 0.10; 
  Enemy.velocityY = 2; 
  Enemy.debug=true
  Enemy_2 = createSprite(100,30,10); 
  Enemy_2.addImage("plane",Enemy_2I);
  Enemy_2.addImage("boom",boomI) 
  Enemy_2.scale = 0.5; 
  Enemy_2.velocityY = 5; 
  Enemy_2.debug=true
 
  Nuker = createSprite(600,100,10); 
  Nuker.addImage(NukerI); 
  Nuker.scale = 0.05; 
  Nuker.velocityY = -150;
  Nuker.debug=false 

  Enemy_Missile = createSprite(200,20,10);
  Enemy_Missile.addImage(Enemy_MissileI);
  Enemy_Missile.scale = 0.05;
  Enemy_Missile.velocityY = 10;
  Enemy_Missile.debug = false
  Enemy_2_Missile = createSprite(100,30,10);
  Enemy_2_Missile.addImage(Enemy_2_MissileI);
  Enemy_2_Missile.velocityY = 5;
  Enemy_2_Missile.scale = 0.05;
  
}

function draw() 
{
   image(CityI,0,0,width,height)
   player_sound.play()
   if(keyDown("LEFT_ARROW"))
    {
     Player.x=Player.x-5
    }

  if (Player.x>=750)
  {
      Player.x=750; 
  }

  if (Player.x<=50)
    {
      Player.x=50
   }

  if (Player.y>=750)
    {
     Player.y=750;
    }

  if (Player.y<50)
   {
     Player.y=50;
   }

  if (keyDown("RIGHT_ARROW"))
    {
     Player.x=Player.x+1
    }

  if (keyDown("UP_ARROW"))

  {
      Player.y = Player.y-1;
    }

   if (keyDown("space"))
     {
       Nuker.x = Player.x;
       Nuker.y = Player.y -200;
       Nuker.velocityY = -5;
     }

    if (keyDown("DOWN_ARROW"))
     {
       Player.y = Player.y+1
     }

    if (Enemy.isTouching(Player))
     {
       Enemy.changeAnimation("boom",boomI);
       Player.changeAnimation("boom",boomI);
     }
  
    
    if(Nuker.isTouching(Enemy))
   {
     Enemy.changeAnimation("boom",boomI)
     Enemy.lifetime=10
     score = score+1
   }
  if (Nuker.isTouching(Enemy_2))
    {
      Enemy_2.changeAnimation("boom",boomI)
      Enemy_2.lifetime = 10;
      Score = score+1;
    }
    
   if(Enemy.isTouching(Nuker))
   {
     Nuker.visible=false;
   }

  if(Enemy.isTouching(Player))
  {
    Player.visible=false;
  }

  if(Enemy.isTouching(Player))
  {
    Game_Over.visible=true;
  }

  power_gen = panel1_voltage + panel2_voltage
  
  push();
  noStroke();
  fill(255,255,0)
  text("Score : ",620,37)
  text(power_gen,680,37)

  text("Temprature : ",620,56)
  text(temp,710,56);
  pop();
  
 //Enemy_Spawn();
  drawSprites();
}

function Enemy_Spawn()
{
     
  if(frameCount % 60 === 0)
  {
    var Enemy_3 = createSprite(200,300,10,10);
    Enmey_3.addImage(Enemy_3Image);
    Enemy_3.Math.round(random(80,700));
    Enemy_3.scale = 0.02;
    Enemy_3.velocityY = 0.5;
  }


  if(frameCount %60 === 0)
  {
    var Enemy_4 = createSprite(300,400,10,10);
    Enemy_4.addImage(Enemy_4Image);
    Enemy_4.scale = 0.02;
    Enemy_4.velocityY = 0.5;
  }

}