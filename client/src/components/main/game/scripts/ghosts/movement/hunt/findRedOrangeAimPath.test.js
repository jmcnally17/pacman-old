import findRedOrangeAimPath from "./findRedOrangeAimPath";

describe("findRedOrangeAimPath", () => {
  it("returns a vector from Pac-Man's position to the pathways position", () => {
    const mockPacman = {
      position: {
        x: 250,
        y: 300,
      },
    };
    const mockPathway = {
      position: {
        x: 240,
        y: 430,
      },
    };
    expect(findRedOrangeAimPath(mockPacman, mockPathway)).toEqual({
      x: 10,
      y: -130,
    });
  });
});
