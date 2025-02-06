import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { DefaultLayout } from '../layout';
import { Home } from '../../pages/home';
import { Login } from '../../pages/login';
import { Register } from '../../pages/register';
import { List } from '../../pages/list';

export function BrowserRouter() {
  const router = createBrowserRouter([ 
    { // Routes accessible to anyone
      element: <DefaultLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
      ]
    }, 
    { // Routes only accessible to non-authenticaded users
      element: /* <VerifyUserAuthentication> */ <DefaultLayout /> /* </VerifyUserAuthentication> */, 
      children: [
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        }
      ]
    },
    { // Routes only accessible to authenticaded users
      element: /* <ValidateSelectedProfile> */ <DefaultLayout /> /* </ValidateSelectedProfile> */, 
      children: [
        {
          path: "/list",
          element: <List />
        }, 
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}
