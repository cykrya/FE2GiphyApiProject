const SearchBar = ({ handleSubmit, handleChange }) => {
  return (
    <form style={{ marginBottom: "20px" }} onSubmit={handleSubmit}>
      <label htmlFor="name">input</label>
      <input onChange={handleChange} type="text" />
      <button>search</button>
    </form>
  );
};

export default SearchBar;
