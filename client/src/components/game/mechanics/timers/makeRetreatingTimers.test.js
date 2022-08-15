import makeRetreatingTimers from "./makeRetreatingTimers";

describe("makeRetreatingTimers", () => {
  it("makes each retreating timer and attaches them each to a ghost", () => {
    const mockGhostOne = {
      retreatingTimer: null,
    };
    const mockGhostTwo = {
      retreatingTimer: null,
    };
    const mockGhostThree = {
      retreatingTimer: null,
    };
    const mockGhostFour = {
      retreatingTimer: null,
    };
    const mockGhosts = [
      mockGhostOne,
      mockGhostTwo,
      mockGhostThree,
      mockGhostFour,
    ];
    const retreatingTimers = makeRetreatingTimers(mockGhosts);
    expect(retreatingTimers.length).toBe(4);

    expect(mockGhostOne.retreatingTimer).toEqual(retreatingTimers[0]);
    expect(retreatingTimers[0].ghost).toEqual(mockGhostOne);

    expect(mockGhostTwo.retreatingTimer).toEqual(retreatingTimers[1]);
    expect(retreatingTimers[1].ghost).toEqual(mockGhostTwo);

    expect(mockGhostThree.retreatingTimer).toEqual(retreatingTimers[2]);
    expect(retreatingTimers[2].ghost).toEqual(mockGhostThree);

    expect(mockGhostFour.retreatingTimer).toEqual(retreatingTimers[3]);
    expect(retreatingTimers[3].ghost).toEqual(mockGhostFour);
  });
});
