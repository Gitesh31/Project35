//Creating some  variables
var dog,Happydog,database,foodS,foodStock,dogImg;
var canvas,bgImg;

function preload()
{
  //loading some images
  dogImg = loadImage("images/dogImg.png");
  Happydog = loadImage("images/dogImg1.png");

}

function setup() {
  canvas = createCanvas(500,500);
  
  database = firebase.database();

  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg);

  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
  bgImg = background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(Happydog);
  }

  drawSprites();

  textSize(20);
  stroke("red");
  text("Food Stock = " + foodStock);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref("/").update({
    Food:x
  }
  )
}