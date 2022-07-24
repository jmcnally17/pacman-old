import eatPowerUp from "./eatPowerUp";

let mockUneatenPowerUp;
let mockEatenPowerUp;
let mockPacmanOne;
let mockPacmanTwo;
let mockScore;
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

  it("calls changeEatenState when colliding with Pac-Man and increases the score", () => {
    const changeEatenStateSpy = jest.spyOn(
      mockUneatenPowerUp,
      "changeEatenState"
    );
    eatPowerUp(
      mockUneatenPowerUp,
      mockPacmanOne,
      mockScore,
      mockUnscaredGhosts,
      mockScareGhost
    );
    expect(changeEatenStateSpy).toHaveBeenCalledTimes(1);
    expect(mockScore.points).toBe(50);
  });

  it("does not call changeEatenState when colliding with Pac-Man and does not increases the score if the power up has been eaten", () => {
    const changeEatenStateSpy = jest.spyOn(
      mockEatenPowerUp,
      "changeEatenState"
    );
    eatPowerUp(
      mockEatenPowerUp,
      mockPacmanOne,
      mockScore,
      mockUnscaredGhosts,
      mockScareGhost
    );
    expect(changeEatenStateSpy).toHaveBeenCalledTimes(0);
    expect(mockScore.points).toBe(0);
  });

  it("does not call changeEatenState and does not increases the score if the power up and pacman are not colliding", () => {
    const changeEatenStateSpy = jest.spyOn(
      mockUneatenPowerUp,
      "changeEatenState"
    );
    eatPowerUp(
      mockEatenPowerUp,
      mockPacmanTwo,
      mockScore,
      mockUnscaredGhosts,
      mockScareGhost
    );
    expect(changeEatenStateSpy).toHaveBeenCalledTimes(0);
    expect(mockScore.points).toBe(0);
  });

  it("calls the scareGhost callback on the unscared ghosts when Pac-Man collides with the power up", () => {
    eatPowerUp(
      mockUneatenPowerUp,
      mockPacmanOne,
      mockScore,
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
      mockScaredGhosts,
      mockScareGhost
    );
    expect(mockScareGhost).toHaveBeenCalledTimes(0);
  });
});
