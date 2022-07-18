/* eslint-disable jest/valid-title */
import Pellet from "./pellet";

describe(Pellet, () => {
  it("has a number of instance variables upon instantiation", () => {
    const pellet = new Pellet({
      position: {
        x: 50,
        y: 100,
      },
    });
    expect(pellet.radius).toBe(2);
    expect(pellet.hasBeenEaten).toBe(false);
    expect(pellet.position.x).toBe(50);
    expect(pellet.position.y).toBe(100);
  });

  it("changeEatenState can change the pellet to being eaten", () => {
    const pellet = new Pellet({
      position: {
        x: 50,
        y: 100,
      },
    });
    pellet.changeEatenState();
    expect(pellet.hasBeenEaten).toBe(true);
  });
});
