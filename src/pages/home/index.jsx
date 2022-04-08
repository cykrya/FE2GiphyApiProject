import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import GIF from "../../component/gif";
import SearchBar from "../../component/searchbar/index";
// import { updateKeyword } from "../../core/redux/slice";
import { updateGifs, updateKeyword } from "../../core/redux/action";

const Home = () => {
  const currentKeyword = useSelector((state) => state.search.keyword);
  const gifs = useSelector((state) => state.search.gifs);
  const dispatch = useDispatch();

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const gifs = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${currentKeyword}&api_key=9V4YqJpwVJzOgdn8xbakWUECObdbD9Qx&limit=12`
    )
      .then((res) => res.json())
      .then((res) => res.data);
    dispatch(updateGifs(gifs));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getGifs();
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value.length > 0) dispatch(updateKeyword(e.target.value));
    else dispatch(updateKeyword(null));
  };

  return (
    <>
      <h1>Giphy</h1>
      <div style={{ marginBottom: "10px" }}>
        <Link to="/trending">Liat Trending</Link>
      </div>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <h3>Keyword dari redux: {currentKeyword}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {gifs.length > 0 &&
          gifs.map((gif) => (
            <GIF
              key={gif.id}
              url={gif.images.fixed_width.url}
              title={gif.title}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
