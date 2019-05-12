var walls=[];
var ray;
var particle
function setup(){
    createCanvas(600,600);
    for(var i=0;i<5;i++){
        walls[i]=new Boundary(random(width),random(height),random(width),random(height));
    }
    // Adding four boundaries
    walls.push(new Boundary(0,0,width,0));
    walls.push(new Boundary(0,height,width,height));
    walls.push(new Boundary(0,0,0,height));
    walls.push(new Boundary(width,0,width,height));
    particle=new Particle();
}
function draw(){
    background(0);
    for(var i=0;i<walls.length;i++){
        walls[i].show();
    }
    particle.update();
    particle.show();
    particle.intersectCheck(walls);
}