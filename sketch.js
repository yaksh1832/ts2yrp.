const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1, stand2;
var block1,block2, block3, block4, block5, block6, block7;
var block8, block9, block10, block11, block12;
var block13, block14, block15;
var block16;

var piece1, piece2, piece3, piece4, piece5;
var piece6, piece7, piece8;
var piece9;

var polygon, polygonImg;

var sling;

function preload(){
    polygonImg = loadImage("polygon.png");
}


function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    stand1= new Ground(570,500,280,20);
    stand2= new Ground(860,300,230,20);

    //level1
    block1= new Box(480,470,30,40);
    block2= new Box(510,470,30,40);
    block3= new Box(540,470,30,40);
    block4= new Box(570,470,30,40);
    block5= new Box(600,470,30,40);
    block6= new Box(630,470,30,40);
    block7= new Box(660,470,30,40);

    //level2
    block8= new Box(510,430,30,40);
    block9= new Box(540,430,30,40);
    block10= new Box(570,430,30,40);
    block11= new Box(600,430,30,40);
    block12= new Box(630,430,30,40);

    //level 3
    block13= new Box(540,390,30,40);
    block14=new Box(570,390,30,40);
    block15= new Box(600,390,30,40);

    //level 4
    block16= new Box(570,350,30,40);

    
    polygon= Bodies.circle(200,500,20);
    World.add(world,polygon);

    console.log(polygon);

  sling= new SlingShot(polygon, {x:150, y: 450});

  //set2

  //level 1

  piece1= new Box(800,250,30,40);
  piece2=new Box(830,250,30,40);
  piece3=new Box(860,250,30,40);
  piece4= new Box(890,250,30,40);
  piece5= new Box(920,250,30,40);

  //level2
piece6= new Box(830,210,30,40);
piece7= new Box(860,210,30,40);
piece8= new Box(890,210,30,40);

//level3
piece9= new Box(860,170,30,40);
  

    

}

function draw(){
    background("lightgray");
    Engine.update(engine);
    stand1.display();
    stand2.display();

    fill("lightblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    piece1.display();
    piece2.display();
    piece3.display();
    piece4.display();
    piece5.display();

    fill("lightpink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    piece6.display();
    piece7.display();
    piece8.display();

    fill("blue");
    block13.display();
    block14.display();
    block15.display();

    piece9.display();

    fill("red");
    block16.display();

    var angle = polygon.angle;

    
    posX=polygon.position.x;
    posY=polygon.position.y;
    
    imageMode(CENTER);
    image(polygonImg,posX,posY,50,50);
    

    sling.display();

    drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}