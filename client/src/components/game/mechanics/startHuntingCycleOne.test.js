import startHuntingCycle from "./startHuntingCycle";

describe("startHuntingCycle", () => {
  it("calls setTimeout with a time of seven seconds when the count is 0 and adds 1 to the count", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    const mockGhost = {
      changeHuntingState: () => true,
    };
    const mockGhosts = [mockGhost, mockGhost];
    const mockCount = {
      number: 0,
    };
    const mockHuntingTimeout = {
      timeout: null,
    };
    const huntingSpy = jest.spyOn(mockGhost, "changeHuntingState");
    startHuntingCycle(mockGhosts, mockCount, mockHuntingTimeout);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 7000);
    expect(mockCount.number).toBe(1);
    expect(mockHuntingTimeout.timeout).not.toBeNull();

    jest.runOnlyPendingTimers();
    expect(huntingSpy).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenCalledTimes(2);
  });
});
