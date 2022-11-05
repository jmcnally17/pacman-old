import removeLife from "./removeLife";

let mockPacman;
let mockLifeOneEl;

describe("removeLife", () => {
  beforeEach(() => {
    mockPacman = {
      lives: 1,
    };
    mockLifeOneEl = {
      remove: () => undefined,
    };
  });

  it("removes the first life image element if Pac-Man has one life left", () => {
    jest.spyOn(document, "querySelector");
    document.querySelector.mockReturnValue(mockLifeOneEl);
    jest.spyOn(mockLifeOneEl, "remove");
    removeLife(mockPacman);
    expect(mockLifeOneEl.remove).toHaveBeenCalledTimes(1);
  });
});
