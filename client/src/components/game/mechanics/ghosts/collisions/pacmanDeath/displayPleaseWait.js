import loadTint from "../../../eventListeners/loadTint";

export default function displayPleaseWait(ctx, callbackOne = loadTint) {
  callbackOne(ctx);
}
