import calculateDistance from "./calculateDistance";

describe("calculateDistance", () => {
  it("calculates the direct distance between pacman and each pathway passed in", () => {
    const mockPacman = {
      position: {
        x: 200,
        y: 380,
      },
    };
    const mockObject = {};
    const mockPathwayOne = {
      position: {
        x: 203,
        y: 384,
      },
    };
    const mockPathwayTwo = {
      position: {
        x: 195,
        y: 368,
      },
    };
    const mockPathways = [mockPathwayOne, mockPathwayTwo];
    const mockFindPosition = jest.fn();
    calculateDistance(
      mockPacman,
      mockObject,
      mockPathways,
      mockObject,
      mockFindPosition
    );
    expect(mockPathwayOne.distance).toBe(5);
    expect(mockPathwayTwo.distance).toBe(13);
  });
});
