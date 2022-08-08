export default function implementTunnel(character, length) {
  if (character.position.x === (length * 57) / 2)
    character.position.x = -length / 2;
  else if (character.position.x === -length / 2)
    character.position.x = (length * 57) / 2;
}
