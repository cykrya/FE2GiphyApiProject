import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import GIF from "../../component/gif";
// import { updateKeyword } from "../../core/redux/slice";
import { updateTrendingGifs } from "../../core/redux/action";

const Trending = () => {
  const gifs = useSelector((state) => state.search.trendingGifs);
  const dispatch = useDispatch();

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const gifs = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=9V4YqJpwVJzOgdn8xbakWUECObdbD9Qx&limit=12`
    )
      .then((res) => res.json())
      .then((res) => res.data);
    dispatch(updateTrendingGifs(gifs));
  };

  return (
    <>
      <h1>Trending</h1>
      <div style={{ marginBottom: "20px" }}>
        <Link to="/">Liat Home</Link>
        <br />
        <a href="/">Liat Home</a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {gifs?.length > 0 &&
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

export default Trending;
