export default class PacMan {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 7.5;
    this.speed = 2.5;
    this.radians = Math.PI / 4;
    this.openRate = Math.PI / 48;
    this.rotation = 0;
    this.lives = 2;
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
      this.radius * 2,
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

  reset() {
    this.position.x = 290;
    this.position.y = 470;
    this.velocity.x = 0;
    this.velocity.y = 0;
    this.rotation = 0;
  }
}
