import hunt from "./hunt";

let mockObject;
let mockIsOrangeFarFromPacman;
let mockFindRedOrangeAimPath;
let mockFindPinkAimPath;
let mockFindCyanAimPath;
let mockFindOrangeScatterPath;

describe("hunt", () => {
  beforeEach(() => {
    mockIsOrangeFarFromPacman = jest.fn();
    mockFindRedOrangeAimPath = jest.fn();
    mockFindPinkAimPath = jest.fn();
    mockFindCyanAimPath = jest.fn();
    mockFindOrangeScatterPath = jest.fn();
  });

  it("calls the necessary callbacks if the ghost is red", () => {
    const mockRedGhost = {
      colour: "red",
    };
    hunt(
      mockRedGhost,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockIsOrangeFarFromPacman,
      mockFindRedOrangeAimPath,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockFindOrangeScatterPath
    );
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(0);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(1);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
  });

  it("calls the necessary callbacks if the ghost is pink", () => {
    const mockPinkGhost = {
      colour: "pink",
    };
    hunt(
      mockPinkGhost,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockIsOrangeFarFromPacman,
      mockFindRedOrangeAimPath,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockFindOrangeScatterPath
    );
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(0);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(1);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
  });

  it("calls the necessary callbacks if the ghost is cyan", () => {
    const mockCyanGhost = {
      colour: "cyan",
    };
    hunt(
      mockCyanGhost,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockIsOrangeFarFromPacman,
      mockFindRedOrangeAimPath,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockFindOrangeScatterPath
    );
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(0);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(1);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
  });

  it("calls the necessary callbacks if the ghost is orange and is far away from Pac-Man", () => {
    const mockOrangeGhost = {
      colour: "orange",
    };
    mockIsOrangeFarFromPacman.mockReturnValue(true);
    hunt(
      mockOrangeGhost,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockIsOrangeFarFromPacman,
      mockFindRedOrangeAimPath,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockFindOrangeScatterPath
    );
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(1);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(1);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
  });

  it("calls the necessary callbacks if the ghost is orange is close to Pac-Man", () => {
    const mockOrangeGhost = {
      colour: "orange",
    };
    mockIsOrangeFarFromPacman.mockReturnValue(false);
    hunt(
      mockOrangeGhost,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockIsOrangeFarFromPacman,
      mockFindRedOrangeAimPath,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockFindOrangeScatterPath
    );
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(1);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(1);
  });
});
