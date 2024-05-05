import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { UserPage, UserEditPage, UserRolesEditPage, GroupPage, GroupEditPage, GroupRolesEditPage } from "./Pages";
import { SearchPage } from "./Pages/SearchPage";
import { EventPage } from "./Pages/EventPage";
import { EventEditPage } from "./Pages/EventEditPage";

// import { UserPage, GroupPage } from "./Pages";
const prefix = "/ug"
export const Routes = [
    // {
    //     path: "*",
    //     element: <SearchPage />,
    //     errorElement: <SearchPage />
    // },
    {
        path: prefix + "/user/view/:id",
        element: <UserPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/event/view/:id",
        element: <EventPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/event/edit/:id",
        element: <EventEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/user/edit/:id",
        element: <UserEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/userroles/edit/:id",
        element: <UserRolesEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/group/view/:id",
        element: <GroupPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/group/edit/:id",
        element: <GroupEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/grouproles/edit/:id",
        element: <GroupRolesEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/search",
        element: <SearchPage />,
        errorElement: <SearchPage />,
    },
    {
      path: prefix + "/search/:phrase",
      element: <SearchPage />,
      errorElement: <SearchPage />,
    },    
]


// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />