import { GenreFilter } from "./GenreFilter";
import { SearchFilter } from "./SearchFilter";
import { YearFilter } from "./YearFilter";

export const QueryOptions = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="searchAndYearFilter flex w-1/3 flex-col gap-4">
        <SearchFilter />
        <YearFilter />
      </div>
      <div className="w-1/3">
        <GenreFilter />
      </div>
    </div>
  );
}
