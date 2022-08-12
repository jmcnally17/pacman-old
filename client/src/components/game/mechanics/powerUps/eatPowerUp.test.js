import eatPowerUp from "./eatPowerUp";

let mockUneatenPowerUp;
let mockEatenPowerUp;
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
    mockUneatenPowerUp = {
      position: {
        x: 200,
        y: 200,
      },
      changeEatenState: () => undefined,
      hasBeenEaten: false,
    };
    mockEatenPowerUp = {
      position: {
        x: 200,
        y: 200,
      },
      changeEatenState: () => undefined,
      hasBeenEaten: true,
    };
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
    jest.spyOn(mockUneatenPowerUp, "changeEatenState");
    eatPowerUp(
      mockUneatenPowerUp,
      mockPacmanOne,
      mockVariables,
      mockGhosts,
      mockScareGhost
    );
    expect(mockUneatenPowerUp.changeEatenState).toHaveBeenCalledTimes(1);
    expect(mockVariables.score).toBe(50);
    expect(mockVariables.killCount).toBe(0);
  });

  it("does not call changeEatenState when colliding with Pac-Man, increase the score or reset the kill count if the power up has been eaten", () => {
    jest.spyOn(mockEatenPowerUp, "changeEatenState");
    eatPowerUp(
      mockEatenPowerUp,
      mockPacmanOne,
      mockVariables,
      mockGhosts,
      mockScareGhost
    );
    expect(mockEatenPowerUp.changeEatenState).toHaveBeenCalledTimes(0);
    expect(mockVariables.score).toBe(0);
    expect(mockVariables.killCount).toBe(2);
  });

  it("does not call changeEatenState, increases the score or reset the kill count if the power up and pacman are not colliding", () => {
    jest.spyOn(mockUneatenPowerUp, "changeEatenState");
    eatPowerUp(
      mockEatenPowerUp,
      mockPacmanTwo,
      mockVariables,
      mockGhosts,
      mockScareGhost
    );
    expect(mockUneatenPowerUp.changeEatenState).toHaveBeenCalledTimes(0);
    expect(mockVariables.score).toBe(0);
    expect(mockVariables.killCount).toBe(2);
  });

  it("calls the scareGhost callback if they are not retreating", () => {
    eatPowerUp(
      mockUneatenPowerUp,
      mockPacmanOne,
      mockVariables,
      mockGhosts,
      mockScareGhost
    );
    expect(mockScareGhost).toHaveBeenCalledTimes(3);
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
      mockUneatenPowerUp,
      mockPacmanOne,
      mockVariables,
      mockRetreatingGhosts,
      mockScareGhost
    );
    expect(mockScareGhost).toHaveBeenCalledTimes(0);
  });
});
