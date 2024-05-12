import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import { UserPage, UserEditPage, UserRolesEditPage, GroupPage, GroupEditPage, GroupRolesEditPage } from "./Pages";
import { SearchPage } from "./Pages/SearchPage";
import { EventPage } from "./Pages/EventPage";
import { EventEditPage } from "./Pages/EventEditPage";
import { GroupSubgroupsPage } from "./Pages/GroupSubgroupsPage";
import { GroupSubgroupsEditPage } from "./Pages/GroupSubgroupsEditPage";
import { GlobalSearchPage } from "./Pages/GlobalSearchPage";
import { GroupMembersEditPage } from "./Pages/GroupMembersEditPage";

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
        path: prefix + "/groupmembers/edit/:id",
        element: <GroupMembersEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/subgroups/view/:id",
        element: <GroupSubgroupsPage />,
        errorElement: <SearchPage />,
    },
    {
        path: prefix + "/subgroups/edit/:id",
        element: <GroupSubgroupsEditPage />,
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
    {
        path: prefix,
        element: <GlobalSearchPage />
    },
    {
        path: "*",
        element: <GlobalSearchPage />
    }
]


// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />