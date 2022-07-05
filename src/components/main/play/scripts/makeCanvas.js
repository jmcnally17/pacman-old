/* eslint-disable no-undef */
const Boundary = require("../models/boundary");
const PacMan = require("../models/pacman");
const move = require("./move");

const length = 40;
const map = [
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
  ["-", " ", "-", " ", "-", "-", "-", " ", "-", " ", "-"],
  ["-", " ", " ", " ", " ", "-", " ", " ", " ", " ", "-"],
  ["-", " ", "-", "-", " ", " ", " ", "-", "-", " ", "-"],
  ["-", " ", " ", " ", " ", "-", " ", " ", " ", " ", "-"],
  ["-", " ", "-", " ", "-", "-", "-", " ", "-", " ", "-"],
  ["-", " ", " ", " ", " ", "-", " ", " ", " ", " ", "-"],
  ["-", " ", "-", "-", " ", " ", " ", "-", "-", " ", "-"],
  ["-", " ", " ", " ", " ", "-", " ", " ", " ", " ", "-"],
  ["-", " ", "-", " ", "-", "-", "-", " ", "-", " ", "-"],
  ["-", " ", " ", " ", " ", " ", " ", " ", " ", " ", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
];

let boundaries = [];

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

let lastKeyPressed = {
  key: "",
};

const makeCanvas = () => {
  requestAnimationFrame(makeCanvas);
  const board = document.querySelector("#board");
  const ctx = board.getContext("2d");
  ctx.clearRect(0, 0, board.clientWidth, board.clientHeight);

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
    if (count > 0) {
      pacman.velocity.y === 0;
    } else {
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
    if (count > 0) {
      pacman.velocity.y === 0;
    } else {
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
    if (count > 0) {
      pacman.velocity.x === 0;
    } else {
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
    if (count > 0) {
      pacman.velocity.x === 0;
    } else {
      pacman.velocity.x = -5;
      pacman.velocity.y = 0;
    }
  }

  boundaries.forEach((boundary) => {
    boundary.draw(ctx);

    if (
      pacman.position.y - pacman.radius + pacman.velocity.y <=
        boundary.position.y + boundary.height &&
      pacman.position.y + pacman.radius + pacman.velocity.y >=
        boundary.position.y &&
      pacman.position.x + pacman.radius + pacman.velocity.x >=
        boundary.position.x &&
      pacman.position.x - pacman.radius + pacman.velocity.x <=
        boundary.position.x + boundary.width
    ) {
      pacman.velocity.x = 0;
      pacman.velocity.y = 0;
    }
  });

  move(lastKeyPressed);
  pacman.update(ctx);
};

module.exports = makeCanvas;
