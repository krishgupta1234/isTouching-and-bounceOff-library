var movingrect,fixrect;
var sprite1,sprite2,sprite3,sprite4;
var krish,vaibhav

function setup() {
createCanvas(800,400);
 movingrect= createSprite(400, 200, 50, 50);
movingrect.shapeColor = "green";
movingrect.debug = true;

fixrect = createSprite(200,200,60,100);
fixrect.shapeColor = "green";
fixrect.debug = true;

sprite1 = createSprite(100,100,70,70);
sprite1.shapeColor = "green";
sprite1.debug = true;
sprite2 = createSprite(300,100,70,70);
sprite2.shapeColor = "green";
sprite2.debug = true;
sprite3 = createSprite(500,100,70,70);
sprite3.shapeColor = "green";
sprite3.debug = true;
sprite4 = createSprite(700,100,70,70);
sprite4.shapeColor = "green";
sprite4.debug = true;
krish = createSprite(200,330,40,40);
krish.shapeColor = "yellow";
krish.debug = true;
vaibhav = createSprite(700,330,40,40);
vaibhav.shapeColor = "yellow";
vaibhav.debug = true;

krish.velocityX = 3;
vaibhav.velocityX = -3;


}

function draw() {
  background(0,0,0); 
  
  movingrect.x = mouseX;
movingrect.y = mouseY;






bounceOff(krish,vaibhav);



if(isTouching(movingrect,sprite2)){
  movingrect.shapeColor = "blue";
  sprite2.shapeColor = "blue";
  }
  else{
  movingrect.shapeColor = "green";
  sprite2.shapeColor = "green";
  }


  drawSprites();
}










