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
      isRetreating: false,
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
      isRetreating: false,
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
      isRetreating: false,
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
      isRetreating: false,
    };
    checkSpeedMatchesState(mockGhost, 32, mockAdjustPosition);
    expect(mockGhost.velocity).toEqual({
      x: 2,
      y: 0,
    });
    expect(mockGhost.speed).toBe(2);
    expect(mockAdjustPosition).toHaveBeenCalledTimes(0);
  });

  it("quadruples the ghosts speed and velocity if its speed is length / 16 and is retreating", () => {
    const mockGhost = {
      velocity: {
        x: 2,
        y: 0,
      },
      speed: 2,
      isScared: false,
      isRetreating: true,
    };
    checkSpeedMatchesState(mockGhost, 32, mockAdjustPosition);
    expect(mockGhost.velocity).toEqual({
      x: 8,
      y: 0,
    });
    expect(mockGhost.speed).toBe(8);
    expect(mockAdjustPosition).toHaveBeenCalledTimes(1);
  });

  it("halves the ghosts speed and velocity if its speed is length / 4 and is not retreating or scared", () => {
    const mockGhost = {
      velocity: {
        x: 8,
        y: 0,
      },
      speed: 8,
      isScared: false,
      isRetreating: false,
    };
    checkSpeedMatchesState(mockGhost, 32, mockAdjustPosition);
    expect(mockGhost.velocity).toEqual({
      x: 4,
      y: 0,
    });
    expect(mockGhost.speed).toBe(4);
    expect(mockAdjustPosition).toHaveBeenCalledTimes(1);
  });

  it("does not change the ghosts speed and velocity if its speed is length / 4 and is retreating", () => {
    const mockGhost = {
      velocity: {
        x: 8,
        y: 0,
      },
      speed: 8,
      isScared: false,
      isRetreating: true,
    };
    checkSpeedMatchesState(mockGhost, 32, mockAdjustPosition);
    expect(mockGhost.velocity).toEqual({
      x: 8,
      y: 0,
    });
    expect(mockGhost.speed).toBe(8);
    expect(mockAdjustPosition).toHaveBeenCalledTimes(0);
  });
});
