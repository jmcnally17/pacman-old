import pickRandomDirection from "./pickRandomDirection";

let mockCollisions;

describe("pickRandomDirection", () => {
  beforeEach(() => {
    mockCollisions = [];
  });

  it("starts moving the ghost to the right if it is the only direction that becomes available", () => {
    const mockGhost = {
      velocity: {
        x: 0,
        y: 0,
      },
      prevCollisions: ["right"],
      speed: 5,
    };
    pickRandomDirection(mockGhost, mockCollisions);
    expect(mockGhost.velocity).toEqual({
      x: 5,
      y: 0,
    });
  });

  it("starts moving the ghost to the left if it is the only direction that becomes available", () => {
    const mockGhost = {
      velocity: {
        x: 0,
        y: 0,
      },
      prevCollisions: ["left"],
      speed: 5,
    };
    pickRandomDirection(mockGhost, mockCollisions);
    expect(mockGhost.velocity).toEqual({
      x: -5,
      y: 0,
    });
  });

  it("starts moving the ghost upwards if it is the only direction that becomes available", () => {
    const mockGhost = {
      velocity: {
        x: 0,
        y: 0,
      },
      prevCollisions: ["up"],
      speed: 5,
    };
    pickRandomDirection(mockGhost, mockCollisions);
    expect(mockGhost.velocity).toEqual({
      x: 0,
      y: -5,
    });
  });

  it("starts moving the ghost downwards if it is the only direction that becomes available", () => {
    const mockGhost = {
      velocity: {
        x: 0,
        y: 0,
      },
      prevCollisions: ["down"],
      speed: 5,
    };
    pickRandomDirection(mockGhost, mockCollisions);
    expect(mockGhost.velocity).toEqual({
      x: 0,
      y: 5,
    });
  });

  it("sets the prevCollisions array back to being empty at the end of the function", () => {
    const mockGhost = {
      velocity: {
        x: 0,
        y: 0,
      },
      prevCollisions: ["up", "right", "left"],
    };
    pickRandomDirection(mockGhost, mockCollisions);
    expect(mockGhost.prevCollisions).toEqual([]);
  });
});
