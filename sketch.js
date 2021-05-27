var cursor;
var red;
var yellow;
var green;
var blue;
var music;

function setup() {
  createCanvas(windowWidth,windowHeight);

  cursor = createSprite(200,200,30,30);

  blue = createSprite(1190,650,320,30);
  red = createSprite(170,650,320,30);
  green = createSprite(510,650,320,30);
  yellow = createSprite(850,650,320,30);

  cursor.shapeColor = "black";

  red.shapeColor = "red";
  yellow.shapeColor = "yellow";
  blue.shapeColor = "blue";
  green.shapeColor = "green";

  cursor.velocityX = 0;
  cursor.velocityY = 3;
}

function preload() {
  music = loadSound("music.mp3");
}

function draw() {
  background(255,255,255);
  edges=createEdgeSprites();
  cursor.bounceOff(edges);

  music.play();

  //cursor touching red block
  if(cursor.isTouching(red) && cursor.bounceOff(red)){
    cursor.shapeColor = "red";

    music.pause();

    cursor.velocityX = 0;
    cursor.velocityY = 0;
  }

  //cursor touching blue block
  if(cursor.isTouching(blue) && cursor.bounceOff(blue)){
    cursor.shapeColor = "blue";

    music.play();
  }

  //cursor touching green block
  if(cursor.isTouching(green) && cursor.bounceOff(green)){
    cursor.shapeColor = "green";

    music.play();
  }

  //cursor touching yellow block 
  if(cursor.isTouching(yellow) && cursor.bounceOff(yellow)){
    cursor.shapeColor = "yellow";

    music.play();
  }
  
  drawSprites();
}

