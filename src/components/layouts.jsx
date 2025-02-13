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

export const DashBoardLayout = () => {
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
        <main className="flex flex-row items-center">
          <div className="flex flex-col gap-10 p-10 w-96 bg-white border-r-2 h-[48rem] border-outline">
            <h1 className="text-xl font-bold text-text font-kanit-thin"> Side Bar</h1>
          </div>
          <Outlet />
        </main>
      )}
      <Footer />
    </>
  );
};
