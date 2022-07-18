/* eslint-disable jest/valid-title */
import PowerUp from "./powerUp";

describe(PowerUp, () => {
  it("has a number of instance variables upon instantation", () => {
    const powerUp = new PowerUp({
      position: {
        x: 50,
        y: 100,
      },
    });
    expect(powerUp.radius).toBe(7);
    expect(powerUp.hasBeenEaten).toBe(false);
    expect(powerUp.position.x).toBe(50);
    expect(powerUp.position.y).toBe(100);
  });

  it("changeEatenState can change the powerUp to being eaten", () => {
    const powerUp = new PowerUp({
      position: {
        x: 50,
        y: 100,
      },
    });
    powerUp.changeEatenState();
    expect(powerUp.hasBeenEaten).toBe(true);
  });
});
