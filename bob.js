class bob {
    constructor(x, y, diameter) {
      var options = {
        isStatic:false,
         restitution:1,
         friction:0, 
        density:0.8
      }
      this.body = Bodies.circle(x,y,diameter/2, options);
      this.x=x;
      this.y=y;
      this.diameter=diameter;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
    
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      fill(255,0,255);
      ellipse(0, 0, this.diameter/2, this.diameter/2);
      pop();

      
      
    }
  };

