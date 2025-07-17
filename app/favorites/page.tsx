import { auth } from "@/auth";
import { FilmGrid } from "@/components/FilmGrid";
import { PageButtons } from "@/components/PageButtons";
import { fetchActivities } from "@/lib/data";

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
  const favorites = await fetchActivities(currentPage, userEmail);

  const favoritesNextPage = await fetchActivities(currentPage + 1, userEmail);
  const hasNextPage = favoritesNextPage.length > 0;
  const hasPrevPage = currentPage > 1;
  return (
    <div className="flex h-100 w-full flex-col gap-8">
      <FilmGrid films={favorites} />
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
