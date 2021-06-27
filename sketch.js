var issImg,iss,spaceCraft,hasDocked,spaceCraft1Img,space;
var spaceCraft2Img,spaceCraft3Img,spaceCraft4Img,spacebgImg;


function  preload(){
  issImg = loadImage("images/iss.png");
  spaceCraft1Img = loadImage("images/spacecraft1.png")
  spaceCraft2Img = loadImage("images/spacecraft2.png");
  spaceCraft3Img = loadImage("images/spacecraft3.png");
  spaceCraft4Img = loadImage("images/spacecraft4.png");
 // spacebgImg = loadImage("images/spacebg.jpg");
}

function setup() {
  createCanvas(800,400);

  spaceCraft = createSprite(400, 200, 50, 50);
  spaceCraft.addImage("spaceCraft",spaceCraft1Img);
  spaceCraft.scale = 0.3;
  
  iss = createSprite(200,200,20,20);
  iss.addImage("iss craft",issImg);

}

function draw() {
  background(255,255);
  

  drawSprites();

if(!hasDocked){
  if(keyCode === UP_ARROW){
    spaceCraft.y -= 2;
  }
  if(keyCode === DOWN_ARROW){
    spaceCraft.y += 2;
    spaceCraft.addImage("spaceCraft",spaceCraft2Img);
  }
  if(keyCode === RIGHT_ARROW){
    spaceCraft.x += 2;
    spaceCraft.addImage("spaceCraft",spaceCraft3Img);
  }
  if(keyCode === LEFT_ARROW){
    spaceCraft.x -= 2;
    spaceCraft.addImage("spaceCraft",spaceCraft4Img);
  }
  if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x-10)){ 
    hasDocked = true; 
    text("Docking Successful!", 200, 200); 
  
}


  iss.display();

}
}