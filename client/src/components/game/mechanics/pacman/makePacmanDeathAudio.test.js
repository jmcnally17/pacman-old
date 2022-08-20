import makePacmanDeathAudio from "./makePacmanDeathAudio";

describe("makePacmanDeathAudio", () => {
  it("makes the audio object from Howler", () => {
    const deathAudio = makePacmanDeathAudio();
    expect(deathAudio).toBeInstanceOf(Howl);
  });
});
