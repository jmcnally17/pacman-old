import checkLevelUpCondition from "./checkLevelUpCondition";

let mockEatenPellet;
let mockEatenPellets;
let mockUneatenPellet;
let mockUneatenPellets;
let mockObject;
let mockVariables;
let mockResetAfterLevelUp;

describe("checkLevelUpCondition", () => {
  beforeEach(() => {
    mockEatenPellet = {
      hasBeenEaten: true,
    };
    mockEatenPellets = [mockEatenPellet, mockEatenPellet, mockEatenPellet];
    mockUneatenPellet = {
      hasBeenEaten: false,
    };
    mockUneatenPellets = [mockUneatenPellet, mockUneatenPellet];
    mockVariables = {
      level: 3,
    };
    mockResetAfterLevelUp = jest.fn();
  });

  it("runs the callback and increases the level by 1 if all pellets have been eaten", () => {
    checkLevelUpCondition(
      mockEatenPellets,
      mockObject,
      mockVariables,
      mockObject,
      mockObject,
      mockObject,
      mockResetAfterLevelUp
    );
    expect(mockResetAfterLevelUp).toHaveBeenCalledTimes(1);
    expect(mockVariables.level).toBe(4);
  });

  it("does not run the callback and leaves the level unchanged if the pellets have not been eaten", () => {
    checkLevelUpCondition(
      mockUneatenPellets,
      mockObject,
      mockVariables,
      mockObject,
      mockObject,
      mockObject,
      mockResetAfterLevelUp
    );
    expect(mockResetAfterLevelUp).toHaveBeenCalledTimes(0);
    expect(mockVariables.level).toBe(3);
  });
});
