import removeLife from "./removeLife";

let mockPacman;
let mockLifeOneEl;
let mockLifeTwoEl;

describe("removeLife", () => {
  beforeEach(() => {
    mockPacman = {
      lives: 1,
    };
    mockLifeOneEl = {
      name: "life-one",
      remove: () => undefined,
    };
    mockLifeTwoEl = {
      name: "life-two",
      remove: () => undefined,
    };
  });

  it("removes the first life image element if Pac-Man has one life left", () => {
    jest.spyOn(document, "querySelector");
    document.querySelector.mockReturnValueOnce(mockLifeOneEl);
    jest.spyOn(mockLifeOneEl, "remove");
    removeLife(mockPacman);
    expect(mockLifeOneEl.remove).toHaveBeenCalledTimes(1);
  });

  it("removes the second life image element if Pac-Man has no lives left", () => {
    mockPacman.lives = 0;
    jest.spyOn(document, "querySelector");
    document.querySelector.mockReturnValueOnce(mockLifeTwoEl);
    jest.spyOn(mockLifeTwoEl, "remove");
    removeLife(mockPacman);
    expect(mockLifeTwoEl.remove).toHaveBeenCalledTimes(1);
  });
});
