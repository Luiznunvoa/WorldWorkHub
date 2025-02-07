import { Outlet } from "react-router-dom";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
