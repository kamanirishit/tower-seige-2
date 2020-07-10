var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,ground,ball,sling;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
function setup() {
  createCanvas(800,400);
 
engine=Engine.create();
world=engine.world;
box1=new Box(500,50,50,50);
box2=new Box(500,100,50,50);
box3=new Box(450,100,50,50);
box4=new Box(550,100,50,50);
box5=new Box(500,150,50,50);
box6=new Box(450,150,50,50);
box7=new Box(400,150,50,50);
box8=new Box(550,150,50,50);
box9=new Box(600,150,50,50);
box10=new Box(500,200,50,50);
box11=new Box(550,200,50,50);
box12=new Box(600,200,50,50);
box13=new Box(650,200,50,50);
box14=new Box(450,200,50,50);
box15=new Box(400,200,50,50);
box16=new Box(350,200,50,50);
ball=new Ball(100,200,50,50);
sling=new SlingShot(ball.body,{x:100,y:100});
ground=new Ground(width/2,height-100,width,120);
Engine.run(engine); 
}

function draw() {
  background(255,255,255); 

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  ball.display();
  sling.display();
  ground.display();
  /*box1.remove();
  box2.remove();
  box3.remove();
  box4.remove();
  box5.remove();
  box6.remove();
  box7.remove();
  box8.remove();
  box9.remove();
  box10.remove();
  box11.remove();
  box12.remove();
  box13.remove();
  box14.remove();
  box15.remove();
  box16.remove();*/
  
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
;}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){
 sling.attach(ball.body);
  }
}