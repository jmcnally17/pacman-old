import loadPauseText from "./loadPauseText";
import loadPauseTint from "./loadPauseTint";

export default function loadPauseOverlay(
  ctx,
  pauseTextImage,
  callbackOne = loadPauseTint,
  callbackTwo = loadPauseText
) {
  callbackOne(ctx);
  callbackTwo(ctx, pauseTextImage);
}
