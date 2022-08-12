import implementGhosts from "./implementGhosts";

let mockGhostOne;
let mockGhostsOne;
let mockGhostTwo;
let mockGhostsTwo;
let mockBoundaries;
let mockCtx;
let mockVariables;
let mockPacman;
let mockPellets;
let mockPowerUps;
let mockCycleTimer;
let mockcheckSpeedMatchesState;
let mockImplementTunnel;
let mockUpdateCollisions;
let mockChooseMovement;
let mockCheckPacmanGhostCollision;

describe("implementGhosts", () => {
  beforeEach(() => {
    mockGhostOne = {
      update: () => undefined,
      prevCollisions: ["up", "down"],
    };
    mockGhostsOne = [mockGhostOne, mockGhostOne, mockGhostOne];
    mockGhostTwo = {
      update: () => undefined,
      prevCollisions: [],
    };
    mockGhostsTwo = [mockGhostTwo, mockGhostTwo];
    mockBoundaries = "boundaries";
    mockCtx = "ctx";
    mockVariables = "variables";
    mockPacman = "pacman";
    mockPellets = "pellets";
    mockPowerUps = "powerUps";
    mockCycleTimer = "cycleTimer";
    mockcheckSpeedMatchesState = jest.fn();
    mockImplementTunnel = jest.fn();
    mockUpdateCollisions = jest.fn();
    mockChooseMovement = jest.fn();
    mockCheckPacmanGhostCollision = jest.fn();
  });

  it("calls the necessary callback functions to implement the ghosts functionality", () => {
    jest.spyOn(mockGhostOne, "update");
    implementGhosts(
      mockGhostsOne,
      mockBoundaries,
      mockCtx,
      mockVariables,
      mockPacman,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockcheckSpeedMatchesState,
      mockImplementTunnel,
      mockUpdateCollisions,
      mockChooseMovement,
      mockCheckPacmanGhostCollision
    );
    expect(mockcheckSpeedMatchesState).toHaveBeenCalledTimes(3);
    expect(mockcheckSpeedMatchesState).toHaveBeenCalledWith(
      mockGhostOne,
      mockVariables
    );
    expect(mockGhostOne.update).toHaveBeenCalledTimes(3);
    expect(mockGhostOne.update).toHaveBeenCalledWith(mockCtx);
    expect(mockImplementTunnel).toHaveBeenCalledTimes(3);
    expect(mockImplementTunnel).toHaveBeenCalledWith(
      mockGhostOne,
      mockVariables
    );
    expect(mockUpdateCollisions).toHaveBeenCalledTimes(3);
    expect(mockUpdateCollisions).toHaveBeenCalledWith(
      mockBoundaries,
      [],
      mockGhostOne
    );
    expect(mockChooseMovement).toHaveBeenCalledTimes(3);
    expect(mockChooseMovement).toHaveBeenCalledWith(
      mockGhostOne,
      mockPacman,
      [],
      mockVariables,
      mockGhostOne
    );
    expect(mockCheckPacmanGhostCollision).toHaveBeenCalledTimes(3);
    expect(mockCheckPacmanGhostCollision).toHaveBeenCalledWith(
      mockGhostOne,
      mockPacman,
      mockVariables,
      mockGhostsOne,
      mockPellets,
      mockPowerUps,
      mockCycleTimer
    );
  });

  it("does not call pickRandomDirection when the collisions array is equal to the prevCollisions array", () => {
    implementGhosts(
      mockGhostsTwo,
      mockBoundaries,
      mockCtx,
      mockVariables,
      mockPacman,
      mockPellets,
      mockPowerUps,
      mockCycleTimer,
      mockcheckSpeedMatchesState,
      mockImplementTunnel,
      mockUpdateCollisions,
      mockChooseMovement,
      mockCheckPacmanGhostCollision
    );
    expect(mockChooseMovement).toHaveBeenCalledTimes(0);
  });
});
