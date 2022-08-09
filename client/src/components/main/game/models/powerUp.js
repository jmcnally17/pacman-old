export default class PowerUp {
  constructor({ position }, length) {
    this.position = position;
    this.radius = (length * 7) / 20;
    this.hasBeenEaten = false;
    this.rate = -length / 20;
    this.length = length;
  }

  changeEatenState() {
    this.hasBeenEaten = this.hasBeenEaten ? false : true;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }

  flash() {
    if (
      this.radius <= this.length / 10 ||
      this.radius >= (this.length * 7) / 20
    ) {
      this.rate = -this.rate;
    }
    this.radius += this.rate;
  }
}
