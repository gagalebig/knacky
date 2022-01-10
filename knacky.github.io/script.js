function setup(){
  createCanvas(windowWidth-20, windowHeight-20 );
  background(220);
  x=(windowWidth-20)/2-25;
  y=(windowHeight-20)/2-25;
  d=3;
  tabCarres = [];
  noStroke();
  fill("orange");
  carre1 = new Carre(41,40,50,38,40,37,39,"yellow");
  carre2 = new Carre(101,25,50,90,83,81,68,"red");
  carre3 = new Carre(201,25,50,84,71,70,72,"blue");
}
function draw(){
  background(220); 
  
  carre1.test();
  carre2.test();
  carre3.test();
  
}

function Carre(x, y, size, up, down, left, right,c) {
  tabCarres.push(this);
  this.x = x;
  this.y = y;
  this.size = size;
  this.up = up;
  this.down = down;
  this.left = left;
  this.right = right;
  this.test = function() {
    
    this.ml = true;
    this.mr = true;
    this.md = true;
    this.mu = true;
    
    for (var i = 0; i < tabCarres.length; i++) {
      if (tabCarres[i].x != this.x && tabCarres[i].y != y){
        if(abs(tabCarres[i].x-this.x ) <= this.size+d){
          if(abs(tabCarres[i].y-this.y ) <= this.size+d){
            if(tabCarres[i].x-this.x <= 0){this.ml = false;
            } else {this.mr = false;}
          }             
        }
        if(abs(tabCarres[i].y-this.y ) <= this.size+d){
          if(abs(tabCarres[i].x-this.x ) <= this.size+d){
            if(tabCarres[i].y-this.y <= 0){this.md = false;
            } else {this.mu = false;}
          }             
        }
      }
    }
    
    if(keyIsDown(this.left) && this.x > 0 && this.ml) {this.x-=d}
    if(keyIsDown(this.right) && this.x < windowWidth-20-this.size && this.mr) {this.x+=d}
    if(keyIsDown(this.up) && this.y > 0 && this.md) {this.y-=d}
    if(keyIsDown(this.down) && this.y < windowHeight-20-this.size/2 && this.mu) {this.y+=d}
    
    
    fill(c);
    rect(this.x,this.y,this.size);
  };
}