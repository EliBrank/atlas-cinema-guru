import { auth } from "@/auth";
import { FilmGrid } from "@/components/FilmGrid";
import { PageButtons } from "@/components/PageButtons";
import { fetchFavorites } from "@/lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const session = await auth();
  const userEmail = session?.user?.email || "";

  const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;
  const favorites = await fetchFavorites(currentPage, userEmail);
  console.log(favorites);

  const favoritesNextPage = await fetchFavorites(currentPage + 1, userEmail);
  const hasNextPage = favoritesNextPage.length > 0;
  const hasPrevPage = currentPage > 1;
  return (
    <div className="flex h-100 w-full flex-col gap-8">
      <h2 className="text-center text-4xl font-bold">Favorites</h2>
      <FilmGrid films={favorites}></FilmGrid>
      <div className="flex justify-center pb-8">
        <PageButtons
          currentPage={currentPage}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </div>
    </div>
  );
}
