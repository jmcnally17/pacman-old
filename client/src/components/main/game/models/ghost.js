class Ghost {
  static speed = 2.5;
  constructor({ position, velocity, colour }) {
    this.originalPosition = position;
    this.position = { ...this.originalPosition };
    this.originalVelocity = velocity;
    this.velocity = { ...this.originalVelocity };
    this.radius = 15;
    this.colour = colour;
    this.prevCollisions = [];
    this.speed = 2.5;
    this.isScared = false;
    this.scaredTimeout = null;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.isScared ? "blue" : this.colour;
    ctx.fill();
    ctx.closePath();
  }

  update(ctx) {
    this.draw(ctx);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  changeScaredState() {
    this.isScared = this.isScared ? false : true;
  }

  reset() {
    this.position = { ...this.originalPosition };
    this.velocity = { ...this.originalVelocity };
    this.prevCollisions = [];
  }
}

module.exports = Ghost;
