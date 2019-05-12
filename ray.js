class Ray{
    constructor(x,y,a){
        this.pos=createVector(x,y);
        this.dir=p5.Vector.fromAngle(a);
    }
    update(x,y){
        this.pos.x=x;
        this.pos.y=y;
    }
    show(){
        stroke(255);
        line(this.pos.x,this.pos.y,(this.dir.x*10)+this.pos.x,(this.dir.y*10)+this.pos.y);
    }
    intersect(walls){
        var closestWall;
        var closestWallX;
        var closestWallY;
        var status=false;
        var d=Infinity;
        for(var j=0;j<walls.length;j++){
            var wall=walls[j];
            var x1=wall.pos.x1;
            var y1=wall.pos.y1;
            var x2=wall.pos.x2;
            var y2=wall.pos.y2;
            var x3=this.pos.x;
            var y3=this.pos.y;
            var x4=(this.dir.x*10)+this.pos.x;
            var y4=(this.dir.y*10)+this.pos.y;
            var den=((x1-x2)*(y3-y4))-((y1-y2)*(x3-x4));
            var t=(((x1-x3)*(y3-y4))-((y1-y3)*(x3-x4)))/den;
            var u=-((((x1-x2)*(y1-y3))-((y1-y2)*(x1-x3)))/den);
            if( (t>=0 && t<=1) &&(u>=0)){
                status=true;
                var px=x1+(t*(x2-x1));
                var py=y1+(t*(y2-y1));
                var temp=dist(this.pos.x,this.pos.y,px,py);
                if(temp<d){
                    d=temp;
                    closestWall=walls[j];
                    closestWallX=px;
                    closestWallY=py;
                }
            }
        }
        if(status){
            return {status:true,x:closestWallX,y:closestWallY}
        }
        else{
            return {status:false};
        }
    }
}