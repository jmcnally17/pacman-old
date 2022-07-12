/* eslint-disable no-undef */
class Ghost {
  constructor({ position, velocity, colour }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 15;
    this.colour = colour;
    this.prevCollisions = [];
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.colour;
    ctx.fill();
    ctx.closePath();
  }

  update(ctx) {
    this.draw(ctx);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

module.exports = Ghost;
