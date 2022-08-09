export default class Boundary {
  constructor({ position, image }, length) {
    this.position = position;
    this.width = length;
    this.height = length;
    this.image = image;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }
}
