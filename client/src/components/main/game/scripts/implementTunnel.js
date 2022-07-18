const implementTunnel = (character) => {
  if (character.position.x === 570) character.position.x = -10;
  else if (character.position.x === -10) character.position.x = 570;
};

module.exports = implementTunnel;
