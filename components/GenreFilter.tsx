import { GenreButton } from "./GenreButton";

export const GenreFilter = () => {
  return (
    <div className="flex flex-col gap-2">
      <h3>Genres</h3>
      <div className="flex flex-wrap gap-2">
        <GenreButton genreName="Horror" />
        <GenreButton genreName="Action" />
        <GenreButton genreName="Comedy" />
        <GenreButton genreName="Thriller" />
        <GenreButton genreName="Romance" />
        <GenreButton genreName="Drama" />
        <GenreButton genreName="Sci-fi" />
        <GenreButton genreName="Western" />
        <GenreButton genreName="Adventure" />
      </div>
    </div>
  );
}
