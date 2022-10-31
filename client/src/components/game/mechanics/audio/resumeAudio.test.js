import resumeAudio from "./resumeAudio";

describe("resumeAudio", () => {
  it("calls playPacmanDeathAndLevelUpIfLoaded on the audioPlayer", () => {
    const mockAudioPlayer = {
      playPacmanDeathAndLevelUpIfLoaded: () => undefined,
    };
    jest.spyOn(mockAudioPlayer, "playPacmanDeathAndLevelUpIfLoaded");
    resumeAudio(mockAudioPlayer);
    expect(
      mockAudioPlayer.playPacmanDeathAndLevelUpIfLoaded
    ).toHaveBeenCalledTimes(1);
  });
});
