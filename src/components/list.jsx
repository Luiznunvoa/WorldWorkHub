
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { useRequestStore } from "../stores/requestStore";
// import { useSessionStore } from "../stores/sessionStore";

export function List() {
  const navigate = useNavigate();
  const { endSession, getNewToken } = useUsers();
  
  const requestState = useRequestStore((state) => state.state);
  // const token = useSessionStore((state) => state.accessToken)
  useEffect(() => {
    if (requestState === "success" || requestState === "error") {
      navigate("/login");
    }
  }, [requestState, navigate]);

  return (
    <main className="flex flex-col gap-10 items-center">
      <p>Your user must be authenticated to be here</p>
      <div className="flex flex-row gap-10">
        <button className="bg-outline w-50" onClick={() => endSession()}>Quit</button>
        <button className="bg-outline w-50" onClick={() => getNewToken()}>refresh token</button>
      </div>
    </main>
  );
}

