

var wallpaper,wallpaperimg
var astronautimg,astronaut
var bath,bathimg
var brush,brushimg
var drink,drinkimg
var eat,eatimg
var gym,gymimg
var move,moveimg




function preload() {

  wallpaperimg = loadImage("iss.png")
  astronautimg = loadImage("sleep.png")
  bathimg = loadAnimation("bath1.png","bath2.png")
  brushimg = loadAnimation("brush.png")
  drinkimg = loadAnimation("drink1.png","drink2.png")
  eatimg = loadAnimation("eat1.png","eat2.png")
  gymimg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png",)
  moveimg = loadAnimation("move.png","move1.png")







}


function setup() {
  createCanvas(windowWidth,windowHeight);
  
wallpaper = createSprite(400,200)
wallpaper.addImage("screen",wallpaperimg)

astronaut = createSprite(width/2,height/2)
astronaut.addImage("sleep",astronautimg)
astronaut.scale=0.2







}

function draw() {
  background(255,255,255); 


  if(keyDown("UP_ARROW")){
 astronaut.addAnimation("brushing",brushimg)
 astronaut.changeAnimation("brushing")
 astronaut.x=width/2
 astronaut.y=height/2
  }


 if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gymimg)
  astronaut.changeAnimation("gyming")
  astronaut.x=width/2
  astronaut.y=height/2
 }

 if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eatimg)
  astronaut.changeAnimation("eating")
  astronaut.x=width/2
  astronaut.y=height/2
 }

 if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bathimg)
  astronaut.changeAnimation("bathing")
  astronaut.x=width/2
  astronaut.y=height/2
 }

 if(keyDown("M")){
astronaut.addAnimation("moveing",moveimg)
astronaut.changeAnimation("moveingj",moveimg)
 astronaut.x=width/2
 astronaut.y=height/2
 }

 if(keyDown("D")){
  astronaut.addAnimation("drinking",drinkimg)
  astronaut.changeAnimation("drinking")
  astronaut.x=width/2
  astronaut.y=height/2
 }


  drawSprites();
  }
  
  







