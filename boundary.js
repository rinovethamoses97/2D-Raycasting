class Boundary{
    constructor(x1,y1,x2,y2){
        this.pos=new Object();
        this.pos.x1=x1;
        this.pos.y1=y1;
        this.pos.x2=x2;
        this.pos.y2=y2;
    }
    show(){
        stroke(255);
        line(this.pos.x1,this.pos.y1,this.pos.x2,this.pos.y2);
    }
}