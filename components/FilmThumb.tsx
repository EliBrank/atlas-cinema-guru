'use client';

import Image from "next/image";
import { SaveButtons } from "./SaveButtons";
import { useState } from "react";

export const FilmThumb = ({ film, size }: { film: any; size: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative size-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <>
          <div className="absolute top-0 h-8 w-full p-4">
            <SaveButtons />
          </div>
          <div className="absolute bottom-0 h-4/9 w-full rounded-b-2xl bg-primary-dark-tint p-4">
            <h3>Beneath the Surface (2021)</h3>
            <p className="mt-2 line-clamp-2 text-sm">
              A marine biologist discovers a hidden underwater civiilization Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Fugit, saepe.
            </p>
            <div className="mt-2 flex gap-2 overflow-x-auto p-0.5">
              <span className="genreButton bg-accent">Sci-fi</span>
              <span className="genreButton bg-accent">Adventure</span>
              <span className="genreButton bg-accent">Adventure</span>
              <span className="genreButton bg-accent">Adventure</span>
              <span className="genreButton bg-accent">Adventure</span>
              <span className="genreButton bg-accent">Adventure</span>
              <span className="genreButton bg-accent">Adventure</span>
            </div>
          </div>
        </>
      )}
      <Image
        src={film.image}
        alt={film.title}
        width={size}
        height={size}
        className="rounded-2xl outline-2 outline-accent"
      />
    </div>
  );
};
