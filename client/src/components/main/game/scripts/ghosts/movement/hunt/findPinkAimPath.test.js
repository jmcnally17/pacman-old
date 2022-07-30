import findPinkAimPath from "./findPinkAimPath";

let mockPacman;
let mockPathway;

describe("findPinkAimPath", () => {
  beforeEach(() => {
    mockPacman = {
      position: {
        x: 300,
        y: 180,
      },
      rotation: 0,
    };
    mockPathway = {
      position: {
        x: 350,
        y: 90,
      },
    };
  });

  it("returns a vector from four squares to the right of Pac-Man to the pathways position when Pac-Man is facing right", () => {
    expect(findPinkAimPath(mockPacman, mockPathway, 32)).toEqual({
      x: 78,
      y: 90,
    });
  });

  it("returns a vector from four squares below Pac-Man to the pathways position when Pac-Man is facing downwards", () => {
    mockPacman.rotation = Math.PI / 2;
    expect(findPinkAimPath(mockPacman, mockPathway, 32)).toEqual({
      x: -50,
      y: 218,
    });
  });

  it("returns a vector from four squares to the left of Pac-Man to the pathways position when Pac-Man is facing left", () => {
    mockPacman.rotation = Math.PI;
    expect(findPinkAimPath(mockPacman, mockPathway, 32)).toEqual({
      x: -178,
      y: 90,
    });
  });

  it("returns a vector from four squares above Pac-Man to the pathways position when Pac-Man is facing upwards", () => {
    mockPacman.rotation = (Math.PI * 3) / 2;
    expect(findPinkAimPath(mockPacman, mockPathway, 32)).toEqual({
      x: -50,
      y: -38,
    });
  });
});
