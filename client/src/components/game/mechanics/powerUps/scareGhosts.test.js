import scareGhosts from "./scareGhosts";

let mockScaredTimer;

describe("scareGhosts", () => {
  beforeEach(() => {
    mockScaredTimer = {
      clear: () => undefined,
      start: () => undefined,
    };
    jest.spyOn(mockScaredTimer, "clear");
    jest.spyOn(mockScaredTimer, "start");
  });

  it("calls changeScaredState if the ghosts are not scared or retreating and clears and sets the scared timeout", () => {
    const mockGhost = {
      isScared: false,
      isRetreating: false,
      changeScaredState: () => undefined,
    };
    const mockGhosts = [mockGhost, mockGhost, mockGhost, mockGhost];
    jest.spyOn(mockGhost, "changeScaredState");
    scareGhosts(mockGhosts, mockScaredTimer);
    expect(mockScaredTimer.clear).toHaveBeenCalledTimes(1);
    expect(mockGhost.changeScaredState).toHaveBeenCalledTimes(4);
    expect(mockScaredTimer.start).toHaveBeenCalledTimes(1);
  });

  it("does not call changeScaredState if the ghosts are scared and clears and sets the scared timeout", () => {
    const mockScaredGhost = {
      isScared: true,
      isRetreating: false,
      changeScaredState: () => undefined,
    };
    const mockScaredGhosts = [
      mockScaredGhost,
      mockScaredGhost,
      mockScaredGhost,
      mockScaredGhost,
    ];
    jest.spyOn(mockScaredGhost, "changeScaredState");
    scareGhosts(mockScaredGhosts, mockScaredTimer);
    expect(mockScaredTimer.clear).toHaveBeenCalledTimes(1);
    expect(mockScaredGhost.changeScaredState).toHaveBeenCalledTimes(0);
    expect(mockScaredTimer.start).toHaveBeenCalledTimes(1);
  });

  it("does not call changeScaredState if the ghosts are retreating and clears and sets the scared timeout", () => {
    const mockRetreatingGhost = {
      isScared: false,
      isRetreating: true,
      changeScaredState: () => undefined,
    };
    const mockRetreatingGhosts = [
      mockRetreatingGhost,
      mockRetreatingGhost,
      mockRetreatingGhost,
      mockRetreatingGhost,
    ];
    jest.spyOn(mockRetreatingGhost, "changeScaredState");
    scareGhosts(mockRetreatingGhosts, mockScaredTimer);
    expect(mockScaredTimer.clear).toHaveBeenCalledTimes(1);
    expect(mockRetreatingGhost.changeScaredState).toHaveBeenCalledTimes(0);
    expect(mockScaredTimer.start).toHaveBeenCalledTimes(1);
  });
});
