export default class Ghost {
  constructor({ position, velocity, colour, image }, length) {
    this.originalPosition = position;
    this.position = { ...this.originalPosition };
    this.originalVelocity = velocity;
    this.velocity = { ...this.originalVelocity };
    this.length = length;
    this.radius = (length * 3) / 8;
    this.colour = colour;
    this.prevCollisions = [];
    this.speed = length / 8;
    this.isScared = false;
    this.scaredTimeout = null;
    this.isHunting = false;
    this.huntingInterval = null;
    this.isRecovering = false;
    this.recoveringTimeout = null;
    this.image = image;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x - this.radius * 2,
      this.position.y - this.radius * 2
    );
  }

  update(ctx) {
    this.draw(ctx);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  changeScaredState() {
    this.isScared = this.isScared ? false : true;
  }

  changeHuntingState() {
    this.isHunting = this.isHunting ? false : true;
  }

  changeRecoveringState() {
    this.isRecovering = this.isRecovering ? false : true;
  }

  reset() {
    this.position = { ...this.originalPosition };
    this.velocity = { ...this.originalVelocity };
    this.speed = this.length / 8;
    this.prevCollisions = [];
    if (this.isScared) this.changeScaredState();
    clearTimeout(this.scaredTimeout);
  }

  resetHuntingState() {
    if (this.isHunting) this.changeHuntingState();
    clearInterval(this.huntingInterval);
  }

  resetRecoveringState() {
    if (this.isRecovering) this.changeRecoveringState();
    clearTimeout(this.RecoveringTimeout);
  }
}
