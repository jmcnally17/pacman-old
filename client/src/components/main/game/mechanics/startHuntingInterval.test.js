import startHuntingInterval from "./startHuntingInterval";

describe("startHuntingInterval", () => {
  it("calls setInterval to begin the ghosts hunting cycle", () => {
    jest.useFakeTimers();
    const mockGhost = {
      changeHuntingState: () => true,
      huntingInterval: null,
    };
    const mockGhosts = [mockGhost, mockGhost];
    const intervalSpy = jest.spyOn(global, "setInterval");
    const huntingSpy = jest.spyOn(mockGhost, "changeHuntingState");
    startHuntingInterval(mockGhosts);
    expect(intervalSpy).toHaveBeenCalledTimes(2);
    expect(mockGhost.huntingInterval).not.toBeNull();
    jest.runOnlyPendingTimers();
    expect(huntingSpy).toHaveBeenCalledTimes(2);
  });
});
