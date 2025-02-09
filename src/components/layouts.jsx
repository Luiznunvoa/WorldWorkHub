import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";
import { Spinner } from "./ui/spinner";
import { useRequestStore, STATE  } from "../stores/requestStore";

export const DefaultLayout = () => {
  const state = useRequestStore.getState().state;
  const { pathname } = useLocation();
  const setState = useRequestStore((state) => state.setState);

  useEffect(() => {
    setState(STATE.IDLE); // Resets request state on route change
  }, [pathname, setState]);

  if (state == "loading") {
    return <Spinner />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
