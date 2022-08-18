import { Howl } from "howler";

export default class PacMan {
  constructor(
    { position, velocity },
    tileLength,
    munchOne = new Howl({
      src: "./audio/munchOne.wav",
      volume: 0.4,
    }),
    munchTwo = new Howl({
      src: "./audio/munchTwo.wav",
      volume: 0.4,
    })
  ) {
    this.originalPosition = position;
    this.position = { ...this.originalPosition };
    this.originalVelocity = velocity;
    this.velocity = { ...this.originalVelocity };
    this.tileLength = tileLength;
    this.radius = (tileLength * 3) / 8;
    this.speed = tileLength / 8;
    this.radians = Math.PI / 4;
    this.openRate = Math.PI / 36;
    this.rotation = 0;
    this.lives = 2;
    this.isEating = false;
    this.munchOne = munchOne;
    this.munchTwo = munchTwo;
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
    ctx.lineTo(this.position.x - this.tileLength / 4, this.position.y);
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
    if (this.radians < Math.PI / 36 || this.radians > Math.PI / 4) {
      if (this.isEating)
        this.openRate < 0 ? this.munchOne.play() : this.munchTwo.play();
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

  reset() {
    this.position = { ...this.originalPosition };
    this.velocity = { ...this.originalVelocity };
    this.rotation = 0;
  }
}
