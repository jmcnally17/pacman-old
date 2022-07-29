import getBackendUrl from "./getBackendUrl";

export default async function saveScore(score, name, callback = getBackendUrl) {
  const data = {
    name: name,
    points: score.points,
  };
  let response;
  await fetch(callback(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => (response = `Success: ${data.message}`))
    .catch((error) => (response = `Error: ${error}`));
  return response;
}
