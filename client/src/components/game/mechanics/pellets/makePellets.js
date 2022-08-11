import Pellet from "../../models/pellet";

export default function makePellets(map, variables) {
  const pellets = [];
  map.forEach((row, i) => {
    row.forEach((element, j) => {
      if (element === ".") {
        const pellet = new Pellet(
          {
            position: {
              x: (variables.length * (2 * j + 1)) / 2,
              y: (variables.length * (2 * i + 1)) / 2,
            },
          },
          variables.length
        );
        pellets.push(pellet);
      }
    });
  });
  return pellets;
}
