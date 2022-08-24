import Boundary from "./boundary";

let boundary;
let mockImage;

describe("Boundary", () => {
  beforeEach(() => {
    mockImage = {
      src: "./randomSource.png",
    };
    boundary = new Boundary(
      {
        position: {
          x: 40,
          y: 100,
        },
        image: mockImage,
      },
      20
    );
  });

  describe("upon instantiation", () => {
    it("has a width and height equal to the length passed in", () => {
      expect(boundary.width).toBe(20);
      expect(boundary.height).toBe(20);
    });

    it("has a position that is passed in", () => {
      expect(boundary.position).toEqual({
        x: 40,
        y: 100,
      });
    });

    it("has an image that is passed in", () => {
      expect(boundary.image).toEqual({
        src: "./randomSource.png",
      });
    });
  });

  describe("draw", () => {
    it("calls drawImage on ctx to draw the boundary", () => {
      const mockCtx = {
        drawImage: () => undefined,
      };
      jest.spyOn(mockCtx, "drawImage");
      boundary.draw(mockCtx);
      expect(mockCtx.drawImage).toHaveBeenCalledTimes(1);
      expect(mockCtx.drawImage).toHaveBeenCalledWith(mockImage, 40, 100);
    });
  });

  describe("flash", () => {
    it("changes the image source from the regular to the white", () => {
      boundary.flash();
      expect(boundary.image.src).toBe("./randomSourceWhite.png");
    });

    it("changes the image source from the white to the regular", () => {
      mockImage.src = "./randomSourceWhite.png";
      boundary.flash();
      expect(boundary.image.src).toBe("./randomSource.png");
    });
  });
});
