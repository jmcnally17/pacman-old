import assignRegularSprite from "./assignRegularSprite";

describe("assignRegularSprite", () => {
  it("sets the ghosts image to the right facing sprite with the appropriate colour when moving to the right", () => {
    const mockGhost = {
      colour: "red",
      velocity: {
        x: 4,
      },
      image: {
        src: "",
      },
    };
    assignRegularSprite(mockGhost);
    expect(mockGhost.image.src).toBe("./images/redGhostRight.png");
  });

  it("sets the ghosts image to the left facing sprite with the appropriate colour when moving to the left", () => {
    const mockGhost = {
      colour: "cyan",
      velocity: {
        x: -4,
      },
      image: {
        src: "",
      },
    };
    assignRegularSprite(mockGhost);
    expect(mockGhost.image.src).toBe("./images/cyanGhostLeft.png");
  });

  it("sets the ghosts image to the upwards facing sprite with the appropriate colour when moving upwards", () => {
    const mockGhost = {
      colour: "pink",
      velocity: {
        y: -4,
      },
      image: {
        src: "",
      },
    };
    assignRegularSprite(mockGhost);
    expect(mockGhost.image.src).toBe("./images/pinkGhostUp.png");
  });

  it("sets the ghosts image to the downwards facing sprite with the appropriate colour when moving downwards", () => {
    const mockGhost = {
      colour: "orange",
      velocity: {
        y: 4,
      },
      image: {
        src: "",
      },
    };
    assignRegularSprite(mockGhost);
    expect(mockGhost.image.src).toBe("./images/orangeGhostDown.png");
  });
});
