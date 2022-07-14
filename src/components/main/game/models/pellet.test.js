/* eslint-disable no-undef */
const Pellet = require("./pellet");

describe(Pellet, () => {
  beforeEach(() => {
    pellet = new Pellet({
      position: {
        x: 50,
        y: 100,
      },
    });
  });

  it("always has the same radius", () => {
    expect(pellet.radius).toBe(2);
  });

  it("hasBeenEaten has a default value of false upon initialisation", () => {
    expect(pellet.hasBeenEaten).toBe(false);
  });

  it("has a position that is passed in", () => {
    expect(pellet.position.x).toBe(50);
    expect(pellet.position.y).toBe(100);
  });

  it("changeEatenState can change the pellet to being eaten", () => {
    pellet.changeEatenState();
    expect(pellet.hasBeenEaten).toBe(true);
  });
});
