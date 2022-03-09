class Cannon_ball {
  constructor(x, y) {
    this.raio = 30
    var options = {
      isStatic:true
    }
    this.bodies = Bodies.circle(x, y, this.raio, options)
    this.cannon_ball = loadImage("./assets/cannonball.png");
    World.add(world,this.bodies)
  }
  show(){
    var pos = this.bodies.position
    push()
    imageMode(CENTER)
    image(this.cannon_ball, pos.x, pos.y, this.raio, this.raio)
    pop()
  }
  shoot(){
    Matter.Body.setStatic(this.bodies,false)
    var new_angle = cannon.angle - 28
    new_angle = new_angle * (3.14/180)
    var velocity = p5.Vector.fromAngle(new_angle)
    velocity.mult(0.5)
    Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})
  }
}
