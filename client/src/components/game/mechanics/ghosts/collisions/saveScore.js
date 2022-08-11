import getBackendUrl from "./getBackendUrl";

export default async function saveScore(variables, callback = getBackendUrl) {
  const data = {
    name: variables.playerName,
    points: variables.score,
  };
  let response;
  await fetch(callback(process.env.REACT_APP_URL), {
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
