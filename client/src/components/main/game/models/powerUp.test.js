import PowerUp from "./powerUp";

let powerUp;
let eatenPowerUp;
let mockLength;
let mockCtx;

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
    mockCtx = {
      beginPath: () => undefined,
      arc: () => undefined,
      fillStyle: "",
      fill: () => undefined,
      closePath: () => undefined,
    };
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
      expect(powerUp.length).toBe(20);
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

  describe("update", () => {
    it("calls draw and flash", () => {
      const drawSpy = jest.spyOn(powerUp, "draw");
      const flashSpy = jest.spyOn(powerUp, "flash");
      powerUp.update(mockCtx);
      expect(drawSpy).toHaveBeenCalledTimes(1);
      expect(flashSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("draw", () => {
    it("calls the necessary functions on ctx to draw the power up", () => {
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
      powerUp.radius = 4;
      powerUp.flash();
      expect(powerUp.radius).toBe(3);
    });

    it("changes the sign of the rate to negative when the radius reaches a minimum value", () => {
      powerUp.radius = 2;
      powerUp.flash();
      expect(powerUp.rate).toBe(1);
      expect(powerUp.radius).toBe(3);
    });

    it("changes the sign of the rate to positive when the radius reaches a maximum value", () => {
      powerUp.rate = 1;
      powerUp.flash();
      expect(powerUp.rate).toBe(-1);
      expect(powerUp.radius).toBe(6);
    });
  });
});
