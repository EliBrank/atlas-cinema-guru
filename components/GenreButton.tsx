'use client';

export const GenreButton = ({ genreName }: { genreName: string }) => {
  return (
    <div>
      <button className="toggleButton">
        {genreName}
      </button>
    </div>
  );
}
