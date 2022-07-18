class Boundary {
  constructor({ position }) {
    this.position = position;
    this.width = 20;
    this.height = 20;
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

module.exports = Boundary;
