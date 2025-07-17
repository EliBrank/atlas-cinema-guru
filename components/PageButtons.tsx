'use client';

import { useState } from "react";

export const PageButtons = () => {
  const [hasNext, setHasNext] = useState(true);
  const [hasPrev, setHasPrev] = useState(false);

  return (
    <div className="flex gap-1">
      <button className={`${hasPrev ? 'bg-accent cursor-pointer' : 'text-accent border-2'} min-h-12 min-w-32 rounded-l-full border-accent p-4 text-primary-dark`}>
        {hasPrev ? 'Previous' : ''}
      </button>
      <button className={`${hasNext ? 'bg-accent cursor-pointer' : 'text-accent border-2'} min-h-12 min-w-32 rounded-r-full border-accent p-4 text-primary-dark`}>
        {hasNext ? 'Next' : ''}
      </button>
    </div>
  );
}
