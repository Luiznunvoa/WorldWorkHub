import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../hooks/useSession";
import { useRequestStore } from "../stores/requestStore";
import { useUserStore } from "../stores/userStore";

export function List() {
  const navigate = useNavigate();
  const { endSession, refreshToken } = useSession();

  const requestState = useRequestStore((state) => state.state);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (requestState === "success" || requestState === "error") {
      navigate("/login");
    }
  }, [requestState, navigate]); 

  return (
    <main className="flex flex-col gap-10 items-center">
      <p>Your user must be authenticated to be here</p>
      <div className="flex flex-row gap-10">
        <button className="bg-outline w-50" onClick={() => endSession()}>
          Quit
        </button>
        <button className="bg-outline w-50" onClick={() => refreshToken()}>
          refresh token
        </button>
      </div>
      <p>User id: {user.id ? user.id : "No user data on context"}</p>
    </main>
  );
}
