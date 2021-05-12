const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

 
  var maxDrops=150;
  var drops=[];

  function preload(){
    bgImg=loadImage('snow3.jpg');
  }

function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  if(frameCount%150 === 0){
    for(var i=0 ; i<maxDrops; i++){
drops.push(new Snow(random(0,800),random(0,400)));
    }
  }
}

function draw() {
  Engine.update(engine);
  background(bgImg);  
  for(var i=0 ; i<maxDrops; i++){
    drops[i].showDrop();
    drops[i].updateY();
  }
  drawSprites();
}