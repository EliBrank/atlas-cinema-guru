'use client';

export const GenreButton = ({ genreName }: { genreName: string }) => {
  return (
    <div>
      <button className="genreButton">
        {genreName}
      </button>
    </div>
  );
}
