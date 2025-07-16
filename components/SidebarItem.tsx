import { FolderIcon, StarIcon, ClockIcon } from "@heroicons/react/24/solid";

const iconMap = {
  'Home': FolderIcon,
  'Favorites': StarIcon,
  'Watch Later': ClockIcon,
};

type IconName = keyof typeof iconMap;

type Props = {
  iconName: IconName;
  hovered: boolean;
}

export const SidebarItem = ({ iconName, hovered }: Props) => {
  const IconComponent = iconMap[iconName];

  return (
    <div className="flex w-[fit-content] cursor-pointer items-center gap-2 text-primary-light">
      <IconComponent className="h-6 w-6" />
      {hovered && (
        <p className="text-sm">{iconName}</p>
      )}
    </div>
  );
}
