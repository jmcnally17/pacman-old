import implementPowerUps from "./implementPowerUps";

let mockUneatenPowerUp;
let mockUneatenPowerUps;
let mockEatenPowerUp;
let mockEatenPowerUps;
let mockObject;
let uneatenUpdateSpy;
let eatenUpdateSpy;
let mockEatPowerUp;

describe("implementPowerUps", () => {
  beforeEach(() => {
    mockUneatenPowerUp = {
      hasBeenEaten: false,
      update: () => undefined,
    };
    mockUneatenPowerUps = [
      mockUneatenPowerUp,
      mockUneatenPowerUp,
      mockUneatenPowerUp,
    ];
    mockEatenPowerUp = {
      hasBeenEaten: true,
      update: () => undefined,
    };
    mockEatenPowerUps = [mockEatenPowerUp, mockEatenPowerUp];
    uneatenUpdateSpy = jest.spyOn(mockUneatenPowerUp, "update");
    eatenUpdateSpy = jest.spyOn(mockEatenPowerUp, "update");
    mockEatPowerUp = jest.fn();
  });

  it("calls the necessary funcions to implement the power up functionality", () => {
    implementPowerUps(
      mockUneatenPowerUps,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockEatPowerUp
    );
    expect(uneatenUpdateSpy).toHaveBeenCalledTimes(3);
    expect(mockEatPowerUp).toHaveBeenCalledTimes(3);
  });

  it("does call update on the power ups if they have been eaten", () => {
    implementPowerUps(
      mockEatenPowerUps,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockObject,
      mockEatPowerUp
    );
    expect(eatenUpdateSpy).toHaveBeenCalledTimes(0);
    expect(mockEatPowerUp).toHaveBeenCalledTimes(2);
  });
});
