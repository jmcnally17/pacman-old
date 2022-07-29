export default function getBackendUrl(reactAppUrl) {
  let url;
  if (reactAppUrl) {
    url = `${reactAppUrl}/backend/scores`;
  } else {
    url = "http://localhost:9000/backend/scores";
  }
  return url;
}
