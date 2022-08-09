import PowerUp from "./powerUp";

let powerUp;
let eatenPowerUp;
let mockLength;

describe("PowerUp", () => {
  beforeEach(() => {
    mockLength = 20;
    powerUp = new PowerUp(
      {
        position: {
          x: 50,
          y: 100,
        },
      },
      mockLength
    );
    eatenPowerUp = new PowerUp(
      {
        position: {
          x: 50,
          y: 100,
        },
      },
      mockLength
    );
    eatenPowerUp.changeEatenState();
  });

  describe("upon instantiation", () => {
    it("has a number of instance variables", () => {
      expect(powerUp.position).toEqual({
        x: 50,
        y: 100,
      });
      expect(powerUp.radius).toBe(7);
      expect(powerUp.hasBeenEaten).toBeFalsy();
      expect(powerUp.rate).toBe(-1);
    });
  });

  describe("changeEatenState", () => {
    it("can change the power up to being eaten", () => {
      powerUp.changeEatenState();
      expect(powerUp.hasBeenEaten).toBeTruthy();
    });

    it("can change the power up to uneaten", () => {
      eatenPowerUp.changeEatenState();
      expect(eatenPowerUp.hasBeenEaten).toBeFalsy();
    });
  });

  describe("draw", () => {
    it("calls the necessary functions on ctx to draw the power up", () => {
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
      powerUp.draw(mockCtx);
      expect(beginPathSpy).toHaveBeenCalledTimes(1);
      expect(arcSpy).toHaveBeenCalledTimes(1);
      expect(fillSpy).toHaveBeenCalledTimes(1);
      expect(closePathSpy).toHaveBeenCalledTimes(1);
      expect(mockCtx.fillStyle).toBe("white");
    });
  });

  describe("flash", () => {
    it("adds the rate to the radius", () => {
      powerUp.flash();
      expect(powerUp.radius).toBe(6);
    });

    it("changes the sign of the rate when it reaches a minimum value", () => {
      powerUp.radius = 2;
      powerUp.flash();
      expect(powerUp.rate).toBe(1);
      expect(powerUp.radius).toBe(3);
    });
  });
});
