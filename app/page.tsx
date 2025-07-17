import { auth } from "@/auth";
import { FilmGrid } from "@/components/FilmGrid";
import { PageButtons } from "@/components/PageButtons";
import { QueryOptions } from "@/components/QueryOptions";
import { fetchTitles } from "@/lib/data";

export default async function Page({ searchParams }: {
  searchParams?: {
    page?: string;
    minYear?: string;
    maxYear?: string;
    query?: string;
    genres?: string;
  };
}) {
  const session = await auth();
  const userEmail = session?.user?.email || '';

  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const minYear = 1900;
  const maxYear = 2025;
  const query = "";
  const genres = ["Horror"];
  const films = await fetchTitles(
    page,
    minYear,
    maxYear,
    query,
    genres,
    userEmail,
  );
  return (
    <div className="flex h-100 w-full flex-col gap-8">
      <QueryOptions />
      <FilmGrid films={films} />
      <div className="flex justify-center pb-8">
        <PageButtons />
      </div>
    </div>
  );
}
