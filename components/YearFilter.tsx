export const YearFilter = () => {
  return (
    <div>
      <form action="">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="minYear">Min Year</label>
            <input
              type="number"
              name="minYear"
              className="textField w-full"
              defaultValue={2000}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="maxYear">Max Year</label>
            <input
              type="number"
              name="maxYear"
              className="textField w-full"
              defaultValue={2025}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
