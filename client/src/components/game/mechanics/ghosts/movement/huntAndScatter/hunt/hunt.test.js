import hunt from "./hunt";

let mockPathway;
let mockPacman;
let mockVariables;
let mockRedGhost;
let mockIsOrangeFarFromPacman;
let mockFindRedOrangeAimPath;
let mockFindPinkAimPath;
let mockFindCyanAimPath;
let mockFindOrangeScatterPath;

describe("hunt", () => {
  beforeEach(() => {
    mockPathway = "pathway";
    mockPacman = "pacman";
    mockVariables = "variables";
    mockRedGhost = "redGhost";
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
      mockPathway,
      mockPacman,
      mockVariables,
      mockRedGhost,
      mockIsOrangeFarFromPacman,
      mockFindRedOrangeAimPath,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockFindOrangeScatterPath
    );
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(0);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(1);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledWith(
      mockPacman,
      mockPathway
    );
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
      mockPathway,
      mockPacman,
      mockVariables,
      mockRedGhost,
      mockIsOrangeFarFromPacman,
      mockFindRedOrangeAimPath,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockFindOrangeScatterPath
    );
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(0);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(1);
    expect(mockFindPinkAimPath).toHaveBeenCalledWith(
      mockPacman,
      mockPathway,
      mockVariables
    );
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
  });

  it("calls the necessary callbacks if the ghost is cyan", () => {
    const mockCyanGhost = {
      colour: "cyan",
    };
    hunt(
      mockCyanGhost,
      mockPathway,
      mockPacman,
      mockVariables,
      mockRedGhost,
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
    expect(mockFindCyanAimPath).toHaveBeenCalledWith(
      mockPacman,
      mockVariables,
      mockRedGhost,
      mockPathway
    );
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
  });

  it("calls the necessary callbacks if the ghost is orange and is far away from Pac-Man", () => {
    const mockOrangeGhost = {
      colour: "orange",
    };
    mockIsOrangeFarFromPacman.mockReturnValue(true);
    hunt(
      mockOrangeGhost,
      mockPathway,
      mockPacman,
      mockVariables,
      mockRedGhost,
      mockIsOrangeFarFromPacman,
      mockFindRedOrangeAimPath,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockFindOrangeScatterPath
    );
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(1);
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledWith(
      mockOrangeGhost,
      mockPacman,
      mockVariables
    );
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(1);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledWith(
      mockPacman,
      mockPathway
    );
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(0);
  });

  it("calls the necessary callbacks if the ghost is orange and is close to Pac-Man", () => {
    const mockOrangeGhost = {
      colour: "orange",
    };
    mockIsOrangeFarFromPacman.mockReturnValue(false);
    hunt(
      mockOrangeGhost,
      mockPathway,
      mockPacman,
      mockVariables,
      mockRedGhost,
      mockIsOrangeFarFromPacman,
      mockFindRedOrangeAimPath,
      mockFindPinkAimPath,
      mockFindCyanAimPath,
      mockFindOrangeScatterPath
    );
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledTimes(1);
    expect(mockIsOrangeFarFromPacman).toHaveBeenCalledWith(
      mockOrangeGhost,
      mockPacman,
      mockVariables
    );
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(0);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(1);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledWith(mockPathway);
  });
});
