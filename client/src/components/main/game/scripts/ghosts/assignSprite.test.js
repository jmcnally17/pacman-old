import assignSprite from "./assignSprite";

describe("assignSprite", () => {
  it("sets the ghosts image to the right facing sprite with the appropriate colour when moving to the right", () => {
    const mockGhostRight = {
      colour: "red",
      velocity: {
        x: 5,
      },
      isScared: false,
      image: {
        src: "",
      },
    };
    assignSprite(mockGhostRight);
    expect(mockGhostRight.image.src).toBe("./images/redGhostRight.png");
  });

  it("sets the ghosts image to the left facing sprite with the appropriate colour when moving to the left", () => {
    const mockGhostLeft = {
      colour: "cyan",
      velocity: {
        x: -5,
      },
      isScared: false,
      image: {
        src: "",
      },
    };
    assignSprite(mockGhostLeft);
    expect(mockGhostLeft.image.src).toBe("./images/cyanGhostLeft.png");
  });

  it("sets the ghosts image to the upwards facing sprite with the appropriate colour when moving upwards", () => {
    const mockGhostUp = {
      colour: "orange",
      velocity: {
        y: -5,
      },
      isScared: false,
      image: {
        src: "",
      },
    };
    assignSprite(mockGhostUp);
    expect(mockGhostUp.image.src).toBe("./images/orangeGhostUp.png");
  });

  it("sets the ghosts image to the downwards facing sprite with the appropriate colour when moving downwards", () => {
    const mockGhostDown = {
      colour: "pink",
      velocity: {
        y: 5,
      },
      isScared: false,
      image: {
        src: "",
      },
    };
    assignSprite(mockGhostDown);
    expect(mockGhostDown.image.src).toBe("./images/pinkGhostDown.png");
  });

  it("sets the ghosts image to the scared sprite when the ghost is scared", () => {
    const mockGhostScared = {
      velocity: {},
      isScared: true,
      image: {
        src: "",
      },
    };
    assignSprite(mockGhostScared);
    expect(mockGhostScared.image.src).toBe("./images/scaredGhostBlue.png");
  });
});
