export default class Boundary {
  constructor({ position, image }) {
    this.position = position;
    this.width = 20;
    this.height = 20;
    this.image = image;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }
}
