import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { GlobalSearchPage } from "./Pages/GlobalSearchPage";

// import { UserPage, GroupPage } from "./Pages";
const prefix = "/search"
export const Routes = [
    // {
    //     path: "*",
    //     element: <SearchPage />,
    //     errorElement: <SearchPage />
    // },
    {
      path: prefix + "/search/:term",
      element: <GlobalSearchPage />,
      errorElement: <GlobalSearchPage />,
    },
    {
        path: prefix,
        element: <GlobalSearchPage />
    },
    {
        path: prefix + "/:term",
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