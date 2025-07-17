'use client';

import { useState } from "react";
import { SidebarActivities } from "./SidebarActivities";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="sticky h-full max-w-64 min-w-24 overflow-y-auto bg-accent p-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav className="mb-6 flex flex-col gap-6 px-4">
        <SidebarItem iconName="Home" isHovered={isHovered} />
        <SidebarItem iconName="Favorites" isHovered={isHovered} />
        <SidebarItem iconName="Watch Later" isHovered={isHovered} />
      </nav>
      {isHovered && (
        <SidebarActivities />
      )}
    </div>
  );
};
