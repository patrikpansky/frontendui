import {
      createBrowserRouter,
      RouterProvider
} from "react-router-dom";
  
import { UserPage } from "@hrbolek/uoisfrontend-ug";
import { UserStudiesPage } from "@hrbolek/uoisfrontend-granting";
import { GroupPage } from "@hrbolek/uoisfrontend-ug";
import { AdmissionPage } from "../../../packages/admissions/src";
import { RequestPage } from "../../../packages/requests/src/Pages/RequestPage";

const prefix = "/ug"
export const Routes = [
    {
        path: `/${prefix}/user/view/:id`,
        element: <UserPage />,
    },  
    {
      path: `/${prefix}/group/view/:id`,
      element: <GroupPage />,
    },  
    {
        path: `/admissions/admission/view/:id`,
        element: <AdmissionPage />
    },  
    {
        path: `/studies/user/view/:id`,
        element: <UserStudiesPage />
    },
    {
        path: `/requests/request/view/:id`,
        element: <RequestPage />
    }
]

// const router = createBrowserRouter(Routes, {basename: "/ug"});
const router = createBrowserRouter(Routes);
// const router = createProxyBrowseRouter(Routes, {basename: "/ug"});

export const AppRouter = () => <RouterProvider router={router} />

