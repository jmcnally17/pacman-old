/* eslint-disable no-undef */
class PacMan {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 15;
    this.speed = 5;
    this.radians = Math.PI / 4;
    this.openRate = Math.PI / 48;
    this.rotation = 0;
    this.lives = 3;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.rotate(this.rotation);
    ctx.translate(-this.position.x, -this.position.y);
    ctx.beginPath();
    ctx.arc(
      this.position.x,
      this.position.y,
      this.radius,
      this.radians,
      Math.PI * 2 - this.radians
    );
    ctx.lineTo(this.position.x - 5, this.position.y);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  update(ctx) {
    this.checkRotation();
    this.draw(ctx);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.velocity.x !== 0 || this.velocity.y !== 0) {
      this.chomp();
    } else {
      this.radians = Math.PI / 4;
    }
  }

  chomp() {
    if (this.radians < Math.PI / 48 || this.radians > Math.PI / 4) {
      this.openRate = -this.openRate;
    }
    this.radians += this.openRate;
  }

  checkRotation() {
    if (this.velocity.x > 0) this.rotation = 0;
    else if (this.velocity.x < 0) this.rotation = Math.PI;
    else if (this.velocity.y > 0) this.rotation = Math.PI / 2;
    else if (this.velocity.y < 0) this.rotation = (Math.PI * 3) / 2;
  }

  loseLife() {
    this.lives--;
  }
}

module.exports = PacMan;
