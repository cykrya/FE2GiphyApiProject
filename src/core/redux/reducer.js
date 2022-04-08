const initialState = { keyword: null, gifs: [], trendingGifs: [] };

function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case "searchGIF":
      return { ...state, keyword: action.payload };
    case "updateTrendingGifs":
      return { ...state, trendingGifs: action.payload };
    case "updateGif":
      return { ...state, gifs: action.payload };
    default:
      return state;
  }
}

export { SearchReducer };
