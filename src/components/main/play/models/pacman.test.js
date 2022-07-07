/* eslint-disable no-undef */
const PacMan = require("./pacman");

describe(PacMan, () => {
  beforeEach(() => {
    pacman = new PacMan({
      position: {
        x: 20,
        y: 20,
      },
      velocity: {
        x: 7.5,
        y: 2.5,
      },
    });
  });

  it("always has a radius of 15", () => {
    expect(pacman.radius).toBe(15);
    console.log("test");
  });

  it("has a position that is passed in on instantiation", () => {
    expect(pacman.position).toEqual({
      x: 20,
      y: 20,
    });
  });

  it("has a velocity that is passed in on instantiation", () => {
    expect(pacman.velocity).toEqual({
      x: 7.5,
      y: 2.5,
    });
  });
});
