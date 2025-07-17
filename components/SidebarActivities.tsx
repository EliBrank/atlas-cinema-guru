import { auth } from "@/auth";
import { SidebarActivity } from "./SidebarActivity";
import { fetchActivities } from "@/lib/data";

export const SidebarActivities = async () => {
  const session = await auth();
  const userEmail = session?.user?.email || "";

  const activities = await fetchActivities(1, userEmail);
  console.log(activities);

  return (
    <div className="rounded-xl bg-accent-tint px-2 py-4 text-primary-dark opacity-0 group-hover/sidebar:opacity-100">
      <h2 className="mb-2 text-center text-lg font-bold">Latest Activities</h2>
      <div className="flex flex-col gap-4">
        {activities.length > 0 ? (
          activities.map((activity) => (
            <div key={activity.id}>
              <SidebarActivity activity={activity} />
            </div>
          ))
        ) : (
          <p>No recent activity</p>
        )}
      </div>
    </div>
  );
}
