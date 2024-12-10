import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";
  
import { UserPage } from "@hrbolek/uoisfrontend-ug";

const prefix = "/ug"
export const Routes = [
  {
    path: `/${prefix}/user/view/:id`,
    element: <UserPage />,
  },  
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />

