import Pellet from "./pellet";

let pellet;
let eatenPellet;

describe("Pellet", () => {
  beforeEach(() => {
    pellet = new Pellet(
      {
        position: {
          x: 50,
          y: 100,
        },
      },
      20
    );
    eatenPellet = new Pellet(
      {
        position: {
          x: 50,
          y: 100,
        },
      },
      20
    );
    eatenPellet.changeEatenState();
  });

  describe("upon instantiation", () => {
    it("has a number of instance variables", () => {
      expect(pellet.position).toEqual({
        x: 50,
        y: 100,
      });
      expect(pellet.radius).toBe(2);
      expect(pellet.hasBeenEaten).toBeFalsy();
    });
  });

  describe("changeEatenState", () => {
    it("can change the pellet to being eaten", () => {
      pellet.changeEatenState();
      expect(pellet.hasBeenEaten).toBeTruthy();
    });

    it("can change the pellet to uneaten", () => {
      eatenPellet.changeEatenState();
      expect(eatenPellet.hasBeenEaten).toBeFalsy();
    });
  });

  describe("draw", () => {
    it("calls the necessary functions on ctx to draw the pellet", () => {
      const mockCtx = {
        beginPath: () => undefined,
        arc: () => undefined,
        fillStyle: "",
        fill: () => undefined,
        closePath: () => undefined,
      };
      const beginPathSpy = jest.spyOn(mockCtx, "beginPath");
      const arcSpy = jest.spyOn(mockCtx, "arc");
      const fillSpy = jest.spyOn(mockCtx, "fill");
      const closePathSpy = jest.spyOn(mockCtx, "closePath");
      pellet.draw(mockCtx);
      expect(beginPathSpy).toHaveBeenCalledTimes(1);
      expect(arcSpy).toHaveBeenCalledTimes(1);
      expect(fillSpy).toHaveBeenCalledTimes(1);
      expect(closePathSpy).toHaveBeenCalledTimes(1);
      expect(mockCtx.fillStyle).toBe("white");
    });
  });
});