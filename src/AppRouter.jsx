import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GroupPage, UserPage } from "./Pages";
import { SearchPage } from "./Pages/SearchPage";
// import { UserPage, GroupPage } from "./Pages";

export const Routes = [
    {
        path: "/",
        errorElement: <SearchPage />,
        children: [
            {
                path: "user/:id",
                element: <UserPage />,
            },
            {
                path: "group/:id",
                element: <GroupPage />,
            },
            {
                path: "search",
                element: <SearchPage />,
            },
        ]
    }
]

const router = createBrowserRouter(Routes, {basename: "/ug"});
// const router = createBrowserRouter(Routes);

export const AppRouter = () => <RouterProvider router={router} />