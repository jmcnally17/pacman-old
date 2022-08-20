import endGame from "./endGame";
import Leaderboard from "../../../../leaderboard/leaderboard";

jest.mock("../../../../leaderboard/leaderboard");

let mockVariables;
let mockPellets;
let mockPowerUps;
let mockGhosts;
let mockPacman;
let mockCycleTimer;
let mockScaredTimer;
let mockGhostAudioObjects;
let mockSaveScore;
let mockResetAfterGameOver;

describe("endGame", () => {
  beforeEach(() => {
    Leaderboard.mockClear();
    mockVariables = {
      animationId: undefined,
      reactRoot: {
        render: () => undefined,
      },
    };
    mockPellets = "pellets";
    mockPowerUps = "powerUps";
    mockGhosts = "ghosts";
    mockPacman = "pacman";
    mockCycleTimer = "cycleTimer";
    mockScaredTimer = "scaredTimer";
    mockGhostAudioObjects = "mockGhostAudioObjects";
    mockSaveScore = jest.fn();
    mockResetAfterGameOver = jest.fn();
    jest.spyOn(mockVariables.reactRoot, "render");
  });

  it("calls cancelAnimationFrame on the current animationId", () => {
    jest.spyOn(global, "cancelAnimationFrame");
    endGame(
      mockVariables,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPacman,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockSaveScore,
      mockResetAfterGameOver
    );
    expect(cancelAnimationFrame).toHaveBeenCalledTimes(1);
    expect(cancelAnimationFrame).toHaveBeenCalledWith(
      mockVariables.animationId
    );
  });

  it("calls saveScore", () => {
    endGame(
      mockVariables,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPacman,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockSaveScore,
      mockResetAfterGameOver
    );
    expect(mockSaveScore).toHaveBeenCalledTimes(1);
    expect(mockSaveScore).toHaveBeenCalledWith(mockVariables);
  });

  it("calls resetAfterGameOver", () => {
    endGame(
      mockVariables,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPacman,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockSaveScore,
      mockResetAfterGameOver
    );
    expect(mockResetAfterGameOver).toHaveBeenCalledTimes(1);
    expect(mockResetAfterGameOver).toHaveBeenCalledWith(
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPacman,
      mockVariables,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects
    );
  });

  it("renders the Leaderboard component", () => {
    endGame(
      mockVariables,
      mockPellets,
      mockPowerUps,
      mockGhosts,
      mockPacman,
      mockCycleTimer,
      mockScaredTimer,
      mockGhostAudioObjects,
      mockSaveScore,
      mockResetAfterGameOver
    );
    expect(mockVariables.reactRoot.render).toHaveBeenCalledTimes(1);
    expect(mockVariables.reactRoot.render).toHaveBeenCalledWith(
      <Leaderboard variables={mockVariables} />
    );
  });
});
