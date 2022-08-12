import eatPowerUp from "./eatPowerUp";

let mockPowerUp;
let mockPacmanOne;
let mockPacmanTwo;
let mockVariables;
let mockGhost;
let mockGhosts;
let mockScareGhost;

describe("eatPowerUp", () => {
  beforeEach(() => {
    mockPacmanOne = {
      position: {
        x: 200,
        y: 200,
      },
    };
    mockPacmanTwo = {
      position: {
        x: 250,
        y: 250,
      },
    };
    mockPowerUp = {
      position: {
        x: 200,
        y: 200,
      },
      changeEatenState: () => undefined,
    };
    jest.spyOn(mockPowerUp, "changeEatenState");
    mockVariables = {
      score: 0,
      killCount: 2,
    };
    mockGhost = {
      isRetreating: false,
    };
    mockGhosts = [mockGhost, mockGhost, mockGhost];
    mockScareGhost = jest.fn();
  });

  it("calls changeEatenState when colliding with Pac-Man, increases the score and resets the kill count to 0", () => {
    eatPowerUp(
      mockPowerUp,
      mockPacmanOne,
      mockVariables,
      mockGhosts,
      mockScareGhost
    );
    expect(mockPowerUp.changeEatenState).toHaveBeenCalledTimes(1);
    expect(mockVariables.score).toBe(50);
    expect(mockVariables.killCount).toBe(0);
  });

  it("does not call changeEatenState, increases the score or reset the kill count if the power up and pacman are not colliding", () => {
    eatPowerUp(
      mockPowerUp,
      mockPacmanTwo,
      mockVariables,
      mockGhosts,
      mockScareGhost
    );
    expect(mockPowerUp.changeEatenState).toHaveBeenCalledTimes(0);
    expect(mockVariables.score).toBe(0);
    expect(mockVariables.killCount).toBe(2);
  });

  it("calls the scareGhost callback if they are not retreating", () => {
    eatPowerUp(
      mockPowerUp,
      mockPacmanOne,
      mockVariables,
      mockGhosts,
      mockScareGhost
    );
    expect(mockScareGhost).toHaveBeenCalledTimes(3);
    expect(mockScareGhost).toHaveBeenNthCalledWith(1, mockGhost);
    expect(mockScareGhost).toHaveBeenNthCalledWith(2, mockGhost);
    expect(mockScareGhost).toHaveBeenNthCalledWith(3, mockGhost);
  });

  it("does not call the scareGhost callback if they are retreating", () => {
    const mockRetreatingGhost = {
      isRetreating: true,
    };
    const mockRetreatingGhosts = [
      mockRetreatingGhost,
      mockRetreatingGhost,
      mockRetreatingGhost,
    ];
    eatPowerUp(
      mockPowerUp,
      mockPacmanOne,
      mockVariables,
      mockRetreatingGhosts,
      mockScareGhost
    );
    expect(mockScareGhost).toHaveBeenCalledTimes(0);
  });
});
