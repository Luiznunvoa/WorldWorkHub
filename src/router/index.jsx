import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { DefaultLayout } from '../components/layouts';
import { Home } from '../components/home';
import { Login } from '../components/login';
import { Register } from '../components/register';
import { List } from '../components/list';
import { VerifyUserAuthentication } from './middlewares';

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
      element: <VerifyUserAuthentication><DefaultLayout /></VerifyUserAuthentication>, 
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
