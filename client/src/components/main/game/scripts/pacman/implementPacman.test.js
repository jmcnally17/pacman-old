import implementPacman from "./implementPacman";

describe("implementPacman", () => {
  it("calls the necessary functions to implement Pac-Man functionality", () => {
    let mockObject;
    const mockPacman = {
      update: () => undefined,
    };
    const mockMakeMove = jest.fn();
    const mockChangeDirection = jest.fn();
    const mockImplementTunnel = jest.fn();
    const pacmanSpy = jest.spyOn(mockPacman, "update");
    implementPacman(
      mockObject,
      mockPacman,
      mockObject,
      mockObject,
      mockMakeMove,
      mockChangeDirection,
      mockImplementTunnel
    );
    expect(mockMakeMove).toHaveBeenCalledTimes(1);
    expect(mockChangeDirection).toHaveBeenCalledTimes(1);
    expect(pacmanSpy).toHaveBeenCalledTimes(1);
    expect(mockImplementTunnel).toHaveBeenCalledTimes(1);
  });
});
