import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Home } from "../components/home";
import { Login } from "../components/login";
import { Register } from "../components/register";
import { List } from "../components/list";
import { DefaultLayout, DashBoardLayout } from "../components/layouts";
import {
  VerifyUserAuthentication,
  ValidateSelectedProfile,
} from "./middlewares";

export function BrowserRouter() {
  const router = createBrowserRouter([
    // {
    //   // Routes accessible to anyone
    //   element: <YourLayout />,
    //   children: [
    //     {
    //       path: "/",
    //       element: <YourPage />
    //     },
    //   ]
    // },
    {
      // Routes only accessible to non-authenticaded users
      element: (
        <VerifyUserAuthentication>
          <DefaultLayout />
        </VerifyUserAuthentication>
      ),
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      // Routes only accessible to authenticaded users
      element: (
        <ValidateSelectedProfile>
          <DashBoardLayout />
        </ValidateSelectedProfile>
      ),
      children: [
        {
          path: "/list",
          element: <List />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
