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

  it("calls findRedOrangeAimPath if the ghost is red", () => {
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
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(1);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledWith(
      mockPacman,
      mockPathway
    );
  });

  it("calls findPinkAimPath if the ghost is pink", () => {
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
    expect(mockFindPinkAimPath).toHaveBeenCalledTimes(1);
    expect(mockFindPinkAimPath).toHaveBeenCalledWith(
      mockPacman,
      mockPathway,
      mockVariables
    );
  });

  it("calls findCyanAimPath if the ghost is cyan", () => {
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
    expect(mockFindCyanAimPath).toHaveBeenCalledTimes(1);
    expect(mockFindCyanAimPath).toHaveBeenCalledWith(
      mockPacman,
      mockVariables,
      mockRedGhost,
      mockPathway
    );
  });

  it("calls isOrangeFarFromPacman if the ghost is orange", () => {
    const mockOrangeGhost = {
      colour: "orange",
    };
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
  });

  it("calls findRedOrangeAimPath if the ghost is orange and is far away from Pac-Man", () => {
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
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledTimes(1);
    expect(mockFindRedOrangeAimPath).toHaveBeenCalledWith(
      mockPacman,
      mockPathway
    );
  });

  it("calls findOrangeScatterPath if the ghost is orange and is close to Pac-Man", () => {
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
    expect(mockFindOrangeScatterPath).toHaveBeenCalledTimes(1);
    expect(mockFindOrangeScatterPath).toHaveBeenCalledWith(mockPathway);
  });
});
