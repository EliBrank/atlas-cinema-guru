'use client';

import Image from "next/image";
import { useState } from "react";

export const FilmThumb = ({ film, size }: { film: any; size: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <Image src={film.image} alt={film.title} width={size} height={size} className="rounded-2xl border-2 border-accent" />
    </div>
  );
};
