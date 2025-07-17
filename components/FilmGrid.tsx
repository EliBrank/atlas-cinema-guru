import { FilmThumb } from "./FilmThumb";

export const FilmGrid = ({ films }: { films: any[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {films.map(film => (
        <div key={film.id}>
          <FilmThumb film={film} size={350} />
        </div>
      ))}
    </div>
  );
}
