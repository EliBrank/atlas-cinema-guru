export const SearchFilter = () => {
  return (
    <div>
      <form action="">
        <div className="flex flex-col">
          <label htmlFor="movieQuery">Search</label>
          <input
            type="text"
            name="moveiQuery"
            placeholder="Search Movies..."
            className="textField"
          />
        </div>
      </form>
    </div>
  );
};
