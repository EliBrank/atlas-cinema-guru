import { SidebarActivity } from "./SidebarActivity";

export const SidebarActivities = () => {
  return (
    <div className="rounded-xl bg-accent-tint px-2 py-4 text-primary-dark">
      <h2 className="mb-2 text-center text-lg font-bold">Latest Activities</h2>
      <div className="flex flex-col gap-4">
        <SidebarActivity />
        <SidebarActivity />
        <SidebarActivity />
        <SidebarActivity />
        <SidebarActivity />
      </div>
    </div>
  );
}
