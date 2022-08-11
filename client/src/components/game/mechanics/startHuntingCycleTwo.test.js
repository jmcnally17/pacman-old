import startHuntingCycle from "./startHuntingCycle";

describe("startHuntingCycle", () => {
  it("calls setTimeout with a time of twenty seconds when the count is 1 and takes 1 away from the count", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");
    const mockGhost = {
      changeHuntingState: () => true,
    };
    const mockGhosts = [mockGhost, mockGhost];
    const mockCount = {
      number: 1,
    };
    const mockHuntingTimeout = {
      timeout: null,
    };
    const huntingSpy = jest.spyOn(mockGhost, "changeHuntingState");
    startHuntingCycle(mockGhosts, mockCount, mockHuntingTimeout);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 20000);
    expect(mockCount.number).toBe(0);
    expect(mockHuntingTimeout.timeout).not.toBeNull();

    jest.runOnlyPendingTimers();
    expect(huntingSpy).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenCalledTimes(2);
  });
});
