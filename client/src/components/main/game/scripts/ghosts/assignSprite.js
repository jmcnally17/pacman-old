export default function assingSprite(ghost) {
  if (ghost.isScared) {
    ghost.image.src = "./images/scaredGhostBlue.png";
  } else {
    if (ghost.colour === "red") {
      if (ghost.velocity.x > 0) {
        ghost.image.src = "./images/redGhostRight.png";
      } else if (ghost.velocity.x < 0) {
        ghost.image.src = "./images/redGhostLeft.png";
      } else if (ghost.velocity.y < 0) {
        ghost.image.src = "./images/redGhostUp.png";
      } else if (ghost.velocity.y > 0) {
        ghost.image.src = "./images/redGhostDown.png";
      }
    } else if (ghost.colour === "pink") {
      if (ghost.velocity.x > 0) {
        ghost.image.src = "./images/pinkGhostRight.png";
      } else if (ghost.velocity.x < 0) {
        ghost.image.src = "./images/pinkGhostLeft.png";
      } else if (ghost.velocity.y < 0) {
        ghost.image.src = "./images/pinkGhostUp.png";
      } else if (ghost.velocity.y > 0) {
        ghost.image.src = "./images/pinkGhostDown.png";
      }
    } else if (ghost.colour === "cyan") {
      if (ghost.velocity.x > 0) {
        ghost.image.src = "./images/cyanGhostRight.png";
      } else if (ghost.velocity.x < 0) {
        ghost.image.src = "./images/cyanGhostLeft.png";
      } else if (ghost.velocity.y < 0) {
        ghost.image.src = "./images/cyanGhostUp.png";
      } else if (ghost.velocity.y > 0) {
        ghost.image.src = "./images/cyanGhostDown.png";
      }
    } else if (ghost.colour === "orange") {
      if (ghost.velocity.x > 0) {
        ghost.image.src = "./images/orangeGhostRight.png";
      } else if (ghost.velocity.x < 0) {
        ghost.image.src = "./images/orangeGhostLeft.png";
      } else if (ghost.velocity.y < 0) {
        ghost.image.src = "./images/orangeGhostUp.png";
      } else if (ghost.velocity.y > 0) {
        ghost.image.src = "./images/orangeGhostDown.png";
      }
    }
  }
}
