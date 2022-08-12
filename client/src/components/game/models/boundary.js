export default class Boundary {
  constructor({ position, image }, tileLength) {
    this.position = position;
    this.width = tileLength;
    this.height = tileLength;
    this.image = image;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }
}
