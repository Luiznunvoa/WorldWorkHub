import { Outlet } from "react-router-dom";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";
import { Spinner } from "./ui/spinner";
import { useRequestStore } from "../stores/requestStore";

export const DefaultLayout = () => {
  const state = useRequestStore.getState().state;

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
