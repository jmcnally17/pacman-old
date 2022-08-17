import implementPacman from "./implementPacman";

describe("implementPacman", () => {
  it("calls the necessary functions to implement Pac-Man functionality", () => {
    const mockVariables = {};
    const mockPacman = {
      update: () => undefined,
    };
    const mockBoundaries = "boundaries";
    const mockCtx = "ctx";
    const mockPellets = "pellets";
    const mockChangeDirection = jest.fn();
    const mockCheckPacmanEating = jest.fn();
    const mockImplementTunnel = jest.fn();
    jest.spyOn(mockPacman, "update");
    implementPacman(
      mockVariables,
      mockPacman,
      mockBoundaries,
      mockCtx,
      mockPellets,
      mockChangeDirection,
      mockCheckPacmanEating,
      mockImplementTunnel
    );
    expect(mockChangeDirection).toHaveBeenCalledTimes(1);
    expect(mockChangeDirection).toHaveBeenCalledWith(
      mockVariables,
      mockPacman,
      mockBoundaries
    );
    expect(mockCheckPacmanEating).toHaveBeenCalledTimes(1);
    expect(mockCheckPacmanEating).toHaveBeenCalledWith(mockPellets, mockPacman);
    expect(mockPacman.update).toHaveBeenCalledTimes(1);
    expect(mockPacman.update).toHaveBeenCalledWith(mockCtx);
    expect(mockImplementTunnel).toHaveBeenCalledTimes(1);
    expect(mockImplementTunnel).toHaveBeenCalledWith(mockPacman, mockVariables);
  });
});
