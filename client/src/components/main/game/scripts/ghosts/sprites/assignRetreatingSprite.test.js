import assignRetreatingSprite from "./assignRetreatingSprite";

describe("assignRetreatingSprite", () => {
  it("sets the ghosts image to the right facing eyes sprite when moving to the right", () => {
    const mockGhost = {
      velocity: {
        x: 8,
      },
      image: {
        src: "",
      },
    };
    assignRetreatingSprite(mockGhost);
    expect(mockGhost.image.src).toBe("./images/eyesRight.png");
  });

  it("sets the ghosts image to the left facing eyes sprite when moving to the left", () => {
    const mockGhost = {
      velocity: {
        x: -8,
      },
      image: {
        src: "",
      },
    };
    assignRetreatingSprite(mockGhost);
    expect(mockGhost.image.src).toBe("./images/eyesLeft.png");
  });

  it("sets the ghosts image to the upwards facing eyes sprite when moving upwards", () => {
    const mockGhost = {
      velocity: {
        y: -8,
      },
      image: {
        src: "",
      },
    };
    assignRetreatingSprite(mockGhost);
    expect(mockGhost.image.src).toBe("./images/eyesUp.png");
  });

  it("sets the ghosts image to the downwards facing eyes sprite when moving downwards", () => {
    const mockGhost = {
      velocity: {
        y: 8,
      },
      image: {
        src: "",
      },
    };
    assignRetreatingSprite(mockGhost);
    expect(mockGhost.image.src).toBe("./images/eyesDown.png");
  });
});
