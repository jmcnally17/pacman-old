import Pellet from "../../models/pellet";

export default function makePellets(map, length) {
  const pellets = [];
  map.forEach((row, i) => {
    row.forEach((element, j) => {
      if (element === ".") {
        const pellet = new Pellet(
          {
            position: {
              x: (length * (2 * j + 1)) / 2,
              y: (length * (2 * i + 1)) / 2,
            },
          },
          length
        );
        pellets.push(pellet);
      }
    });
  });
  return pellets;
}
