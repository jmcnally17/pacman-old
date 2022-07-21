export default class Ghost {
  static speed = 2.5;
  constructor({ position, velocity, colour, image }) {
    this.originalPosition = position;
    this.position = { ...this.originalPosition };
    this.originalVelocity = velocity;
    this.velocity = { ...this.originalVelocity };
    this.radius = 7.5;
    this.colour = colour;
    this.prevCollisions = [];
    this.speed = 2.5;
    this.isScared = false;
    this.scaredTimeout = null;
    this.image = image;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x - 15, this.position.y - 15);
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
