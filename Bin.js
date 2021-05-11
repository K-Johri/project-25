class Bin{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this.wallThickness = 20;
        this.angle = 0;
        this.image = loadImage("bin.png");

        this.boxLeftBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness
            ,this.dustbinHeight,{
            isStatic:true
        })
        World.add(world,this.boxLeftBody)

        this.boxBottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{
            isStatic:true
        })
        World.add(world,this.boxBottomBody)

        this.boxRightBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness
            ,this.dustbinHeight,{
            isStatic:true
        })
        World.add(world,this.boxRightBody)
        Matter.Body.setAngle(this.boxLeftBody,this.angle);
        Matter.Body.setAngle(this.boxRightBody,-1*this.angle);
    }
    display(){
        var bottomPosition = this.boxBottomBody.position;
        var leftPosition = this.boxLeftBody.position;
        var rightPosition = this.boxRightBody.position;

        push();
        translate(bottomPosition.x,bottomPosition.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("white");
        //rect(0,0,this.dustbinWidth,this.wallThickness);
        imageMode(CENTER);
        image(this.image,0,-this.dustbinHeight/3,this.dustbinWidth+270,this.dustbinHeight+75);
        pop();

        push();
        translate(leftPosition.x,leftPosition.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(this.angle)
        fill("white");
        //rect(0,0,this.wallThickness,this.dustbinHeight);
        pop();

        push();
        translate(rightPosition.x,leftPosition.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(-1*this.angle)
        fill("white");
        //rect(0,0,this.wallThickness,this.dustbinHeight);
      
        pop();

    }
}