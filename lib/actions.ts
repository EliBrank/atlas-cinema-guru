'use server';

import { auth } from "@/auth";
import {
  insertFavorite,
  deleteFavorite,
  insertWatchLater,
  deleteWatchLater,
  favoriteExists,
  watchLaterExists
} from "@/lib/data";

export async function toggleFavorite(title_id: string) {
  const session = await auth();
  if (!session?.user?.email) {
    throw new Error('Unauthorized');
  }

  const exists = await favoriteExists(title_id, session.user.email);
  if (exists) {
    await deleteFavorite(title_id, session.user.email);
    return { favorited: false };
  } else {
    await insertFavorite(title_id, session.user.email);
    return { favorited: true };
  }
}

export async function toggleWatchLater(title_id: string) {
  const session = await auth();
  if (!session?.user?.email) {
    throw new Error('Unauthorized');
  }

  const exists = await watchLaterExists(title_id, session.user.email);
  if (exists) {
    await deleteWatchLater(title_id, session.user.email);
    return { watchLater: false };
  } else {
    await insertWatchLater(title_id, session.user.email);
    return { watchLater: true };
  }
}
