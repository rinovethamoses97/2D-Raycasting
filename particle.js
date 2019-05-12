class Particle{
    constructor(){
        this.pos=createVector(width/2,height/2);
        this.rays=[];
        for(var i=0;i<360;i+=1){
            this.rays.push(new Ray(this.pos.x,this.pos.y,radians(i)));
        }
    }
    show(){
        fill(255);
        ellipse(this.pos.x,this.pos.y,4);
        for(var i=0;i<this.rays.length;i++){
            this.rays[i].update(this.pos.x,this.pos.y);
            this.rays[i].show();
        }
    }
    update(){
        this.pos.x=mouseX;
        this.pos.y=mouseY;
    }
    intersectCheck(walls){
        for(var i=0;i<this.rays.length;i++){
            var result=this.rays[i].intersect(walls);
            if(result.status){
                stroke(255,0,0);
                fill(255);
                line(this.pos.x,this.pos.y,result.x,result.y);
            }
        }
    }
}