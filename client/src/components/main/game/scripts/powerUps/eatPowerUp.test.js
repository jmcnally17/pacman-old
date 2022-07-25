import eatPowerUp from "./eatPowerUp";

let mockUneatenPowerUp;
let mockEatenPowerUp;
let mockPacmanOne;
let mockPacmanTwo;
let mockScore;
let mockKillCount;
let mockUnscaredGhost;
let mockUnscaredGhosts;
let mockScaredGhost;
let mockScaredGhosts;
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
    mockScore = {
      points: 0,
    };
    mockKillCount = {
      number: 2,
    };
    mockUnscaredGhost = {
      changeScaredState: () => undefined,
      isScared: false,
    };
    mockScaredGhost = {
      changeScaredState: () => undefined,
      isScared: true,
    };
    mockUnscaredGhosts = [
      mockUnscaredGhost,
      mockUnscaredGhost,
      mockUnscaredGhost,
    ];
    mockScaredGhosts = [mockScaredGhost, mockScaredGhost, mockScaredGhost];
    mockScareGhost = jest.fn();
  });

  it("calls changeEatenState when colliding with Pac-Man, increases the score and resets the kill count to 0", () => {
    const changeEatenStateSpy = jest.spyOn(
      mockUneatenPowerUp,
      "changeEatenState"
    );
    eatPowerUp(
      mockUneatenPowerUp,
      mockPacmanOne,
      mockScore,
      mockKillCount,
      mockUnscaredGhosts,
      mockScareGhost
    );
    expect(changeEatenStateSpy).toHaveBeenCalledTimes(1);
    expect(mockScore.points).toBe(50);
    expect(mockKillCount.number).toBe(0);
  });

  it("does not call changeEatenState when colliding with Pac-Man, increase the score or reset the kill count if the power up has been eaten", () => {
    const changeEatenStateSpy = jest.spyOn(
      mockEatenPowerUp,
      "changeEatenState"
    );
    eatPowerUp(
      mockEatenPowerUp,
      mockPacmanOne,
      mockScore,
      mockKillCount,
      mockUnscaredGhosts,
      mockScareGhost
    );
    expect(changeEatenStateSpy).toHaveBeenCalledTimes(0);
    expect(mockScore.points).toBe(0);
    expect(mockKillCount.number).toBe(2);
  });

  it("does not call changeEatenState, increases the score or reset the kill count if the power up and pacman are not colliding", () => {
    const changeEatenStateSpy = jest.spyOn(
      mockUneatenPowerUp,
      "changeEatenState"
    );
    eatPowerUp(
      mockEatenPowerUp,
      mockPacmanTwo,
      mockScore,
      mockKillCount,
      mockUnscaredGhosts,
      mockScareGhost
    );
    expect(changeEatenStateSpy).toHaveBeenCalledTimes(0);
    expect(mockScore.points).toBe(0);
    expect(mockKillCount.number).toBe(2);
  });

  it("calls the scareGhost callback on the unscared ghosts when Pac-Man collides with the power up", () => {
    eatPowerUp(
      mockUneatenPowerUp,
      mockPacmanOne,
      mockScore,
      mockKillCount,
      mockUnscaredGhosts,
      mockScareGhost
    );
    expect(mockScareGhost).toHaveBeenCalledTimes(3);
  });

  it("does not call the scareGhost callback on the scared ghosts when Pac-Man collides with the power up", () => {
    eatPowerUp(
      mockUneatenPowerUp,
      mockPacmanOne,
      mockScore,
      mockKillCount,
      mockScaredGhosts,
      mockScareGhost
    );
    expect(mockScareGhost).toHaveBeenCalledTimes(0);
  });
});
