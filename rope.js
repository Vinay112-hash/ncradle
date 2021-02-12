class rope 
{
  constructor(bodyA,pointB) {

      var options={
      bodyA:bodyA,
      pointB:pointB,
      length:10,
      stiffness:0.04}
    
    this.rope=Constraint.create(options);
    this.bodyA=bodyA;
    this.pointB=pointB;
    World.add(world, this.rope);
  }
  display(){
   
      var pointA =this.bodyA.position;
    var pointB =this.pointB;
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
  }
}