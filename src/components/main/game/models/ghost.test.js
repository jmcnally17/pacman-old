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

  it("has an original position that is passed in on instantiation", () => {
    expect(ghost.originalPosition).toEqual({
      x: 20,
      y: 20,
    });
  });

  it("has a current position that intially starts off equal to the original position", () => {
    expect(ghost.position).toEqual({
      x: 20,
      y: 20,
    });
  });

  it("has an original velocity that is passed in on instantiation", () => {
    expect(ghost.originalVelocity).toEqual({
      x: 7.5,
      y: 2.5,
    });
  });

  it("has a current velocity that initally starts off equal to the original velocity", () => {
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

  it("has a state of being scared initially set to false", () => {
    expect(ghost.isScared).toBe(false);
  });

  it("has a scared timeout variable which is null upon initialisation", () => {
    expect(ghost.scaredTimeout).toBe(null);
  });

  it("changeScaredState can change isScared to true when called", () => {
    ghost.changeScaredState();
    expect(ghost.isScared).toBe(true);
  });

  it("reset changes the ghosts position and velocity back to their original values, as well as emptying the previous collisions array", () => {
    ghost.position.x += 20;
    ghost.position.y += 20;
    ghost.velocity.x += 5;
    ghost.velocity.y += 10;
    ghost.prevCollisions.push("up");
    ghost.reset();
    expect(ghost.position).toEqual({
      x: 20,
      y: 20,
    });
    expect(ghost.velocity).toEqual({
      x: 7.5,
      y: 2.5,
    });
    expect(ghost.prevCollisions).toEqual([]);
  });
});
