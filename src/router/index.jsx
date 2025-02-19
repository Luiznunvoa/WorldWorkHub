import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../components/home";
import { Login } from "../components/login";
import { Register } from "../components/register";
import { Dashboard } from "../components/dashboard";
import { DefaultLayout, DashBoardLayout } from "../components/layouts";
import {
  VerifyUserAuthentication,
  ValidateSelectedProfile,
} from "./middlewares";

export function BrowserRouter() {
  const router = createBrowserRouter([
    // {
    //   // Routes accessible to anyone
    //   element: <DefaultLayout />,
    //   children: [
    //     {
    //       path: "/",
    //       element: <Home />,
    //     },
    //   ],
    // },

    {
      // Routes only accessible to unauthenticated users
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
      // Routes only accessible to authenticated users
      element: (
        <ValidateSelectedProfile>
          <DashBoardLayout />
        </ValidateSelectedProfile>
      ),
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
