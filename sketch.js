//Create variables here

var dog, database;
var foodStock;
var dog1, dog2;
var foodOBJ, fedTime, lastFed;
var feed, add;

function preload()
{
	//load images here
  dog1 = loadImage("images/dogImg.png");
  dog2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(1400, 700);

  database = firebase.database();

  dog = createSprite(1200, 350, 50, 50);
  dog.addImage(dog1);
  dog.scale = 0.2;

  foodOBJ = new Food();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  foodStock.set(20);

   feed = createButton("Feed The Dog")
   feed.position(780, 100)
   feed.mousePressed(feedDog)

   addfood = createButton("Add Food")
   addfood.position(900, 100)
   addfood.mousePressed(addFood)

  
}


function draw() {  

  background("green");

  drawSprites();

  foodOBJ.display();

  fedTime = database.ref("FeedTime")
  fedTime.on("value", function (data){
    lastFed = data.val()
  })
  
  textSize(15)
  fill("white")
  if(lastFed >= 12)
  {
    text("Last Feed : " + lastFed % 12 + " PM", 480, 65)
  }

  else if(lastFed === 0)
  {
    text("Last Feed : 12 AM", 480, 65)
  }

  else
  {
    text("Last Feed : " + lastFed + " AM", 480, 65)
  }

  //add styles here
}

function readStock(data)
{
   foodS = data.val()
   foodOBJ.updateFoodStock(foodS)
}

function feedDog()
{
  dog.addImage(dog2)

  foodOBJ.updateFoodStock(foodOBJ.getFoodStock()-1)
  database.ref('/').update({
    Food: foodOBJ.getFoodStock(),
    FeedTime : Hour()
  })
}

function addFood()
{
  foodS++;

  database.ref('/').update({
    Food: foodS
  })
}