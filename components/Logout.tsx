import { auth, signOut } from "@/auth";
import { ArrowRightStartOnRectangleIcon as LogoutIcon } from "@heroicons/react/24/solid";

export const Logout = async () => {
  const session = await auth();
  if (!session?.user) return null;

  return (
    <form action={async () => {
      "use server";
      await signOut();
    }}>
      <button type="submit" className="flex cursor-pointer items-center gap-2">
        <LogoutIcon className="size-4" />
        Logout
      </button>
    </form>
  );
};
