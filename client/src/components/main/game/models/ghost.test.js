/* eslint-disable jest/valid-title */
import Ghost from "./ghost";

describe(Ghost, () => {
  it("has a static speed class variable", () => {
    expect(Ghost.speed).toBe(2.5);
  });

  it("has a number of instance variables upon instantiation", () => {
    const ghost = new Ghost({
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
    expect(ghost.originalPosition).toEqual({
      x: 20,
      y: 20,
    });
    expect(ghost.position).toEqual({
      x: 20,
      y: 20,
    });
    expect(ghost.originalVelocity).toEqual({
      x: 7.5,
      y: 2.5,
    });
    expect(ghost.velocity).toEqual({
      x: 7.5,
      y: 2.5,
    });
    expect(ghost.radius).toBe(7.5);
    expect(ghost.colour).toBe("red");
    expect(ghost.prevCollisions).toEqual([]);
    expect(ghost.speed).toBe(2.5);
    expect(ghost.isScared).toBe(false);
    expect(ghost.scaredTimeout).toBe(null);
  });

  it("changeScaredState can change isScared to true when called", () => {
    const ghost = new Ghost({
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
    ghost.changeScaredState();
    expect(ghost.isScared).toBe(true);
  });

  it("reset changes the ghosts position and velocity back to their original values, as well as emptying the previous collisions array", () => {
    const ghost = new Ghost({
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
