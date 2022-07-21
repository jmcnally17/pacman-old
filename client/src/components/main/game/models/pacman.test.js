/* eslint-disable jest/valid-title */
import PacMan from "./pacman";

describe(PacMan, () => {
  it("has a number of instance variables upon instantiation", () => {
    const pacman = new PacMan({
      position: {
        x: 290,
        y: 470,
      },
      velocity: {
        x: 7.5,
        y: 2.5,
      },
    });
    expect(pacman.position).toEqual({
      x: 290,
      y: 470,
    });
    expect(pacman.velocity).toEqual({
      x: 7.5,
      y: 2.5,
    });
    expect(pacman.radius).toBe(7.5);
    expect(pacman.speed).toBe(2.5);
    expect(pacman.radians).toEqual(Math.PI / 4);
    expect(pacman.openRate).toEqual(Math.PI / 48);
    expect(pacman.rotation).toBe(0);
    expect(pacman.lives).toBe(2);
  });

  it("loseLife decreases this.lives by 1", () => {
    const pacman = new PacMan({
      position: {
        x: 290,
        y: 470,
      },
      velocity: {
        x: 7.5,
        y: 2.5,
      },
    });
    pacman.loseLife();
    expect(pacman.lives).toBe(1);
  });

  it("reset puts PacMan back into starting position and changes velocity to 0 when called", () => {
    const pacman = new PacMan({
      position: {
        x: 290,
        y: 470,
      },
      velocity: {
        x: 7.5,
        y: 2.5,
      },
    });
    pacman.position.x += 20;
    pacman.position.y += 20;
    pacman.velocity.x += 5;
    pacman.velocity.y += 10;
    pacman.rotation += Math.PI;
    pacman.reset();
    expect(pacman.position).toEqual({
      x: 290,
      y: 470,
    });
    expect(pacman.velocity).toEqual({
      x: 0,
      y: 0,
    });
    expect(pacman.rotation).toBe(0);
  });
});
