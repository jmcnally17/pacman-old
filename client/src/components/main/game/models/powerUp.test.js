const PowerUp = require("./powerUp");

describe(PowerUp, () => {
  beforeEach(() => {
    powerUp = new PowerUp({
      position: {
        x: 50,
        y: 100,
      },
    });
  });

  it("always has the same radius", () => {
    expect(powerUp.radius).toBe(7);
  });

  it("hasBeenEaten has a default value of false upon initialisation", () => {
    expect(powerUp.hasBeenEaten).toBe(false);
  });

  it("has a position that is passed in", () => {
    expect(powerUp.position.x).toBe(50);
    expect(powerUp.position.y).toBe(100);
  });

  it("changeEatenState can change the powerUp to being eaten", () => {
    powerUp.changeEatenState();
    expect(powerUp.hasBeenEaten).toBe(true);
  });
});
