"use client";

import {
  StarIcon as StarOutline,
  ClockIcon as ClockOutline,
} from "@heroicons/react/24/outline";
import {
  StarIcon as StarSolid,
  ClockIcon as ClockSolid,
} from "@heroicons/react/24/solid";

export const SaveButtons = () => {
  return (
    <div className="flex justify-end gap-2">
      <StarOutline className="h-6 w-6" />
      <ClockOutline className="h-6 w-6" />
    </div>
  );
};
