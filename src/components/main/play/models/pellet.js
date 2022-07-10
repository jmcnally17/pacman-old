/* eslint-disable no-undef */
class Pellet {
  constructor({ position }) {
    this.position = position;
    this.radius = 3;
    this.hasBeenEaten = false;
  }

  becomeEaten() {
    this.hasBeenEaten = true;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
}

module.exports = Pellet;
