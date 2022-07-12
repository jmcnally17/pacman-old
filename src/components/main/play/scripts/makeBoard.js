/* eslint-disable no-undef */
const Boundary = require("../models/boundary");
const Ghost = require("../models/ghost");
const PacMan = require("../models/pacman");
const Pellet = require("../models/pellet");
const changeDirection = require("./changeDirection");
const trackScore = require("./displayScore");
const hitBoundaryConditional = require("./hitBoundaryConditional");
const move = require("./move");

const length = 40;
const map = [
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", ".", ".", ".", ".", ".", ".", ".", ".", ".", "-"],
  ["-", ".", "-", ".", "-", "-", "-", ".", "-", ".", "-"],
  ["-", ".", ".", ".", ".", "-", ".", ".", ".", ".", "-"],
  ["-", ".", "-", "-", ".", ".", ".", "-", "-", ".", "-"],
  ["-", ".", ".", ".", ".", "-", ".", ".", ".", ".", "-"],
  ["-", ".", "-", ".", "-", "-", "-", ".", "-", ".", "-"],
  ["-", ".", ".", ".", ".", "-", ".", ".", ".", ".", "-"],
  ["-", ".", "-", "-", ".", ".", ".", "-", "-", ".", "-"],
  ["-", ".", ".", ".", ".", "-", ".", ".", ".", ".", "-"],
  ["-", ".", "-", ".", "-", "-", "-", ".", "-", ".", "-"],
  ["-", ".", ".", ".", ".", ".", ".", ".", ".", ".", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
];

const boundaries = [];
const pellets = [];

map.forEach((row, i) => {
  row.forEach((element, j) => {
    if (element === "-") {
      const boundary = new Boundary({
        position: {
          x: length * j,
          y: length * i,
        },
      });
      boundaries.push(boundary);
    } else if (element === ".") {
      const pellet = new Pellet({
        position: {
          x: (length * (2 * j + 1)) / 2,
          y: (length * (2 * i + 1)) / 2,
        },
      });
      pellets.push(pellet);
    }
  });
});

const pacman = new PacMan({
  position: {
    x: (3 * length) / 2,
    y: (3 * length) / 2,
  },
  velocity: {
    x: 0,
    y: 0,
  },
});

const lastKeyPressed = {
  key: "",
};

let score = 0;

const ghosts = [
  new Ghost({
    position: {
      x: 380,
      y: 60,
    },
    velocity: {
      x: 0,
      y: 5,
    },
    colour: "red",
  }),
  new Ghost({
    position: {
      x: 60,
      y: 460,
    },
    velocity: {
      x: 0,
      y: -5,
    },
    colour: "pink",
  }),
  new Ghost({
    position: {
      x: 380,
      y: 460,
    },
    velocity: {
      x: -5,
      y: 0,
    },
    colour: "cyan",
  }),
];

const makeBoard = () => {
  requestAnimationFrame(makeBoard);
  const board = document.querySelector("#board");
  const ctx = board.getContext("2d");
  ctx.clearRect(0, 0, board.clientWidth, board.clientHeight);

  boundaries.forEach((boundary) => {
    boundary.draw(ctx);
    if (
      hitBoundaryConditional(pacman, boundary, {
        velocity: {
          x: pacman.velocity.x,
          y: pacman.velocity.y,
        },
      })
    ) {
      pacman.velocity.x = 0;
      pacman.velocity.y = 0;
    }
  });
  let count = 0;
  pellets.forEach((pellet) => {
    if (!pellet.hasBeenEaten) {
      pellet.draw(ctx);
    } else {
      count++;
    }
    if (count === pellets.length) {
      window.alert(`Congratulations, you win!\nYou scored ${score} points!`);
    }
    if (
      pellet.position.x === pacman.position.x &&
      pellet.position.y === pacman.position.y &&
      !pellet.hasBeenEaten
    ) {
      pellet.changeEatenState(true);
      score += 10;
    }
  });

  ghosts.forEach((ghost) => {
    const collisions = [];
    ghost.update(ctx);
    boundaries.forEach((boundary) => {
      if (
        !collisions.includes("down") &&
        hitBoundaryConditional(ghost, boundary, {
          velocity: {
            x: 0,
            y: 5,
          },
        })
      ) {
        collisions.push("down");
      } else if (
        !collisions.includes("right") &&
        hitBoundaryConditional(ghost, boundary, {
          velocity: {
            x: 5,
            y: 0,
          },
        })
      ) {
        collisions.push("right");
      } else if (
        !collisions.includes("left") &&
        hitBoundaryConditional(ghost, boundary, {
          velocity: {
            x: -5,
            y: 0,
          },
        })
      ) {
        collisions.push("left");
      } else if (
        !collisions.includes("up") &&
        hitBoundaryConditional(ghost, boundary, {
          velocity: {
            x: 0,
            y: -5,
          },
        })
      ) {
        collisions.push("up");
      }
    });
    if (collisions.length > ghost.prevCollisions) {
      ghost.prevCollisions = collisions;
    }

    if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)) {
      if (ghost.velocity.x > 0) ghost.prevCollisions.push("right");
      else if (ghost.velocity.x < 0) ghost.prevCollisions.push("left");
      else if (ghost.velocity.y > 0) ghost.prevCollisions.push("down");
      else if (ghost.velocity.y < 0) ghost.prevCollisions.push("up");

      const pathways = ghost.prevCollisions.filter((collision) => {
        return !collisions.includes(collision);
      });
      const direction = pathways[Math.floor(Math.random() * pathways.length)];
      if (direction === "up") {
        ghost.velocity.x = 0;
        ghost.velocity.y = -5;
      } else if (direction === "down") {
        ghost.velocity.x = 0;
        ghost.velocity.y = 5;
      } else if (direction === "right") {
        ghost.velocity.x = 5;
        ghost.velocity.y = 0;
      } else if (direction === "left") {
        ghost.velocity.x = -5;
        ghost.velocity.y = 0;
      }

      ghost.prevCollisions = [];
    }
  });

  move(lastKeyPressed);
  changeDirection(lastKeyPressed, pacman, boundaries);
  pacman.update(ctx);
  trackScore(score);
};

module.exports = makeBoard;
