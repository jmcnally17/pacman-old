import adjustPosition from "./adjustPosition";

describe("adjustPosition", () => {
  it("adds 2 to position.x and position.y if they are not divisible by 4", () => {
    const mockGhost = {
      position: {
        x: 90,
        y: 170,
      },
    };
    adjustPosition(mockGhost);
    expect(mockGhost.position).toEqual({
      x: 92,
      y: 172,
    });
  });

  it("leaves the position if x and y are both divisible by 4", () => {
    const mockGhost = {
      position: {
        x: 104,
        y: 140,
      },
    };
    adjustPosition(mockGhost);
    expect(mockGhost.position).toEqual({
      x: 104,
      y: 140,
    });
  });
});
