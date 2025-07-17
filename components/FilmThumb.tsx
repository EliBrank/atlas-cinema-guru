import Image from "next/image";
import { SaveButtons } from "./SaveButtons";

export const FilmThumb = ({ film, size }: { film: any; size: number }) => {
  return (
    <div className="group relative size-fit">
      <div className="absolute top-0 h-8 w-full p-4 opacity-0 transition-opacity group-hover:opacity-100">
        <SaveButtons film={film} />
      </div>
      <div className="absolute bottom-0 h-4/9 w-full rounded-b-2xl bg-primary-dark-tint p-4 opacity-0 transition-opacity group-hover:opacity-100">
        <h3>{`${film.title} (${film.released})`}</h3>
        <p className="mt-2 line-clamp-2 text-sm">
          {film.synopsis}
        </p>
        <div className="mt-2 flex gap-2 overflow-x-auto p-0.5">
          <span className="genreButton bg-accent">{film.genre}</span>
        </div>
      </div>
      <Image
        src={film.image || null}
        alt={film.title}
        width={size}
        height={size}
        className="rounded-2xl outline-2 outline-accent"
      />
    </div>
  );
};
