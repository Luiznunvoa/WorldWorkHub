
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import { useRequestStore } from "../stores/requestStore";

export function List() {
  const navigate = useNavigate();
  const { endSession } = useUsers();
  
  const requestState = useRequestStore((state) => state.state);
  useEffect(() => {
    if (requestState === "success" || requestState === "error") {
      navigate("/login");
    }
  }, [requestState, navigate]);

  return (
    <main className="flex flex-col gap-10 items-center">
      <p>Your user must be authenticated to be here</p>
      <button onClick={() => endSession()}>Quit</button>
    </main>
  );
}

