import checkDirectionChange from "./checkDirectionChange";

let mockPacman;
let mockBoundaryOne;
let mockBoundaryTwo;
let mockBoundaries;
let mockVelocity;

describe("checkDirectionChange", () => {
  beforeEach(() => {
    mockPacman = {
      velocity: {
        x: 20,
        y: 5,
      },
    };
    mockBoundaryOne = "boundaryOne";
    mockBoundaryTwo = "boundaryTwo";
    mockBoundaries = [mockBoundaryOne, mockBoundaryTwo];
    mockVelocity = {
      velocity: {
        x: -5,
        y: 0,
      },
    };
  });

  it("changes Pac-Man's velocity when he will not collide with any boundaries", () => {
    const mockHitBoundaryConditional = jest.fn().mockReturnValue(false);
    checkDirectionChange(
      mockPacman,
      mockBoundaries,
      mockVelocity,
      mockHitBoundaryConditional
    );
    expect(mockHitBoundaryConditional).toHaveBeenCalledTimes(2);
    expect(mockHitBoundaryConditional).toHaveBeenNthCalledWith(
      1,
      mockPacman,
      mockBoundaryOne,
      {
        velocity: {
          x: -5,
          y: 0,
        },
      }
    );
    expect(mockHitBoundaryConditional).toHaveBeenNthCalledWith(
      2,
      mockPacman,
      mockBoundaryTwo,
      {
        velocity: {
          x: -5,
          y: 0,
        },
      }
    );
    expect(mockPacman.velocity).toEqual({
      x: -5,
      y: 0,
    });
  });

  it("leaves Pac-Man's velocity unchanged when he will collide with any boundaries", () => {
    const mockHitBoundaryConditional = jest.fn().mockReturnValue(true);
    checkDirectionChange(
      mockPacman,
      mockBoundaries,
      mockVelocity,
      mockHitBoundaryConditional
    );
    expect(mockHitBoundaryConditional).toHaveBeenCalledTimes(2);
    expect(mockHitBoundaryConditional).toHaveBeenNthCalledWith(
      1,
      mockPacman,
      mockBoundaryOne,
      {
        velocity: {
          x: -5,
          y: 0,
        },
      }
    );
    expect(mockHitBoundaryConditional).toHaveBeenNthCalledWith(
      2,
      mockPacman,
      mockBoundaryTwo,
      {
        velocity: {
          x: -5,
          y: 0,
        },
      }
    );
    expect(mockPacman.velocity).toEqual({
      x: 20,
      y: 5,
    });
  });
});
