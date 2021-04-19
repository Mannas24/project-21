var canvas,box;
var music,plate1,plate2,plate3,plate4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,525);

box = createSprite(random(20,750))

plate1 = createSprite(200,500,90,20)
plate2 = createSprite(340,500,90,20)
plate3 = createSprite(480,500,90,20)
plate4 = createSprite(620,500,90,20)

}

function draw() {
    background(rgb(139,69,19));
    box.velocityX=-2;
   box.velocityY=2;
   box.scale=0.5;
 //  box = bounceOff(edges)

 drawSprites();
;

}
