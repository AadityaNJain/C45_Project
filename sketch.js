const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var man;
var start_Img1;
var run_Img1;
var run_Img2;
var start_Img2;
var jump_Img1;
var land_Img1;
var jump_Img2;
var land_Img2;
var man;
var facing = "right";
var facing1 = "left";
/*var wall1;
var wall2;
var wall3;
var wall4;
var wall5;
var wall6;
var wall7;
var wall8;
var wall9;
var wall10;
var wall11;
var wall12;
var wall13;
var wall14;
var wall15;
var wall16;
var wall17;
var wall18;
var wall19;
var wall20;
var wall21;
var wall22;
var wall23;
var wall24;
var wall25;*/

function preload(){
  start_Img1 = loadImage("Image/start.png");
  run_Img1 = loadImage("Image/running.png");
  run_Img2 = loadImage("Image/running copy.png");
  start_Img2 = loadImage("Image/start copy.png");
  jump_Img1 = loadImage("Image/jumping.png");
  land_Img1 = loadImage("Image/landing.png");
  jump_Img2 = loadImage("Image/jumping copy.png");
  land_Img2 = loadImage("Image/landing copy.png");
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  engine = Matter.Engine.create();
  world = engine.world;

  man = createSprite(100,175,20,20);
  man.addImage("start1",start_Img1);
  man.addImage("run1",run_Img1);
  man.addImage("run2",run_Img2);
  man.addImage("start2",start_Img2);
  man.addImage("jump",jump_Img1);
  man.addImage("land",land_Img1);
  man.addImage("jump",jump_Img2);
  man.addImage("land",land_Img2);
  man.scale = 0.04;

  wall1 = new Wall(25,25);
  wall2 = new Wall(75,25);
  wall3 = new Wall(125,25);
  wall4 = new Wall(175,25);
  wall5 = new Wall(225,25);
  wall6 = new Wall(275,25);
  wall7 = new Wall(325,25);
  wall8 = new Wall(375,25);

  wall9 = new Wall(25,50);
  wall10 = new Wall(25,100);
  wall11 = new Wall(25,150);
  wall12 = new Wall(25,200);
  wall13 = new Wall(25,250);

  wall14 = new Wall(75,250);
  wall15 = new Wall(125,250);
  wall16 = new Wall(175,250);
  wall17 = new Wall(225,250);
  wall18 = new Wall(275,250);
  wall19 = new Wall(325,250);
  wall20 = new Wall(375,250);
  wall21 = new Wall(425,250);
  wall22 = new Wall(475,250);
  wall23 = new Wall(525,250);
  wall24 = new Wall(575,250);
  wall25 = new Wall(625,250);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("grey");
  createEdgeSprites();

  if(keyWentDown("RIGHT_ARROW")){
    man.velocityX = 2;
    man.velocityY = 0;
    if(facing === "right"){
    man.changeImage("run1",run_Img1);
    }
    man.scale = 0.2;
  }

  if(keyWentUp("right")){
    man.velocityX = 0;
    man.velocityY = 0;
    if(facing === "right"){
    man.changeImage("start1",start_Img1);
    }
    man.scale = 0.04;
  }

  /*if(keyWentDown("up")){
    man.velocityX = 0;
    man.velocityY = -2;
    if(facing === "right"){
    man.changeImage("jump",jump_Img1);
    }
    man.scale = 0.2;
  }

  if(keyWentUp("up")){
    man.velocityX = 0;
    man.velocityY = 2;
    if(facing === "right"){
    man.changeImage("land",land_Img1);
    }
    man.scale = 0.2;
  }*/

  if(keyWentDown("left")){
    man.velocityX = -2;
    man.velocityY = 0;
    if(facing1 === "left"){
    man.changeImage("run2",run_Img2);
    }
    man.scale = 0.2;
  }

  if(keyWentUp("left")){
    man.velocityX = 0;
    man.velocityY = 0;
    if(facing1 === "left"){
    man.changeImage("start2",start_Img2);
    }
    man.scale = 0.04;
  }

  /*if(keyWentDown("up")){
    man.velocityX = 0;
    man.velocityY = -2;
    if(facing1 === "left"){
    man.changeImage("jump",jump_Img2);
    }
    man.scale = 0.2;
  }

  if(keyWentUp("up")){
    man.velocityX = 0;
    man.velocityY = 2;
    if(facing1 === "left"){
    man.changeImage("land",land_Img2);
    }
    man.scale = 0.2;
  }*/
  
    wall1.display(); 
    wall2.display();
    wall3.display(); 
    wall4.display();
    wall5.display(); 
    wall6.display();
    wall7.display(); 
    wall8.display();

    wall9.display(); 
    wall10.display();
    wall11.display(); 
    wall12.display();

    wall13.display(); 
    wall14.display();
    wall15.display(); 
    wall16.display();
    wall17.display(); 
    wall18.display();
    wall19.display(); 
    wall20.display();
    wall21.display();
    wall22.display(); 
    wall23.display();
    wall24.display();
    wall25.display();
    
    //camera.position.x = displayWidth/2;
    //camera.position.y = man.y;

  drawSprites();
}