import checkDirectionChange from "./checkDirectionChange";

export default function changeDirection(
  lastKeyPressed,
  pacman,
  boundaries,
  callback = checkDirectionChange
) {
  if (lastKeyPressed.key === "up") {
    callback(pacman, boundaries, {
      velocity: {
        x: 0,
        y: -pacman.speed,
      },
    });
  } else if (lastKeyPressed.key === "down") {
    callback(pacman, boundaries, {
      velocity: {
        x: 0,
        y: pacman.speed,
      },
    });
  } else if (lastKeyPressed.key === "right") {
    callback(pacman, boundaries, {
      velocity: {
        x: pacman.speed,
        y: 0,
      },
    });
  } else if (lastKeyPressed.key === "left") {
    callback(pacman, boundaries, {
      velocity: {
        x: -pacman.speed,
        y: 0,
      },
    });
  }
}
