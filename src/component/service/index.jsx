export function getGifs() {
  return fetch(
    "https://api.giphy.com/1/gifs/search?q=mario&api_key=9V4YqJpwVJzOgdn8xbakWUECObdbD9Qx&limit=12"
  ).then((data) => data.json());
}
