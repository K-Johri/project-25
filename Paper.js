class Paper{
    constructor(x,y,r){
        var options = {
            density : 1.2,
            friction : 0.5,
            restitution : 0.3,
            isStatic : false
        }
this.x = x;
this.y = y;
this.r = r;
this.image = loadImage("paper.png");
this.body = Bodies.circle(this.x,this.y,this.r/2,options);
World.add(world,this.body);
    }

    display(){
        var position = this.body.position;
        push();
        translate(position.x,position.y);
        rectMode(CENTER);
        fill("pink");
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();

    }
}