import findCyanAimPath from "./findCyanAimPath";

let mockPacman;
let mockPathway;
let mockRedGhost;

describe("findCyanAimPath", () => {
  beforeEach(() => {
    mockPacman = {
      position: {
        x: 300,
        y: 250,
      },
      rotation: 0,
    };
    mockPathway = {
      position: {
        x: 250,
        y: 620,
      },
    };
    mockRedGhost = {
      position: {
        x: 480,
        y: 170,
      },
    };
  });

  it("returns a vector from the pathways position to the mirror of the red ghosts postion around two spaces to the right of Pac-Man when Pac-Man is facing right", () => {
    expect(findCyanAimPath(mockPacman, 32, mockRedGhost, mockPathway)).toEqual({
      x: -2,
      y: -290,
    });
  });

  it("returns a vector from the pathways position to the mirror of the red ghosts postion around two spaces below Pac-Man when Pac-Man is facing downwards", () => {
    mockPacman.rotation = Math.PI / 2;
    expect(findCyanAimPath(mockPacman, 32, mockRedGhost, mockPathway)).toEqual({
      x: -130,
      y: -162,
    });
  });

  it("returns a vector from the pathways position to the mirror of the red ghosts postion around two spaces to the left of Pac-Man when Pac-Man is facing left", () => {
    mockPacman.rotation = Math.PI;
    expect(findCyanAimPath(mockPacman, 32, mockRedGhost, mockPathway)).toEqual({
      x: -258,
      y: -290,
    });
  });

  it("returns a vector from the pathways position to the mirror of the red ghosts postion around two spaces above Pac-Man when Pac-Man is facing upwards", () => {
    mockPacman.rotation = (Math.PI * 3) / 2;
    expect(findCyanAimPath(mockPacman, 32, mockRedGhost, mockPathway)).toEqual({
      x: -130,
      y: -418,
    });
  });
});
