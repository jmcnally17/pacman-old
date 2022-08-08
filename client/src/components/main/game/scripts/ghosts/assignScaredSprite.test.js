import assignScaredSprite from "./assignScaredSprite";

describe("assignScaredSprite", () => {
  it("sets the ghosts image to the scared sprite", () => {
    const mockGhost = {
      image: {
        src: "",
      },
    };
    assignScaredSprite(mockGhost);
    expect(mockGhost.image.src).toBe("./images/scaredGhostBlue.png");
  });
});
