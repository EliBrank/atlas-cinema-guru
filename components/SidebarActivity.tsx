"use client";

import { format } from "date-fns";

export const SidebarActivity = ({
  activity,
}: {
  activity: {
    timestamp: Date;
    title: string;
    activity: "FAVORITED" | "WATCH_LATER";
  };
}) => {
  return (
    <div>
      <p>{format(new Date(activity.timestamp), "MM/dd/yyyy, h:mm:ss a")}</p>
        {activity.activity === "FAVORITED" ? (
          <p>Favorited <strong>{activity.title}</strong></p>
        ) : (
          <p>Added <strong>{activity.title}</strong> to Watch Later</p>
        )}
    </div>
  );
};
