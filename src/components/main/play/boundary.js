/* eslint-disable no-undef */
class Boundary {
  constructor({ position }) {
    this.position = position;
    this.width = 40;
    this.height = 40;
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

module.exports = Boundary;
