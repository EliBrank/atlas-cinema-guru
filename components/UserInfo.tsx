import { auth } from "@/auth";
import { Logout } from "./Logout";

export const UserInfo = async () => {
  const session = await auth();
  if (!session?.user) return null;

  return (
    <div className="flex gap-6">
      <p>Welcome, {session.user.email}</p>
      <Logout />
    </div>
  );
}
