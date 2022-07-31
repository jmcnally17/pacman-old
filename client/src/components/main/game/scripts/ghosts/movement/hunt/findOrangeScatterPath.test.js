import findOrangeScatterPath from "./findOrangeScatterPath";

describe("findOrangeScatterPath", () => {
  it("returns a vector from the orange ghosts position to its scatter corner", () => {
    const mockOrangeGhost = {
      position: {
        x: 280,
        y: 420,
      },
    };
    expect(findOrangeScatterPath(mockOrangeGhost)).toEqual({
      x: -232,
      y: 492,
    });
  });
});
