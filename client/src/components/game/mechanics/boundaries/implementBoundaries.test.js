import implementBoundaries from "./implementBoundaries";

describe("implementBoundaries", () => {
  it("calls the two necessary functions to implement the boundary functionality", () => {
    const mockBoundary = {
      draw: () => undefined,
    };
    const mockBoundaries = [mockBoundary, mockBoundary, mockBoundary];
    let mockObject;
    jest.spyOn(mockBoundary, "draw");
    const mockStopPacmanCollision = jest.fn();
    implementBoundaries(
      mockBoundaries,
      mockObject,
      mockObject,
      mockStopPacmanCollision
    );
    expect(mockBoundary.draw).toHaveBeenCalledTimes(3);
    expect(mockStopPacmanCollision).toHaveBeenCalledTimes(3);
  });
});
