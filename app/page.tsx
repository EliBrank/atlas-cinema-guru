import { FilmGrid } from "@/components/FilmGrid";
import { QueryOptions } from "@/components/QueryOptions";

export default async function Page() {
  return (
    <div className="flex h-100 w-full flex-col">
      <QueryOptions />
      <FilmGrid />
    </div>
  );
}
