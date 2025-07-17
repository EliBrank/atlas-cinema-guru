import { auth } from "@/auth";
import { FilmGrid } from "@/components/FilmGrid";
import { PageButtons } from "@/components/PageButtons";
import { QueryOptions } from "@/components/QueryOptions";
import { fetchGenres, fetchTitles } from "@/lib/data";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    minYear?: string;
    maxYear?: string;
    query?: string;
    genres?: string;
  };
}) {
  const session = await auth();
  const userEmail = session?.user?.email || "";
  const allGenres = await fetchGenres();

  const currentPage = searchParams?.page ? parseInt(searchParams.page) : 1;
  const minYear = searchParams?.minYear ? parseInt(searchParams.minYear) : 1900;
  const maxYear = searchParams?.maxYear ? parseInt(searchParams.maxYear) : 2025;
  const query = searchParams?.query || "";
  const genres = searchParams?.genres ? searchParams.genres.split(",") : allGenres;

  const films = await fetchTitles(
    currentPage,
    minYear,
    maxYear,
    query,
    genres,
    userEmail,
  );

  const filmsNextPage = await fetchTitles(
    currentPage + 1,
    minYear,
    maxYear,
    query,
    genres,
    userEmail,
  );
  const hasNextPage = filmsNextPage.length > 0;
  const hasPrevPage = currentPage > 1;

  return (
    <div className="flex h-100 w-full flex-col gap-8">
      <QueryOptions />
      <FilmGrid films={films} />
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
