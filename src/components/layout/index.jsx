import { Outlet } from "react-router-dom";
import { Footer } from "../footer";
import { Header } from "../header";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
