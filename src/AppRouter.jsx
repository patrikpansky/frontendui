import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GroupPage, UserPage } from "./Pages";
// import { UserPage, GroupPage } from "./Pages";


const router = createBrowserRouter([
    {
      path: "/user/:id",
      element: <UserPage />,
    },
    {
        path: "/group/:id",
        element: <GroupPage />,
      },
  ]);

export const AppRouter = () => <RouterProvider router={router} />