import { fetchGenres } from "@/lib/data";
import { GenreButton } from "./GenreButton";

export const GenreFilter = async () => {
  const genreList = await fetchGenres();

  return (
    <div className="flex flex-col gap-2">
      <h3>Genres</h3>
      <div className="flex flex-wrap gap-2">
        {genreList.map((genre) => (
          <div key={genre}>
            <GenreButton genreName={genre} />
          </div>
        ))}
      </div>
    </div>
  );
}
