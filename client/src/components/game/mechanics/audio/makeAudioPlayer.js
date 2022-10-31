import AudioPlayer from "../../models/audioPlayer";
import makeGhostAudioObjects from "./makeGhostAudioObjects";
import makeLevelUpAudio from "./makeLevelUpAudio";
import makePacmanDeathAudio from "./makePacmanDeathAudio";

export default function makeAudioPlayer(
  callbackOne = makeGhostAudioObjects,
  callbackTwo = makePacmanDeathAudio,
  callbackThree = makeLevelUpAudio
) {
  const ghostAudioObjects = callbackOne();
  const pacmanDeathAudio = callbackTwo();
  const levelUpAudio = callbackThree();
  const audioPlayer = new AudioPlayer(
    ghostAudioObjects[0],
    ghostAudioObjects[1],
    ghostAudioObjects[2],
    pacmanDeathAudio,
    levelUpAudio
  );
  return audioPlayer;
}
