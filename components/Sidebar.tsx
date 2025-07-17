import { SidebarActivities } from "./SidebarActivities";
import { SidebarItem } from "./SidebarItem";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="group/sidebar sticky h-full w-24 overflow-y-auto bg-accent p-6 contain-content hover:w-64" >
      <nav className="mb-6 flex flex-col gap-6 px-4">
        <Link href={'/'}>
          <SidebarItem iconName="Home" />
        </Link>
        <Link href={'/favorites'}>
          <SidebarItem iconName="Favorites" />
        </Link>
        <Link href={'/watch-later'}>
          <SidebarItem iconName="Watch Later" />
        </Link>
      </nav>
      <SidebarActivities />
    </div>
  );
};
