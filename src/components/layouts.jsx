import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";
import { Spinner } from "./ui/spinner";
import { useRequestStore, STATE } from "../stores/requestStore";

export const DefaultLayout = () => {
  const state = useRequestStore((store) => store.state);
  const { pathname } = useLocation();
  const setState = useRequestStore((state) => state.setState);

  useEffect(() => {
    setState(STATE.IDLE); // Resets request state on route change
  }, [pathname, setState]);

  return (
    <>
      <Header />
      {state == "loading" ? (
        <div className="w-full h-96">
          <Spinner />
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
};
