import calculateDistance from "./calculateDistance";

let mockObject;
let mockPathway;
let mockPathways;
let mockAddCoordinates;
let mockIsOrangeFarFromPacman;
let mockFindRedOrangeAimPath;
let mockFindPinkAimPath;
let mockFindCyanAimPath;
let mockFindOrangeScatterPath;
let mockCalculateHypotenuse;

describe("calculateDistance", () => {
  beforeEach(() => {
    mockPathway = {};
    mockPathways = [mockPathway, mockPathway];
    mockAddCoordinates = jest.fn();
    mockIsOrangeFarFromPacman = jest.fn();
    mockFindRedOrangeAimPath = jest.fn();
    mockFindPinkAimPath = jest.fn();
    mockFindCyanAimPath = jest.fn();
    mockFindOrangeScatterPath = jest.fn();
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
      mockIsOrangeFarFromPacman,
      mockFindRedOrangeAimPath,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockFindOrangeScatterPath,
      mockCalculateHypotenuse
    );
    expect(mockAddCoordinates).toHaveBeenCalledTimes(2);
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(0);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(2);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
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
      mockIsOrangeFarFromPacman,
      mockFindRedOrangeAimPath,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockFindOrangeScatterPath,
      mockCalculateHypotenuse
    );
    expect(mockAddCoordinates).toHaveBeenCalledTimes(2);
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(0);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(2);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
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
      mockIsOrangeFarFromPacman,
      mockFindRedOrangeAimPath,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockFindOrangeScatterPath,
      mockCalculateHypotenuse
    );
    expect(mockAddCoordinates).toHaveBeenCalledTimes(2);
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(0);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(2);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
    expect(mockCalculateHypotenuse).toHaveBeenCalledTimes(2);
  });

  it("calls the necessary callbacks if the ghost is orange and is far away from Pac-Man", () => {
    const mockOrangeGhost = {
      colour: "orange",
    };
    mockIsOrangeFarFromPacman.mockReturnValue(true);
    calculateDistance(
      mockObject,
      mockOrangeGhost,
      mockPathways,
      mockObject,
      mockObject,
      mockAddCoordinates,
      mockIsOrangeFarFromPacman,
      mockFindRedOrangeAimPath,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockFindOrangeScatterPath,
      mockCalculateHypotenuse
    );
    expect(mockAddCoordinates).toHaveBeenCalledTimes(2);
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(2);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(2);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
    expect(mockCalculateHypotenuse).toHaveBeenCalledTimes(2);
  });

  it("calls the necessary callbacks if the ghost is orange is close to Pac-Man", () => {
    const mockOrangeGhost = {
      colour: "orange",
    };
    mockIsOrangeFarFromPacman.mockReturnValue(false);
    calculateDistance(
      mockObject,
      mockOrangeGhost,
      mockPathways,
      mockObject,
      mockObject,
      mockAddCoordinates,
      mockIsOrangeFarFromPacman,
      mockFindRedOrangeAimPath,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockFindOrangeScatterPath,
      mockCalculateHypotenuse
    );
    expect(mockAddCoordinates).toHaveBeenCalledTimes(2);
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(2);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(2);
    expect(mockCalculateHypotenuse).toHaveBeenCalledTimes(2);
  });
});
