/* eslint-disable no-undef */
const hitBoundaryConditional = (character, boundary, { velocity }) => {
  if (
    character.position.y - character.radius + velocity.y <=
      boundary.position.y + boundary.height &&
    character.position.y + character.radius + velocity.y >=
      boundary.position.y &&
    character.position.x + character.radius + velocity.x >=
      boundary.position.x &&
    character.position.x - character.radius + velocity.x <=
      boundary.position.x + boundary.width
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = hitBoundaryConditional;
