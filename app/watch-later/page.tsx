import { auth } from "@/auth";
import { FilmGrid } from "@/components/FilmGrid";
import { PageButtons } from "@/components/PageButtons";
import { fetchWatchLaters } from "@/lib/data";

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
  const watchLater = await fetchWatchLaters(currentPage, userEmail);
  console.log(watchLater);

  const watchLaterNextPage = await fetchWatchLaters(currentPage + 1, userEmail);
  const hasNextPage = watchLaterNextPage.length > 0;
  const hasPrevPage = currentPage > 1;
  return (
    <div className="flex h-100 w-full flex-col gap-8">
      <FilmGrid films={watchLater}></FilmGrid>
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
