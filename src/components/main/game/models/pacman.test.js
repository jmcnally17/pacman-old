/* eslint-disable no-undef */
const PacMan = require("./pacman");

describe(PacMan, () => {
  beforeEach(() => {
    pacman = new PacMan({
      position: {
        x: 290,
        y: 470,
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
      x: 290,
      y: 470,
    });
  });

  it("has a velocity that is passed in on instantiation", () => {
    expect(pacman.velocity).toEqual({
      x: 7.5,
      y: 2.5,
    });
  });

  it("has a constant speed instance variable", () => {
    expect(pacman.speed).toBe(2.5);
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

  it("starts off with 2 lives upon initialisation", () => {
    expect(pacman.lives).toBe(2);
  });

  it("loseLife decreases this.lives by 1", () => {
    pacman.loseLife();
    expect(pacman.lives).toBe(1);
  });

  it("reset puts PacMan back into starting position and changes velocity to 0 when called", () => {
    pacman.position.x += 20;
    pacman.position.y += 20;
    pacman.velocity.x += 5;
    pacman.velocity.y += 10;
    this.rotation += Math.PI;
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
