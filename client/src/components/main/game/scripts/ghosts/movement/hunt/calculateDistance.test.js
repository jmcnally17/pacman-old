import calculateDistance from "./calculateDistance";

let mockObject;
let mockPathway;
let mockPathways;
let mockAddCoordinates;
let mockFindRedOrangeAimPath;
let mockIsOrangeFarFromPacman;
let mockFindPinkAimPath;
let mockFindCyanAimPath;
let mockCalculateHypotenuse;

describe("calculateDistance", () => {
  beforeEach(() => {
    mockPathway = {};
    mockPathways = [mockPathway, mockPathway];
    mockAddCoordinates = jest.fn();
    mockFindRedOrangeAimPath = jest.fn();
    mockIsOrangeFarFromPacman = jest.fn();
    mockFindPinkAimPath = jest.fn();
    mockFindCyanAimPath = jest.fn();
    mockCalculateHypotenuse = jest.fn();
  });

  it("calls the necessary callbacks if the ghost is red", () => {
    const mockRedGhost = {
      colour: "red",
    };
    calculateDistance(
      mockObject,
      mockRedGhost,
      mockPathways,
      mockObject,
      mockObject,
      mockAddCoordinates,
      mockFindRedOrangeAimPath,
      mockIsOrangeFarFromPacman,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockCalculateHypotenuse
    );
    expect(mockAddCoordinates).toHaveBeenCalledTimes(2);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(2);
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(0);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(0);
    expect(mockCalculateHypotenuse).toHaveBeenCalledTimes(2);
  });

  it("calls the necessary callbacks if the ghost is pink", () => {
    const mockPinkGhost = {
      colour: "pink",
    };
    calculateDistance(
      mockObject,
      mockPinkGhost,
      mockPathways,
      mockObject,
      mockObject,
      mockAddCoordinates,
      mockFindRedOrangeAimPath,
      mockIsOrangeFarFromPacman,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockCalculateHypotenuse
    );
    expect(mockAddCoordinates).toHaveBeenCalledTimes(2);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(0);
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(0);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(2);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(0);
    expect(mockCalculateHypotenuse).toHaveBeenCalledTimes(2);
  });

  it("calls the necessary callbacks if the ghost is cyan", () => {
    const mockPinkGhost = {
      colour: "cyan",
    };
    calculateDistance(
      mockObject,
      mockPinkGhost,
      mockPathways,
      mockObject,
      mockObject,
      mockAddCoordinates,
      mockFindRedOrangeAimPath,
      mockIsOrangeFarFromPacman,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockCalculateHypotenuse
    );
    expect(mockAddCoordinates).toHaveBeenCalledTimes(2);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(0);
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(0);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(2);
    expect(mockCalculateHypotenuse).toHaveBeenCalledTimes(2);
  });
});
