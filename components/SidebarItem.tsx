import { FolderIcon, StarIcon, ClockIcon } from "@heroicons/react/24/solid";

const iconMap = {
  'Home': FolderIcon,
  'Favorites': StarIcon,
  'Watch Later': ClockIcon,
};

type IconName = keyof typeof iconMap;

type Props = {
  iconName: IconName;
}

export const SidebarItem = ({ iconName }: Props) => {
  const IconComponent = iconMap[iconName];

  return (
    <div className="flex items-center gap-4 object-contain">
      <div className="flex-0 flex-shrink-0">
        <IconComponent className="h-6 w-6 p-0" />
      </div>
      <span className="hidden group-hover/sidebar:inline">
        {iconName}
      </span>
    </div>
  );
}
