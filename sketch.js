//Create variables here
var dog , happyDog;
var database , foodS;
var foodStock;
var button1, button2;
var fedTime, lastFed;
var lastFed;
var washroom,bedroom,garden;

function preload()
{
 dog = loadImage('images'/'dogImg.png');
 dog = loadImage('images'/'dogImg1.png');
 washroom =loadImage('image'/'Wash Room.png');
 bedroom =loadImage('image'/'Bed Room.png');
 garden =loadImage('image'/'Garden.png');

	//load images here
}

function setup() {
  createCanvas(500, 500);
  
  dog.addImage(dogImg.png);
  dog.addImage(dogImg1.png);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  readState=database.ref('gameState');
  readState.on("value",function(data){
  gameState=data.val();
  });

   food ();

  feed =createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood =createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {  
background(46,139,87);

fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
});

if(gameState!="Hungry"){
  feed.hide();
  addfood.hide();
  dog.remove();
}else{
  feed.show();
  addFood.show();
  dog.addImage(sadDog);
}

   currentTime=hour();

   if(currentTime==(lastFed+1)){
     update("Playing");
     foodObj.garden();
      }else if(currentTime==(lastFed+2)){
        update("Sleeping");
        foodObj.bedroom();
      }else if(currentTime>(lastFed+2)&&currentTime<=(lastFed+4)){
        update("Bathing");
        foodObj.washroom();
      }else{
        update("Hungry");
        foodObj.display();
      }

}


display ();

  drawSprites();
  //add styles here
  textSize(20);
  fill(black);
  stroke('blue');



function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}

function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1)

  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function readStock(data){
  foodS = data.val();

}

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x = x-1;
}
}

  database.ref('/').update({
    Food:x
  })

  
  display(); {

     var x=80,y=100;

    imageMode(CENTER);
    image(this.image,720,220,70,70);

    if(this.foodStock!=0){
    for(var i=0;i<this.foodStock;i++){
    if(i%10==0){
      x=80;
      y=y+50;
    }
    image(this.image,x,y,50,50);
    x=x+30;
    }
    }
  }
  
function update(state) {
     database.ref('/').update({
       gameState:state
     });
}






