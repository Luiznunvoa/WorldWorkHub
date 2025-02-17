import { useSession } from "../hooks/useSession";
import { useUserStore } from "../stores/userStore";

export function List() {
  const { endSession } = useSession();
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full">
      <p>Your user must be authenticated to be here</p>
      <div className="flex flex-row gap-10">
        <button className="bg-outline w-50" onClick={() => endSession()}>
          Quit
        </button>
      </div>
      <p>Username: {user.firstname ? user.firstname : "No user data on context"}</p>

      <p>User id: {user.id ? user.id : "No user data on context"}</p>
    </div>
  );
}
