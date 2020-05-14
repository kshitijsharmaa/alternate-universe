//declaring variables for sprites and their animations
var sun, earth, mars, jupiter;
var sunSprite, earthSprite, marsSprite, jupiterSprite;
function setup() {
  createCanvas(800,400);
  //load sprite into RAM
  earthSprite = loadImage("sprites/sprite-0001.png");
  marsSprite = loadImage("sprites/sprite-0002.png");
  jupiterSprite = loadImage("sprites/jupiter.png");
  sunSprite = loadImage("sprites/sun.png");
  //making sprite instances
  sun = createSprite(400,200,50,50);
  earth = createSprite(400,100,20,20);
  mars = createSprite(400,300,15,15);
  jupiter = createSprite(200,200,40,40);
  //adding animations to sprites
  sun.addImage(sunSprite,"sprites/sun.png");
  earth.addImage(earthSprite,"sprites/sprite-0001.png");
  mars.addImage(marsSprite,"sprites/sprite-0002.png");
  jupiter.addImage(jupiterSprite,"sprites/jupiter.png");
  //setting the colliders
  sun.setCollider("circle");
  earth.setCollider("circle");
  mars.setCollider("circle");
  jupiter.setCollider("circle");
}
function draw() {
  background("black");  
  //statements to make the planets disappear when they touch the sun
  if(frameCount % 30 === 0){
    sun.scale = sun.scale +1;
  }
  if (sun.collide(earth)){
    earth.destroy(); 
  }
  if (sun.collide(mars)){
    mars.destroy(); 
  }
  if (sun.collide(jupiter)){
    jupiter.destroy(); 
  }

  drawSprites();
}