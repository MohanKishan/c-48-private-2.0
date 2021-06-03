// for food
var worm,orangeWorm,blueWorm;
var biscute,cake,op,panipuri,vadapav,samosa
var foodGroup,opGroup;
var biscuteimg,cakeimg,opimg,panipuriimg,vadapavimg,samosaimg,bgImg
var score=0;
var size=0.1
var db
function preload() {
  bgImg=loadImage("images/bgImg.jpg")
  wormImg=loadImage("images/blue worm.png")
  biscuteimg=loadImage("images/biscute.png")
  cakeimg=loadImage("images/cake.png")
  opimg=loadImage("images/op.png")
  panipuriimg=loadImage("images/panipuri.png")
  vadapavimg=loadImage("images/vada pav.png")
  samosaimg=loadImage("images/samosa.png")
}
function setup(){
  createCanvas(displayWidth-20,displayHeight-20);
  db=firebase.database();
  bg=createSprite(width/2,height/2,width*4,height)
  bg.addImage(bgImg);
  // worm=createSprite(width/2,height/2)
  // worm.addImage(wormImg)
  // worm.debug=true
  // worm.setCollider("rectangle",0,0,550,100)

  player= new Player();
  player.createWormSprites();
 
foodGroup=new Group();
opGroup=new Group();
createFood();
} 

function draw() {
  //set background to white
  background("red")
// image(bgImg,0,0,displayWidth,displayHeight)
  textSize(20);
  fill("yellow")
  text("Score : "+score, width/2,100)
  
  // worm.x=mouseX;
  // worm.y=mouseY;
  // worm.scale=size;

  // camera.position.x=worm.x
  if(frameCount%250===0)
  createFood();
  
  touchFood();
  touchingBorders();
  drawSprites();
 
}
function touchFood(){
  for (var i = 0; i < foodGroup.length; i++) {
    if(foodGroup.get(i).isTouching(worm)){
      // console.log(foodGroup.get(i))
      foodGroup.get(i).destroy();
      score=score+1
      size=size+0.001
    }
  }

  for (var i = 0; i < opGroup.length; i++) {
    if(opGroup.get(i).isTouching(worm)){
      // console.log(opGroup.get(i))
      opGroup.get(i).destroy();
      score=score+10
      size=size+0.1
    }
  }
 
}

function touchingBorders(){
  edges=createEdgeSprites();
  if(worm.isTouching(edges)){
    size=0.1;
    score=0;
  }

}


function createFood(){
  biscute=createSprite(random(20,width-20),random(20,height-20))
  biscute.addImage(biscuteimg);
  biscute.scale=0.2
// biscute.lifetime=50;
//complete all these..k


cake=createSprite(random(20,width-20),random(20,height-20))
cake.addImage(cakeimg);
cake.scale=0.2

if(frameCount%500===0){
  op=createSprite(random(20,width-20),random(20,height-20))
  op.addImage(opimg);
  op.scale=0.2
}



panipuri=createSprite(random(20,width-20),random(20,height-20))
panipuri.addImage(panipuriimg);
panipuri.scale=0.2

vadapav=createSprite(random(20,width-20),random(20,height-20))
vadapav.addImage(vadapavimg);displayWidth
vadapav.scale=0.2

samosa=createSprite(random(20,width-20),random(20,height-20))
samosa.addImage(samosaimg);
samosa.scale=0.2

biscute.debug=true
cake.debug=true
op.debug=true
panipuri.debug=true
vadapav.debug=true
samosa.debug=true

biscute.setCollider("circle",0,0,100)
cake.setCollider("circle",0,0,100)
op.setCollider("circle",0,0,100)
panipuri.setCollider("circle",0,0,100)
vadapav.setCollider("circle",0,0,100)
samosa.setCollider("circle",0,0,100)

foodGroup.add(biscute)
  foodGroup.add(cake)
 
  foodGroup.add(panipuri)
  foodGroup.add(vadapav)
  foodGroup.add(samosa)

  opGroup.add(op)

}


