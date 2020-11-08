var stella,pen;

function setup() {
  createCanvas(800,400);
  stella = createSprite(400, 400, 50, 50);
  stella.shapeColor = "cyan";
  stella.velocityY = -3;
  pen = createSprite(400,0,30,30);
  pen.shapeColor = "pink" 
  pen.velocityY = 3
}

function draw() {
  background(0);  
  //stella.x = mouseX;
  //stella.y = mouseY;

  console.log(stella.x)

  if(stella.x - pen.x < stella.width/2  +  pen.width/2 && pen.x - stella.x < pen.width/2+stella.width/2){
  stella.velocityX = - stella.velocityX
  pen.velocityX = - pen.velocityX
  }
 if(stella.y - pen.y < stella.height/2 + pen.height/2 && pen.y - stella.y < pen.height/2+stella.height/2){
  stella.velocityY = -stella.velocityY
  pen.velocityY = - pen.velocityY
 }

  drawSprites();
}