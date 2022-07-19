let url;
if (process.env.REACT_APP_URL) {
  url = `${process.env.REACT_APP_URL}/backend/scores`;
} else {
  url = "http://localhost:9000/backend/scores";
}

export default function endGame(animationId, score, name) {
  cancelAnimationFrame(animationId);
  console.log(`Game Over!\nYou scored ${score.points} points.`);
  console.log(name);
  const data = {
    name: name,
    points: score.points,
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success: ", data))
    .catch((error) => console.error("Error: ", error));
}
