var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;


var backgroundImg
var snow = [];


function preload(){
  var backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
 
 
 
 
 
 
 
 
 
  drawSprites();






    for (var g = 0; g < snow.length; g++) {
      snow[g].display();
    }
}