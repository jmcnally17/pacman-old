import implementPellets from "./implementPellets";

let mockUneatenPellet;
let mockUneatenPellets;
let mockEatenPellet;
let mockEatenPellets;
let mockObject;
let mockEatPellet;
let mockCheckLevelUpCondition;

describe("implementPellets", () => {
  beforeEach(() => {
    mockUneatenPellet = {
      hasBeenEaten: false,
      draw: () => undefined,
    };
    mockUneatenPellets = [
      mockUneatenPellet,
      mockUneatenPellet,
      mockUneatenPellet,
    ];
    mockEatenPellet = {
      hasBeenEaten: true,
      draw: () => undefined,
    };
    mockEatenPellets = [mockEatenPellet, mockEatenPellet];
    jest.spyOn(mockUneatenPellet, "draw");
    jest.spyOn(mockEatenPellet, "draw");
    mockEatPellet = jest.fn();
    mockCheckLevelUpCondition = jest.fn();
  });

  it("calls the necessary funcions to implement the pellet functionality", () => {
    implementPellets(
      mockUneatenPellets,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockEatPellet,
      mockCheckLevelUpCondition
    );
    expect(mockUneatenPellet.draw).toHaveBeenCalledTimes(3);
    expect(mockEatPellet).toHaveBeenCalledTimes(3);
    expect(mockCheckLevelUpCondition).toHaveBeenCalledTimes(1);
  });

  it("does not draw the pellets if they have been eaten", () => {
    implementPellets(
      mockEatenPellets,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockEatPellet,
      mockCheckLevelUpCondition
    );
    expect(mockEatenPellet.draw).toHaveBeenCalledTimes(0);
    expect(mockEatPellet).toHaveBeenCalledTimes(2);
    expect(mockCheckLevelUpCondition).toHaveBeenCalledTimes(1);
  });
});
