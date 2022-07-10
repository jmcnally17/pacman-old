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
    expect(pellet.radius).toBe(3);
  });

  it("has a position that is passed in", () => {
    expect(pellet.position.x).toBe(50);
    expect(pellet.position.y).toBe(100);
  });
});
