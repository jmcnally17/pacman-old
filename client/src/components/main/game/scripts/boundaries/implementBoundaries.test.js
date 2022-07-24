import implementBoundaries from "./implementBoundaries";

describe("implementBoundaries", () => {
  it("calls the two necessary functions to implement the boundary functionality", () => {
    const mockBoundary = {
      draw: () => undefined,
    };
    const mockBoundaries = [mockBoundary, mockBoundary, mockBoundary];
    let mockObject;
    const drawSpy = jest.spyOn(mockBoundary, "draw");
    const mockStopPacmanCollision = jest.fn();
    implementBoundaries(
      mockBoundaries,
      mockObject,
      mockObject,
      mockStopPacmanCollision
    );
    expect(drawSpy).toHaveBeenCalledTimes(3);
    expect(mockStopPacmanCollision).toHaveBeenCalledTimes(3);
  });
});
