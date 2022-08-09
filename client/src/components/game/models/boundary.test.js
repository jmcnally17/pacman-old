import Boundary from "./boundary";

let boundary;
let mockImage;

describe("Boundary", () => {
  beforeEach(() => {
    mockImage = {
      src: "./randomSource",
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

    it("has a position that is passed in on instantiation", () => {
      expect(boundary.position).toEqual({
        x: 40,
        y: 100,
      });
    });

    it("has an image that is passed in on instantiation", () => {
      expect(boundary.image).toEqual({
        src: "./randomSource",
      });
    });
  });

  describe("draw", () => {
    it("calls drawImage on ctx to draw the boundary", () => {
      const mockCtx = {
        drawImage: () => undefined,
      };
      const ctxSpy = jest.spyOn(mockCtx, "drawImage");
      boundary.draw(mockCtx);
      expect(ctxSpy).toHaveBeenCalledTimes(1);
    });
  });
});
