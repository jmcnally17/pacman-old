import adjustPosition from "./adjustPosition";

describe("adjustPosition", () => {
  it("adds 2 to position.x and position.y if they are not divisible by 4 and if the ghost is not recovering", () => {
    const mockGhost = {
      position: {
        x: 90,
        y: 170,
      },
      isRecovering: false,
    };
    adjustPosition(mockGhost);
    expect(mockGhost.position).toEqual({
      x: 92,
      y: 172,
    });
  });

  it("leaves the position if x and y are both divisible by 4 and if the ghost is not recovering", () => {
    const mockGhost = {
      position: {
        x: 104,
        y: 140,
      },
      isRecovering: false,
    };
    adjustPosition(mockGhost);
    expect(mockGhost.position).toEqual({
      x: 104,
      y: 140,
    });
  });

  it("takes away 2 from position.x and position.y if modulo 8 equals 2, the ghost is recovering and is moving right and down", () => {
    const mockGhost = {
      position: {
        x: 82,
        y: 162,
      },
      velocity: {
        x: 4,
        y: 4,
      },
      isRecovering: true,
    };
    adjustPosition(mockGhost);
    expect(mockGhost.position).toEqual({
      x: 80,
      y: 160,
    });
  });

  it("takes away 4 from position.x and position.y if modulo 8 equals 4, the ghost is recovering and is moving right and down", () => {
    const mockGhost = {
      position: {
        x: 84,
        y: 164,
      },
      velocity: {
        x: 4,
        y: 4,
      },
      isRecovering: true,
    };
    adjustPosition(mockGhost);
    expect(mockGhost.position).toEqual({
      x: 80,
      y: 160,
    });
  });

  it("takes away 6 from position.x and position.y if modulo 8 equals 6, the ghost is recovering and is moving right and down", () => {
    const mockGhost = {
      position: {
        x: 86,
        y: 166,
      },
      velocity: {
        x: 4,
        y: 4,
      },
      isRecovering: true,
    };
    adjustPosition(mockGhost);
    expect(mockGhost.position).toEqual({
      x: 80,
      y: 160,
    });
  });

  it("adds 6 to position.x and position.y if modulo 8 equals 2, the ghost is recovering and is moving left and up", () => {
    const mockGhost = {
      position: {
        x: 82,
        y: 162,
      },
      velocity: {
        x: -4,
        y: -4,
      },
      isRecovering: true,
    };
    adjustPosition(mockGhost);
    expect(mockGhost.position).toEqual({
      x: 88,
      y: 168,
    });
  });

  it("adds 4 to position.x and position.y if modulo 8 equals 4, the ghost is recovering and is moving left and up", () => {
    const mockGhost = {
      position: {
        x: 84,
        y: 164,
      },
      velocity: {
        x: -4,
        y: -4,
      },
      isRecovering: true,
    };
    adjustPosition(mockGhost);
    expect(mockGhost.position).toEqual({
      x: 88,
      y: 168,
    });
  });

  it("adds 2 to position.x and position.y if modulo 8 equals 6, the ghost is recovering and is moving left and up", () => {
    const mockGhost = {
      position: {
        x: 86,
        y: 166,
      },
      velocity: {
        x: -4,
        y: -4,
      },
      isRecovering: true,
    };
    adjustPosition(mockGhost);
    expect(mockGhost.position).toEqual({
      x: 88,
      y: 168,
    });
  });
});
