/* eslint-disable no-undef */
const Ghost = require("./ghost");

describe(Ghost, () => {
  beforeEach(() => {
    ghost = new Ghost({
      position: {
        x: 20,
        y: 20,
      },
      velocity: {
        x: 7.5,
        y: 2.5,
      },
      colour: "red",
    });
  });

  it("has a static speed class variable", () => {
    expect(Ghost.speed).toBe(2.5);
  });

  it("always has a radius of 15", () => {
    expect(ghost.radius).toBe(15);
  });

  it("has a position that is passed in on instantiation", () => {
    expect(ghost.position).toEqual({
      x: 20,
      y: 20,
    });
  });

  it("has a velocity that is passed in on instantiation", () => {
    expect(ghost.velocity).toEqual({
      x: 7.5,
      y: 2.5,
    });
  });

  it("has a colour that is passed in on instantiation", () => {
    expect(ghost.colour).toBe("red");
  });

  it("has an array of previous collisions that is empty upon initialisation", () => {
    expect(ghost.prevCollisions).toEqual([]);
  });

  it("has a constant speed instance variable", () => {
    expect(ghost.speed).toBe(2.5);
  });
});
