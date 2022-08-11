import implementPacman from "./implementPacman";

describe("implementPacman", () => {
  it("calls the necessary functions to implement Pac-Man functionality", () => {
    const mockVariables = {
      length: 32,
    };
    let mockObject;
    const mockPacman = {
      update: () => undefined,
    };
    const mockMakeMove = jest.fn();
    const mockChangeDirection = jest.fn();
    const mockCheckPacmanEating = jest.fn();
    const mockImplementTunnel = jest.fn();
    const pacmanSpy = jest.spyOn(mockPacman, "update");
    implementPacman(
      mockVariables,
      mockPacman,
      mockObject,
      mockObject,
      mockObject,
      mockMakeMove,
      mockChangeDirection,
      mockCheckPacmanEating,
      mockImplementTunnel
    );
    expect(mockMakeMove).toHaveBeenCalledTimes(1);
    expect(mockChangeDirection).toHaveBeenCalledTimes(1);
    expect(mockCheckPacmanEating).toHaveBeenCalledTimes(1);
    expect(pacmanSpy).toHaveBeenCalledTimes(1);
    expect(mockImplementTunnel).toHaveBeenCalledTimes(1);
  });
});
