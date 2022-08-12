export default function implementTunnel(character, variables) {
  if (character.position.x === (variables.length * 57) / 2)
    character.position.x = -variables.length / 2;
  else if (character.position.x === -variables.length / 2)
    character.position.x = (variables.length * 57) / 2;
}
