var back,caps,e1,e2,e3,e4,e5,li;
var cap,tal,kin,pri;
var las,dess,dese,le;
var gameState;
var start;
var captain,enemy1;
var bullet;

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  gameState = "menu";
   captain = createSprite(displayWidth/2,displayHeight/1.2,50,50);
   captain.addImage('c',caps);
  
  if (gameState==="menu"){
    start = createButton("Start");
    
  }
  
}

function preload(){
 // back = loadImage("SpaceShips/Space.jpg");
  caps = loadImage("SpaceShips/Cap.png");
  e1   = loadImage("SpaceShips/E1.png");
  e2   = loadImage("SpaceShips/E2.png");
//  e3   = loadImage("SpaceShips/E3.jpg");
//  e4   = loadImage("SpaceShips/E4.jpg");
//  e5   = loadImage("SpaceShips/Talon.jpg");
//  li   = loadImage("SpaceShips/Life.png");
  
 cap  = loadImage("Characters/Captain.jpg");
 tal  = loadImage("Characters/Talon.jpg");
 kin  = loadImage("Characters/King.jpg");
 pri  = loadImage("Characters/Princess.jpg");
  
 las  = loadSound("Sounds/Laser_Shoot.mp3");
  

  
  

}
function draw() {
  background("black");
  
 start.mousePressed(()=>{
   start.hide();
   gameState="lev1";
   
 })
 if(gameState==="lev1"){
   
  for(var j = 50; j < displayHeight-250;j = j +100){
   for (var i = 200; i<displayWidth-200;i = i +100){
    enemy1 = createSprite(i,j,50,50);
    enemy1.addImage('e01',e1);
    enemy1.scale=0.75; 
    }
  }
   
   captain.x = mouseX;
  
   if(keyDown("SPACE")){
     
     bullet=createSprite(captain.x,captain.y,10,30);
     bullet.shapeColor="red";
     bullet.velocityY=-10;
     play('las1',las);
   } 
  
    start.hide();
    
 }

  
  drawSprites();
}