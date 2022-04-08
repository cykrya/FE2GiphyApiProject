function updateKeyword(input) {
  return {
    type: "searchGIF",
    payload: input
  };
}

function updateGifs(input) {
  return {
    type: "updateGif",
    payload: input
  };
}

function updateTrendingGifs(input) {
  return {
    type: "updateTrendingGifs",
    payload: input
  };
}

export { updateKeyword, updateGifs, updateTrendingGifs };
