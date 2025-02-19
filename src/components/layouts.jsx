import { Outlet } from "react-router-dom";
import { Footer } from "./ui/footer";
import { Header } from "./ui/header";
import { Spinner } from "./ui/spinner";
import { Icon } from "./ui/icon";
import { useRequestStore } from "../stores/requestStore";
import { useUserStore } from "../stores/userStore";

export const DefaultLayout = () => {
  const state = useRequestStore((store) => store.state);
  
  return (
    <>
      <Header>
        <span
          className="flex flex-row gap-5 justify-center items-center cursor-pointer"
        >
          <Icon icon="profile" className="w-10 h-10" />
          <p>Login</p>
        </span>
      </Header>
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
  const state = useRequestStore((store) => store.state)

  return (
    <>
      <Header>
        <span
          className="flex flex-row gap-5 justify-center items-center cursor-pointer"
        >
          <Icon icon="profile" className="w-10 h-10" />
          <p>{useUserStore.getState().user.firstname || "N/A"}</p>
        </span>
      </Header>
      {state == "loading" ? (
        <div className="w-full h-96">
          <Spinner />
        </div>
      ) : (
        <main className="flex flex-row h-full items-center">
          <div className="flex flex-col h-full w-96 gap-10 bg-white border-r-2 border-outline">

          </div>
          <Outlet />
        </main>
      )}
    </>
  );
};
