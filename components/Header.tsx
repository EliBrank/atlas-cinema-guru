import { FilmIcon } from "@heroicons/react/24/outline";
import { UserInfo } from "./UserInfo";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex min-h-16 items-center bg-accent-tint">
      <div className="wrapper flex w-full items-center justify-between px-4 text-primary-dark">

        <Link href='/' className="logo flex items-center gap-2">
          <FilmIcon className="size-6" />
          <h1 className="text-2xl font-bold">
            Cinema Guru
          </h1>
        </Link>

        <UserInfo />

      </div>
    </header>
  );
}
