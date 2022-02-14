class Circle{
    constructor(x, y, r) {
        var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5,
    };
    this.x = x
    this.y = y
    this.r = r
    this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options)
    World.add(world, this.body);
    }
    display(){
        var circlepos = this.body.position;

        push();
    translate(circlepos.x, circlepos.y);
    strokeWeight(3);
    stroke('white')
    fill('blue')
    rectMode(CENTER)
    ellipse(0, 0, this.r, this.r);
    pop();
  };
};
    