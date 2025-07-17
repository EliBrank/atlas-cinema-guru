import {
  StarIcon as StarOutline,
  ClockIcon as ClockOutline,
} from "@heroicons/react/24/outline";
import {
  StarIcon as StarSolid,
  ClockIcon as ClockSolid,
} from "@heroicons/react/24/solid";
import { toggleFavorite, toggleWatchLater } from "@/lib/actions";
import { revalidatePath } from "next/cache";

export const SaveButtons = async ({ film }: { film: any }) => {
  return (
    <form className="flex justify-end gap-2">
      <button
        formAction={async () => {
          "use server";
          await toggleFavorite(film.id);
          revalidatePath('/');
        }}
        className="outline-none"
      >
        {film.favorited ? (
          <StarSolid className="h-6 w-6" />
        ) : (
          <StarOutline className="h-6 w-6" />
        )}
      </button>
      <button
        formAction={async () => {
          "use server";
          await toggleWatchLater(film.id);
          revalidatePath('/');
        }}
        className="outline-none"
      >
        {film.watchLater ? (
          <ClockSolid className="h-6 w-6" />
        ) : (
          <ClockOutline className="h-6 w-6" />
        )}
      </button>
    </form>
  );
};
