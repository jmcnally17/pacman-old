/* eslint-disable no-undef */
const Boundary = require("./boundary");

describe(Boundary, () => {
  beforeEach(() => {
    boundary = new Boundary({
      position: {
        x: 40,
        y: 100,
      },
    });
  });

  it("always has a width and height of 40", () => {
    expect(boundary.width).toBe(40);
    expect(boundary.height).toBe(40);
  });

  it("has a position that is passed in on instantiation", () => {
    expect(boundary.position).toEqual({
      x: 40,
      y: 100,
    });
  });
});
