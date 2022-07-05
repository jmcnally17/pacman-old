/* eslint-disable no-undef */
const changeDirection = (lastKeyPressed, pacman, boundaries) => {
  if (lastKeyPressed.key === "up") {
    let count = 0;
    for (let i = 0; i < boundaries.length; i++) {
      if (
        pacman.position.y - pacman.radius - 5 <=
          boundaries[i].position.y + boundaries[i].height &&
        pacman.position.y + pacman.radius >= boundaries[i].position.y &&
        pacman.position.x + pacman.radius >= boundaries[i].position.x &&
        pacman.position.x - pacman.radius <=
          boundaries[i].position.x + boundaries[i].width
      ) {
        count++;
      }
    }
    if (count === 0) {
      pacman.velocity.y = -5;
      pacman.velocity.x = 0;
    }
  } else if (lastKeyPressed.key === "down") {
    let count = 0;
    for (let i = 0; i < boundaries.length; i++) {
      if (
        pacman.position.y - pacman.radius <=
          boundaries[i].position.y + boundaries[i].height &&
        pacman.position.y + pacman.radius + 5 >= boundaries[i].position.y &&
        pacman.position.x + pacman.radius >= boundaries[i].position.x &&
        pacman.position.x - pacman.radius <=
          boundaries[i].position.x + boundaries[i].width
      ) {
        count++;
      }
    }
    if (count === 0) {
      pacman.velocity.y = 5;
      pacman.velocity.x = 0;
    }
  } else if (lastKeyPressed.key === "right") {
    let count = 0;
    for (let i = 0; i < boundaries.length; i++) {
      if (
        pacman.position.y - pacman.radius <=
          boundaries[i].position.y + boundaries[i].height &&
        pacman.position.y + pacman.radius >= boundaries[i].position.y &&
        pacman.position.x + pacman.radius + 5 >= boundaries[i].position.x &&
        pacman.position.x - pacman.radius <=
          boundaries[i].position.x + boundaries[i].width
      ) {
        count++;
      }
    }
    if (count === 0) {
      pacman.velocity.x = 5;
      pacman.velocity.y = 0;
    }
  } else if (lastKeyPressed.key === "left") {
    let count = 0;
    for (let i = 0; i < boundaries.length; i++) {
      if (
        pacman.position.y - pacman.radius <=
          boundaries[i].position.y + boundaries[i].height &&
        pacman.position.y + pacman.radius >= boundaries[i].position.y &&
        pacman.position.x + pacman.radius >= boundaries[i].position.x &&
        pacman.position.x - pacman.radius - 5 <=
          boundaries[i].position.x + boundaries[i].width
      ) {
        count++;
      }
    }
    if (count === 0) {
      pacman.velocity.x = -5;
      pacman.velocity.y = 0;
    }
  }
};

module.exports = changeDirection;
