import checkSpeedMatchesState from "./checkSpeedMatchesState";

let mockAdjustPosition;

describe("checkSpeedMatchesState", () => {
  beforeEach(() => {
    mockAdjustPosition = jest.fn();
  });

  it("halves the ghosts speed and velocity if its speed is length / 8 and is scared", () => {
    const mockGhost = {
      velocity: {
        x: 4,
        y: 0,
      },
      speed: 4,
      isScared: true,
    };
    checkSpeedMatchesState(mockGhost, 32, mockAdjustPosition);
    expect(mockGhost.velocity).toEqual({
      x: 2,
      y: 0,
    });
    expect(mockGhost.speed).toBe(2);
    expect(mockAdjustPosition).toHaveBeenCalledTimes(1);
  });

  it("does not change the ghosts speed and velocity if its speed is length / 8 and is not scared", () => {
    const mockGhost = {
      velocity: {
        x: 4,
        y: 0,
      },
      speed: 4,
      isScared: false,
    };
    checkSpeedMatchesState(mockGhost, 32, mockAdjustPosition);
    expect(mockGhost.velocity).toEqual({
      x: 4,
      y: 0,
    });
    expect(mockGhost.speed).toBe(4);
    expect(mockAdjustPosition).toHaveBeenCalledTimes(0);
  });

  it("doubles the ghosts speed and velocity if its speed is length / 16 and is not scared", () => {
    const mockGhost = {
      velocity: {
        x: 2,
        y: 0,
      },
      speed: 2,
      isScared: false,
    };
    checkSpeedMatchesState(mockGhost, 32, mockAdjustPosition);
    expect(mockGhost.velocity).toEqual({
      x: 4,
      y: 0,
    });
    expect(mockGhost.speed).toBe(4);
    expect(mockAdjustPosition).toHaveBeenCalledTimes(1);
  });

  it("does not change the ghosts speed and velocity if its speed is length / 16 and is scared", () => {
    const mockGhost = {
      velocity: {
        x: 2,
        y: 0,
      },
      speed: 2,
      isScared: true,
    };
    checkSpeedMatchesState(mockGhost, 32, mockAdjustPosition);
    expect(mockGhost.velocity).toEqual({
      x: 2,
      y: 0,
    });
    expect(mockGhost.speed).toBe(2);
    expect(mockAdjustPosition).toHaveBeenCalledTimes(0);
  });
});
