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

  it("has a constant speed instance variable", () => {
    expect(pacman.speed).toBe(5);
  });

  it("has an initial angle at which its mouth is open", () => {
    expect(pacman.radians).toEqual(Math.PI / 4);
  });

  it("has a rate at which the angle of the mouth increase and decreases over time", () => {
    expect(pacman.openRate).toEqual(Math.PI / 48);
  });

  it("has a rotation variable that decides which way PacMan is facing", () => {
    expect(pacman.rotation).toBe(0);
  });

  it("starts off with three lives upon initialisation", () => {
    expect(pacman.lives).toBe(3);
  });

  it("loseLife decreases this.lives by 1", () => {
    pacman.loseLife();
    expect(pacman.lives).toBe(2);
  });
});
