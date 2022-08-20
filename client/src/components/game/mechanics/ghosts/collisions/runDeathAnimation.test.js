import runDeathAnimation from "./runDeathAnimation";

let mockVariables;
let mockCtx;
let mockBoundary;
let mockBoundaries;
let mockPellet;
let mockPellets;
let mockEatenPellet;
let mockEatenPellets;
let mockPowerUp;
let mockPowerUps;
let mockEatenPowerUp;
let mockEatenPowerUps;
let mockPacman;

describe("runDeathAnimation", () => {
  beforeEach(() => {
    mockVariables = {
      animationId: null,
    };
    mockCtx = {
      clearRect: () => undefined,
    };
    mockBoundary = {
      draw: () => undefined,
    };
    mockBoundaries = [mockBoundary, mockBoundary];
    mockPellet = {
      hasBeenEaten: false,
      draw: () => undefined,
    };
    mockPellets = [mockPellet, mockPellet];
    mockEatenPellet = {
      hasBeenEaten: true,
      draw: () => undefined,
    };
    mockEatenPellets = [mockEatenPellet, mockEatenPellet];
    mockPowerUp = {
      hasBeenEaten: false,
      update: () => undefined,
    };
    mockPowerUps = [mockPowerUp, mockPowerUp];
    mockEatenPowerUp = {
      hasBeenEaten: true,
      update: () => undefined,
    };
    mockEatenPowerUps = [mockEatenPowerUp, mockEatenPowerUp];
    mockPacman = {
      shrink: () => undefined,
    };
  });

  it("calls requestAnimationFrame on itself", () => {
    jest.spyOn(global, "requestAnimationFrame");
    runDeathAnimation(
      mockVariables,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockPacman
    );
    expect(mockVariables.animationId).toBe(1);
    expect(requestAnimationFrame).toHaveBeenCalledTimes(1);
    expect(requestAnimationFrame).toHaveBeenCalledWith(expect.any(Function));
  });

  it("calls clearRect on the ctx with the board dimensions", () => {
    jest.spyOn(mockCtx, "clearRect");
    runDeathAnimation(
      mockVariables,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockPacman
    );
    expect(mockCtx.clearRect).toHaveBeenCalledTimes(1);
    expect(mockCtx.clearRect).toHaveBeenCalledWith(0, 0, 896, 992);
  });

  it("calls draw on all the boundaries", () => {
    jest.spyOn(mockBoundary, "draw");
    runDeathAnimation(
      mockVariables,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockPacman
    );
    expect(mockBoundary.draw).toHaveBeenCalledTimes(2);
    expect(mockBoundary.draw).toHaveBeenNthCalledWith(1, mockCtx);
    expect(mockBoundary.draw).toHaveBeenNthCalledWith(2, mockCtx);
  });

  it("calls draw on the pellets that have not been eaten", () => {
    jest.spyOn(mockPellet, "draw");
    runDeathAnimation(
      mockVariables,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockPacman
    );
    expect(mockPellet.draw).toHaveBeenCalledTimes(2);
    expect(mockPellet.draw).toHaveBeenNthCalledWith(1, mockCtx);
    expect(mockPellet.draw).toHaveBeenNthCalledWith(2, mockCtx);
  });

  it("does not call draw on the pellets that have been eaten", () => {
    jest.spyOn(mockEatenPellet, "draw");
    runDeathAnimation(
      mockVariables,
      mockCtx,
      mockBoundaries,
      mockEatenPellets,
      mockPowerUps,
      mockPacman
    );
    expect(mockEatenPellet.draw).toHaveBeenCalledTimes(0);
  });

  it("calls update on the power ups that have not been eaten", () => {
    jest.spyOn(mockPowerUp, "update");
    runDeathAnimation(
      mockVariables,
      mockCtx,
      mockBoundaries,
      mockPellets,
      mockPowerUps,
      mockPacman
    );
    expect(mockPowerUp.update).toHaveBeenCalledTimes(2);
    expect(mockPowerUp.update).toHaveBeenNthCalledWith(1, mockCtx);
    expect(mockPowerUp.update).toHaveBeenNthCalledWith(2, mockCtx);
  });

  it("does not call update on the power ups that have been eaten", () => {
    jest.spyOn(mockEatenPowerUp, "update");
    runDeathAnimation(
      mockVariables,
      mockCtx,
      mockBoundaries,
      mockEatenPellets,
      mockEatenPowerUps,
      mockPacman
    );
    expect(mockEatenPowerUp.update).toHaveBeenCalledTimes(0);
  });

  it("calls shrink on Pac-Man", () => {
    jest.spyOn(mockPacman, "shrink");
    runDeathAnimation(
      mockVariables,
      mockCtx,
      mockBoundaries,
      mockEatenPellets,
      mockEatenPowerUps,
      mockPacman
    );
    expect(mockPacman.shrink).toHaveBeenCalledTimes(1);
    expect(mockPacman.shrink).toHaveBeenCalledWith(mockCtx);
  });
});
