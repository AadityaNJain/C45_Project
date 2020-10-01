class Wall{
    constructor(x,y){
      var options = {
          isStatic: true,
          friction: 1.0,
          restitution: 0.1
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      World.add(world,this.body);
      this.x = 0;
      this.y = 0;
    }

    display(){
        fill(255);
        stroke(255);
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(this.x,this.y,0,0);
        pop();
    }
}